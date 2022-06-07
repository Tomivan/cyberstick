import React from "react";
import { Router } from "@reach/router"
import Home from "./Home";
import Bag from "./Bag";
import ShippingPage from "./Shipping";
import Payment from "./Payment";

const Pages = () => {
    return(
        <Router>
           <Home path="/"/>
           <Bag path="/bag" />
           <Payment path="/payment" />
           <ShippingPage path="/shipping" />
        </Router>
    )
}

export default Pages;