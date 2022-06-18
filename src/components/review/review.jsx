import React, { useContext } from "react";
import { Link } from "@reach/router";
import DeviceStick from "../../assets/images/device-stick.png";
import "./review.css";
import { PriceContext } from "../../context/priceContext";

const Review = () => {
    const {cart, setCart} =useContext(PriceContext)
    // const [cartItem, setCartItem] = useState({
    //     quantity:1,
    //     price:39000,
    //     basePrice:39000
    // })
    const increaseQuantity = ()=>{
        setCart({...cart, quantity: cart.quantity + 1})
        
    }
    const decreaseQuantity = ()=>{
        if(cart.quantity > 1){
            setCart({...cart, quantity: cart.quantity - 1})}
    }

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
                        <span className='quantity'>
                            <div className='arrow' onClick={ decreaseQuantity}>
                                &#10094;
                            </div>
                            <span className='value'>{cart.quantity}</span>
                            <div className='arrow' onClick={increaseQuantity}>
                                &#10095;
                            </div>
                        </span>
                        <div className="money">
                            <p>{cart.price * cart.quantity}</p>
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
                            <p>N{cart.price * cart.quantity}</p>
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
                            <p>N{cart.price * cart.quantity}</p>
                        </div>
                    </div>
                    <button className="buy-now checkout"><Link to="/shipping" className="link">CheckOut</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Review;