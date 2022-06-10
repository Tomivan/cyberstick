import React from "react";
import { Link } from "@reach/router";
import Cyber from "../../assets/images/cyber.png";
import Cart from "../../assets/images/cart.png";
import "./nav.css";

const Nav = () => {
    return(
        <div className="nav">
            <Link to="/"><img src={Cyber} alt="The official cyberstick logo" /></Link>
            <Link to="/bag"><img src={Cart} alt="" /></Link>
        </div>
    )
}

export default Nav;