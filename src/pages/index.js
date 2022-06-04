import React from "react";
import { Router } from "@reach/router"
import Home from "./Home";

const Pages = () => {
    return(
        <Router>
           <Home path="/"/>
        </Router>
    )
}

export default Pages;