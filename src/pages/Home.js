import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeIntro from "../components/HomeIntro/HomeIntro";
import NavBar from '../components/NavBar/NavBar'


const Home = () => {
    return (
        <>
          <HomeHeader />
          <NavBar />
          <HomeIntro />
        </>
    );
}
 
export default Home;