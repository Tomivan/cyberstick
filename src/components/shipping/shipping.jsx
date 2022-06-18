import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { PriceContext } from "../../context/priceContext";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "./shipping.css";

const Shipping = () => {
    const {handleSubmit, register, reset } = useForm([]);
    const {price,quantity} = useContext(PriceContext)
    console.log(price)
    function shippingDetails(data) {
        const msg = `First Name: ${data.firstName}<br />
                     Last Name: ${data.lastName} <br />
                     Street Address: ${data.address} <br />
                     Country: ${data.country} <br />
                     Zip Code: ${data.zipCode} <br />
                     City: ${data.city} <br />
                     Phone Number: ${data.phoneNumber} <br />
                     Email address: ${data.email} <br />`
        firebase.firestore().collection("mail").add({to: "bukunmiodugbesans@gmail.com", message:{html:msg, subject:"New User Signup"}})
        .then((response) => {
            reset()
             window.alert("Successfully Saved")
             console.log(response)
          })
        .catch(
            (error) => {window.alert("Unfortunately, your details didn't save! Please try again.")
            console.log(error)
            })
        
        
    }
    return(
        <div className="shipping-page">
            <div className="shipping-left">
                <h3>Shipping</h3>
                <p>Where Should We Send Your Order?</p>
                <form className="form" onSubmit={handleSubmit(shippingDetails)}>
                    <p>Enter Your Name And Address:</p>
                    <input type="text" placeholder="First Name" className="form-input" {...register("firstName",{required: true})} />
                    <input type="text" placeholder="Last Name" className="form-input"  {...register("lastName",{required: true})} />
                    <input type="text" placeholder="Street Address" className="form-input"  {...register("address",{required: true})} />
                    <input type="text" placeholder="Country" className="form-input" {...register("country",{required: true})}/>
                    <div className="form-info">
                        <input type="number" placeholder="Zip Code" className="form-input" {...register("zipCode",{required: true})} />
                        <input type="text" placeholder="City/State"className="form-input" {...register("city",{required: true})} />
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
                    <p>{price * quantity}</p>
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
                    <p>{price *quantity}</p>
                </div>
            </div>
        </div>
    )
}

export default Shipping;