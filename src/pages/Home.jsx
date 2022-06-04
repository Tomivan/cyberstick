import React from "react";
import Buy from "../components/buy/buy";
import Footer from "../components/footer/footer";
import Main from "../components/main/main";
import Nav from "../components/nav/nav";
import Ready from "../components/ready/ready";
import Smarter from "../components/smarter/smarter";

const Home = () => {
    return(
        <div>
            <Nav />
            <Main />
            <Buy />
            <Smarter />
            <Ready />
            <Footer />
        </div>
    )
}

export default Home;