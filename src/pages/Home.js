import React from "react";
import HomeFaqDisplay from "../components/home_comps/HomeFaqDisplay/HomeFaqDisplay";
import HomeHeader from "../components/home_comps/HomeHeader/HomeHeader";
import HomeIntro from "../components/home_comps/HomeIntro/HomeIntro";
import HomeSubjects from "../components/home_comps/HomeSubjects/HomeSubjects";
import NavBar from '../components/public_comps/NavBar/NavBar'


const Home = () => {
    return (
        <>
          <HomeHeader />
          <NavBar />
          <HomeIntro />
          <HomeSubjects />
          <HomeFaqDisplay />
        </>
    );
}
 
export default Home;