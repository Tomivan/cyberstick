import React from "react";
import Cyber from "../../assets/images/cyber.png";
import Cart from "../../assets/images/cart.png";
import Search from "../../assets/images/search.png";
import "./nav.css";

const Nav = () => {
    return(
        <div className="nav">
            <div className="nav-left">
                <img src={Cyber} alt="The official cyberstick logo" />
                <ul>
                    <li>Overview</li>
                    <li>Specs</li>
                </ul>
            </div>
            <div className="nav-icons">
                <img src={Cart} alt="" />
                <img src={Search} alt="" />
            </div>
        </div>
    )
}

export default Nav;