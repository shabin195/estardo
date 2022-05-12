import React from "react";
import Header from '../layout/header';
import Footer from '../layout/footer';
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function ProductListDetails() {
    const location = useLocation();
    const [getData, setData] = useState([]);
    const [getDataQuantity, setDataQuantity] = useState(0);
    useEffect(() => {
        const { data } = location.state;
        setData(data)
    }, []);
    const setCheckout = () => {
        if(getDataQuantity == 0){
            alert("Please Select Quantity.")
        }
        else{

        
        if (JSON.parse(window.sessionStorage.getItem("getFinalArray")) == null) {
            var setFinalArray = []
        }
        else {
            var setFinalArray = JSON.parse(window.sessionStorage.getItem("getFinalArray"))
        }
        var arrayObj = {
            id: getData.id,
            name: getData.name,
            image: getData.image,
            amount: getData.amount,
            getDataQuantity: getDataQuantity,
        };
        setFinalArray.push(arrayObj)
        window.sessionStorage.setItem("getFinalArray", JSON.stringify(setFinalArray));
        window.location.href = '/checkout';
    }
    }
    const backToHome = () => {
        window.location.href = '/';
    }
    return (
        <>
            <Header />
            <div className="productListWrapper productListDetails ">
                <div className="container">
                    <button style={{
                        background: "#dddddd",
                        border: "none",
                        fontSize: "13px",
                        marginBottom: "20px",
                        padding: "5px 10px"
                    }} onClick={() => backToHome()}>Back to Home</button>
                    <h1>Product Details</h1>
                    <div className="row">
                        <div className="col-md-8">
                            <a>
                                <div className="proListSec proListSecLarge">
                                    <img src={getData.image} />
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 proSpec">
                            <div className="proListSec cartSection">
                                <p><b>Product Name : </b>{getData.name}</p>
                                <p><b>Price : <span style={{ fontSize: "25px" }}>&#8377; {getData.amount}</span></b></p>
                                <span className="addcart">
                                    <a onClick={() => setCheckout()} className="cartBtn">Add to Cart</a>
                                    <select className="cartValue" value={getDataQuantity} onChange={(e) => setDataQuantity(e.target.value)}>
                                        <option value="0">0</option>
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
                                <h3><b>Product Prescription</b></h3>
                                <p>Cake is a form of sweet food made from flour, sugar, and other ingredients, that is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProductListDetails;