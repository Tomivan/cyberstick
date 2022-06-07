import React from "react";
import { useForm } from "react-hook-form";
import "./shipping.css";

const Shipping = () => {
    const {handleSubmit, register } = useForm([]);
    return(
        <div className="shipping-page">
            <div className="shipping-left">
                <h3>Shipping</h3>
                <p>Wher Should We Send Your Order?</p>
                <form className="form" onSubmit={handleSubmit()}>
                    <p>Enter Your Name And Address:</p>
                    <input type="text" placeholder="First Name" className="form-input" name="firstname" {...register("firstname",{required: true})} />
                    <input type="text" placeholder="Last Name" className="form-input" name="lasstname" {...register("lastname",{required: true})} />
                    <input type="text" placeholder="Street Address" className="form-input" name="address" {...register("address",{required: true})} />
                    <input type="text" placeholder="Country" className="form-input" required/>
                    <div className="form-info">
                        <input type="number" placeholder="Zip Code" className="form-input" name="zipCode" {...register("zipCode",{required: true})} />
                        <input type="text" placeholder="City/State"className="form-input" name="city" {...register("city",{required: true})} />
                    </div>
                    <p>What's Your Contact Information?</p>
                    <input type="email" placeholder="Email Address" className="form-input" name="email" {...register("email",{required: true})} />
                    <input type="number" placeholder="Phone Number" className="form-input" name="phoneNumber" {...register("phoneNumber",{required: true})} />
                    <button className="buy-now proceed">Proceed to Payment</button>
                </form>
           </div>
           <div className="review-right-info">
                <p>Your Order Total</p>
                <div className="input">
                    <input type="text" placeholder="Enter Discount Code" className="form-input" name="discount" {...register("discount")} />
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
        </div>
    )
}

export default Shipping;