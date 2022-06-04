import React from "react";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png"
import "./footer.css";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-1">
                    <p>SHOP</p>
                    <p>Watches</p>
                    <p>Mobile Accessories</p>
                    <p>Mobile Audio</p>
                    <p>TV & Home Theater</p>
                    <p>Computing</p>
                </div>
                <div className="footer-1">
                    <p>SUPPORT</p>
                    <p>Contact Us</p>
                    <p>Product Support</p>
                    <p>Order Support</p>
                    <p>Your Account</p>
                    <p>Register Your Product</p>
                </div>
                <div className="footer-1">
                    <p>CONTACT US</p>
                    <p>Facebook</p>
                    <p>Youtube</p>
                    <p>Instagram</p>
                    <p>Cyberstick™ Studios</p>
                    <p>Cyberstick™ Imagery</p>
                    <p>Cyberstick™ Creators</p>
                    <p>Computing</p>
                </div>
                <div className="footer-1">
                    <p>ABOUT US</p>
                    <p>Our Business</p>
                    <p>Brand Identity</p>
                    <p>Careers</p>
                    <p>Investor Relations</p>
                    <p>Newsroom</p>
                    <p>Corporate Citizenship</p>
                    <p>Digital Responsibility</p>
                </div>
            </div>
            <hr />
            <div className="footer-down">
                <p>Copyright 2022 Cyberstick™, All rights reserved</p>
                <div className="social-icons">
                    <img src={Facebook} alt="the official facebook logo" className="social-icon" />
                    <img src={Twitter} alt="the official twitter logo" className="social-icon" />
                    <img src={Instagram} alt="the official instagram logo" className="social-icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer;