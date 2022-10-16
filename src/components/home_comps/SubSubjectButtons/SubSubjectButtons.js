import React from "react";
import { Link } from "react-router-dom";
import './SubSubjectButtons.css'

const SubSubjectButtons = () => {
    return (
        <div className="sub_section-buttons-div">
            <span className="introduction-button">Book an introduction</span>
            <Link to='/prices' className="price-button-link"><span className="price-button">See prices</span></Link>
        </div>
    );
}
 
export default SubSubjectButtons;