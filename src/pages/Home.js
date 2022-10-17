import React from "react";
import HomeFaqDisplay from "../components/home_comps/HomeFaqDisplay/HomeFaqDisplay";
import Header from "../components/home_comps/Header/Header";
import HomeIntro from "../components/home_comps/HomeIntro/HomeIntro";
import HomeSubjects from "../components/home_comps/HomeSubjects/HomeSubjects";
import NavBar from '../components/public_comps/NavBar/NavBar'
import PriceTopBar from '../components/public_comps/PriceTopBar/PriceTopBar'

const Home = () => {
    return (
        <>
          <Header />
          <NavBar />
          <PriceTopBar />
          <HomeIntro />
          <HomeSubjects />
          <HomeFaqDisplay />
        </>
    );
}
 
export default Home;