import React from "react";
import Logo from '../images/logo.png';
import Cart from '../images/cart.png';

function Header() {
    const checkout = () => {
        window.location.href = '/checkout';
    }
    return (
        <div>
            <div className="headerTop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <img src={Logo} />
                            </div>
                        </div>
                        <div className="col-md-9" style={{
                            display: "flex", justifyContent: "flex-end", alignItems: "center"
                        }}>
                            <div className="cartSec" onClick={() => checkout()} >
                                <img src={Cart} />
                                <span className="itemNum" style={{
                                    background: "#c11919",
                                    width: "25px",
                                    height: "25px",
                                    color: "#fff",
                                    float: "right",
                                    textAlign: "center",
                                    borderRadius: "50%",
                                    position: "relative",
                                    bottom: "-23px",
                                    right: "10px"
                                }}
                                >{JSON.parse(window.sessionStorage.getItem("getFinalArray")) == null ? "" : JSON.parse(window.sessionStorage.getItem("getFinalArray")).length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;