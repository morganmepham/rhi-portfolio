import React from "react";
import NavBar from '../components/public_comps/NavBar/NavBar'
import SubjectPageItem from "../components/home_comps/SubjectPageItem/SubjectPageItem";
import Header from '../components/home_comps/Header/Header'


const SubjectPage = () => {

  const path = window.location.pathname
  const subject = path.substring(10)


    return (
        <>
          <Header />
          <NavBar />
          <SubjectPageItem subject ={subject}/>
        </>
    );
}
 
export default SubjectPage;