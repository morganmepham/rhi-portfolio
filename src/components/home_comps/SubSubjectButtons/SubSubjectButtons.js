import React from "react";
import { Link } from "react-router-dom";
import './SubSubjectButtons.css'

const SubSubjectButtons = () => {
    const handleClick = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="sub_section-buttons-div">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdx8EIFRv6fsiYItzitiOroan1VrGtv53Jq-cSnyaNBvjiSYw/viewform?vc=0&c=0&w=1&flr=0" target = '_blank' className="book-intro-link-subjects"><span className="introduction-button">Book Introduction</span></a>
            <Link to='/prices' className="price-button-link"><span className="price-button" onClick={handleClick}>See prices</span></Link>
        </div>
    );
}
 
export default SubSubjectButtons;