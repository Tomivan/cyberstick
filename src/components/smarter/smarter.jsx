import React from "react";
import { Link } from "@reach/router";
import TV from "../../assets/images/tv.png";
import TV2 from "../../assets/images/tv2.png";
import "./smarter.css";

const Smarter = () => {
    return(
        <div className="smarter">
            <img src={TV} alt="a tv screen showing a scene from the movie Gone Girl" className="tv"/>
            <h2>Make Your TV Smarter</h2>
            <p>With the smart Android TV™ system, Cyberstick™ offers you a new<br/> 
                multimedia experience anytime, anywhere. Compact and portable, it brings a <br />
                smarter life to your displays. 
            </p>
            <button className="buy-now"><Link to="/bag" className="link">Buy Now</Link></button>
            <img src={TV2} alt="" className="tv-2" />
        </div>
    )
}

export default Smarter;