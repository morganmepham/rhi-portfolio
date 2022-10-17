import React from "react";
import './PriceTopBar.css'

const PriceTopBar = () => {
    return (
        <div className="book_intro-div">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdx8EIFRv6fsiYItzitiOroan1VrGtv53Jq-cSnyaNBvjiSYw/viewform?vc=0&c=0&w=1&flr=0" target='_blank' className="book-intro-link"><span className="book-intro-button">Book now</span></a>
            <h3 className="book-intro-text">Would you like to book an introduction?</h3>
        </div>
    );
}
 
export default PriceTopBar;