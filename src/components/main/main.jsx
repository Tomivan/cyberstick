import React from "react";
import Background from "../../assets/images/background.png";
import Cyberstick from "../../assets/images/cyberstick.png";
import "./main.css";

const Main = () => {
    return(
        <div className="main">
            <img src={Background} alt="" className="background"/>
            <div className="main-info">
                <h1>Think Beyond Smart,<br /> <span className="gradient">Think Cyberstick</span></h1>
                <p>A multi purpose device that offers users to stream content with access to<br /> applications
                    that allows users to work on the go
                </p>
                <img src={Cyberstick} alt="" className="cyberstick"/>
            </div>
        </div>
    )
}

export default Main;