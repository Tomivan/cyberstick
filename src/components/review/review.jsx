import React from "react";
import { Link } from "@reach/router";
import DeviceStick from "../../assets/images/device-stick.png";
import "./review.css";

const Review = () => {
    return(
        <div className="review">
            <h3>Review Your Bag</h3>
            <div className="review-info">
                <div className="review-left">
                    <div className="review-left-info">
                        <img src={DeviceStick} alt="the cyberstick" className="device-stick"/>
                        <div className="delivery">
                            <p>Cyberstick - Black</p>
                            <p>Get it in 3 days</p>
                        </div>
                        <input type="number" required/> 
                        <div className="money">
                            <p>N25,000</p>
                            <p><span className="gradient">Remove</span></p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="review-right">
                    <div className="review-right-info">
                        <p>ORDER SUMMARY</p>
                        <div className="input">
                            <input type="text" placeholder="Enter Discount Code" className="form-input"/>
                            <button className="apply">Apply</button>
                        </div>
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p>N25,000</p>
                        </div>
                        <div className="shipping">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="estimate">
                            <p>Estimated Tax</p>
                            <p>-</p>
                        </div>
                        <hr />
                        <div className="total">
                            <p>Total</p>
                            <p>N25,000</p>
                        </div>
                    </div>
                    <button className="buy-now checkout"><Link to="/shipping" className="link">CheckOut</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Review;