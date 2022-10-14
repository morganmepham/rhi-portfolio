import React from "react";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import HomeIntro from "../components/HomeIntro/HomeIntro";
import HomeSubjects from "../components/HomeSubjects/HomeSubjects";
import NavBar from '../components/NavBar/NavBar'


const Home = () => {
    return (
        <>
          <HomeHeader />
          <NavBar />
          <HomeIntro />
          <HomeSubjects />
        </>
    );
}
 
export default Home;