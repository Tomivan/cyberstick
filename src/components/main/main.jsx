import React from "react";
import { Link } from "@reach/router";
import Background from "../../assets/images/background.png";
import Cyberstick from "../../assets/images/cyberstick.png";
import "./main.css";

const Main = () => {
    return(
        <div className="main">
            <img src={Background} alt="" className="background"/>
            <div className="main-info">
                <div className="left">
                    <h1>Think Beyond Smart,<br /> <span className="gradient">Think Cyberstick</span></h1>
                    <p>A multi purpose device that offers users to stream content with access to<br /> applications
                        that allows users to work on the go
                    </p>
                    <button className="buy-now"><Link to="/bag" className="link">Buy Now</Link></button>
                </div>
                <img src={Cyberstick} alt="" className="cyberstick"/>
            </div>
        </div>
    )
}

export default Main;