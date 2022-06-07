import React from "react";
import { Link } from "@reach/router";
import "./buy.css";

const Buy = () => {
    return(
        <div className="buy">
            <h2><span className="gradient">Unlock</span> A Whole New<br /> World Of Content</h2>
            <p>Stay plugged with cyberstick, a smarter life to your TV</p>
            <button className="buy-now"><Link to="/bag" className="link">Buy Now</Link></button>
        </div>
    )
}

export default Buy;