import React from "react";
import { Link } from "react-router-dom";
import './SubSubjectButtons.css'

const SubSubjectButtons = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="sub_section-buttons-div">
            <span className="introduction-button">Book Introduction</span>
            <Link to='/prices' className="price-button-link"><span className="price-button" onClick={handleClick}>See prices</span></Link>
        </div>
    );
}
 
export default SubSubjectButtons;