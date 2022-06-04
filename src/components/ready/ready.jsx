import React from "react";
import Step from "../../assets/images/step.png";
import ArrowUp from "../../assets/images/arrow-up.png";
import ArrowDown from "../../assets/images/arrow-down.png";
import "./ready.css";

const Ready = () => {
    return(
        <div className="ready">
            <div className="ready-top">
                <h2>Ready To Use In<br/><span className="gradient">Just 3 Steps</span> </h2>
                <p>With the smart Android TV™ system, Cyberstick™ offers you<br />
                    a new multimedia experience anytime, anywhere. Compact <br/>
                    and portable, it brings a smarter life to your displays. </p>
            </div>
            <div className="ready-bottom">
                <img src={ArrowUp} alt="" className="arrow" />
                <div className="ready-bottom-content">
                    <div className="ready-box">
                        <p>1</p>
                        <img src={Step} alt="" className="step"/>
                        <p>Connect the Cyberstick™  to your TV</p>
                    </div>
                    <div className="ready-box">
                        <p>2</p>
                        <img src={Step} alt="" className="step"/>
                        <p>Connect the WiFi</p>
                    </div>
                    <div className="ready-box">
                        <p>3</p>
                        <img src={Step} alt="" className="step"/>
                        <p>Start Watching</p>
                    </div>
                </div>
                <img src={ArrowDown} alt="" className="arrow" />
            </div>
        </div>
    )
}

export default Ready;