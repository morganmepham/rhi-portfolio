import React from "react";
import IntroInstructions from "../components/price_comps/IntroInstructions/IntroInstructions";
import PriceBody from "../components/price_comps/PriceBody/PriceBody";
import PriceTopBar from "../components/price_comps/PriceTopBar/PriceTopBar";
import NavBar from '../components/public_comps/NavBar/NavBar'


const Prices = () => {
    return (
        <>
          <NavBar />
          <PriceTopBar />
          <PriceBody />
          <IntroInstructions />
        </>
    );
}
 
export default Prices;