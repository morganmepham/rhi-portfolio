import React from "react";
import NavBar from '../components/public_comps/NavBar/NavBar'
import SubjectPageItem from "../components/SubjectPageItem/SubjectPageItem";


const SubjectPage = () => {

  const path = window.location.pathname
  const subject = path.substring(10)


    return (
        <>
          <NavBar />
          <SubjectPageItem subject ={subject}/>
        </>
    );
}
 
export default SubjectPage;