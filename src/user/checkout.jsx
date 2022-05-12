import React from "react";
import close from '../images/close.png';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Checkout() {
    const location = useLocation();
    const [getCheckoutArray, setCheckoutArray] = useState([]);
    const [getAmoutDue, setAmoutDue] = useState('0.00');
    useEffect(() => {
        setCheckoutArray(JSON.parse(window.sessionStorage.getItem("getFinalArray")))
        var sum = 0;
        for (var i = 0; i < JSON.parse(window.sessionStorage.getItem("getFinalArray")).length; i++) {
            sum = sum + (Number(JSON.parse(window.sessionStorage.getItem("getFinalArray"))[i].getDataQuantity) * Number(JSON.parse(window.sessionStorage.getItem("getFinalArray"))[i].amount))
        }
        setAmoutDue(sum)
    }, []);
    const remove = (i) => {
        let newFormValues1 = [...getCheckoutArray];
        newFormValues1.splice(i, 1);
        setCheckoutArray(newFormValues1);
        window.sessionStorage.setItem("getFinalArray", JSON.stringify(newFormValues1));
        var sum = 0;
        for (var i = 0; i < JSON.parse(window.sessionStorage.getItem("getFinalArray")).length; i++) {
            sum = sum + (Number(JSON.parse(window.sessionStorage.getItem("getFinalArray"))[i].getDataQuantity) * Number(JSON.parse(window.sessionStorage.getItem("getFinalArray"))[i].amount))
        }
        setAmoutDue(sum)
    };
    const getDataQuantityChange = (e, i) => {
        const { name, value } = e.target;
        const values = [...getCheckoutArray];
        values[i] = { ...values[i], [name]: value };
        var sum = 0;
        for (var i = 0; i < values.length; i++) {
            sum = sum + (Number(values[i].getDataQuantity) * Number(values[i].amount))
        }
        setAmoutDue(sum)
        setCheckoutArray(values);
    };
    const proceedToCheckout = () => {
        alert("Order Placed")
        window.sessionStorage.removeItem("getFinalArray");
        window.location.href = '/';
    }
    const backToHome = () => {
        window.location.href = '/';
    }
    return (
        <>
            <Header />
            <div className="productListWrapper productListDetails ">
                <div className="container">
                    <button onClick={() => backToHome()} style={{
                        background: "#dddddd",
                        border: "none",
                        fontSize: "13px",
                        marginBottom: "20px",
                        padding: "5px 10px"
                    }}>Back to Home</button>
                    <div className="row">
                        <div className="col-md-8">
                            {getCheckoutArray.map((checkoutArrayObj, i) => (
                                <div className="row productCategoryList">
                                    <div className="col-md-2">
                                        <img src={checkoutArrayObj.image} style={{ width: "100%" }} />
                                    </div>
                                    <div className="col-md-6">
                                        <p>{checkoutArrayObj.name}</p>
                                        <span>Rs : &#8377; {checkoutArrayObj.amount}</span>
                                    </div>
                                    <div className="col-md-3">
                                        <span className="qtyWrap">
                                            <select
                                                name="getDataQuantity"
                                                id={'getDataQuantity' + i}
                                                value={checkoutArrayObj.getDataQuantity}
                                                onChange={(e) =>
                                                    getDataQuantityChange(e, i)}
                                                className="cartValue">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="col-md-1">
                                        <img src={close} onClick={(e) => remove(i)} style={{ cursor: "pointer" }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4 proSpec">
                            <div className="proListSec cartSection">
                                <p><b>Image Name : </b>Bakeries</p>
                                <p><b>Total Price : <span style={{ fontSize: "25px" }}>&#8377; {getAmoutDue}</span></b></p>
                                <span>
                                    <button className="cartBtn" onClick={() => proceedToCheckout()}>Proceed To Checkout</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Checkout;