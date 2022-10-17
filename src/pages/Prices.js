import React from "react";
import Header from "../components/home_comps/Header/Header";
import IntroInstructions from "../components/price_comps/IntroInstructions/IntroInstructions";
import PriceBody from "../components/price_comps/PriceBody/PriceBody";
import PriceTopBar from "../components/public_comps/PriceTopBar/PriceTopBar";
import NavBar from '../components/public_comps/NavBar/NavBar'


const Prices = () => {
    return (
        <>
          <Header />
          <NavBar />
          <PriceTopBar />
          <PriceBody />
          <IntroInstructions />
        </>
    );
}
 
export default Prices;