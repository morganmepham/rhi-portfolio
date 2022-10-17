import React from "react";
import './BookIntroButton.css'

const BookIntroButton = () => {
    return (
        <div className="intro-button-div">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdx8EIFRv6fsiYItzitiOroan1VrGtv53Jq-cSnyaNBvjiSYw/viewform?vc=0&c=0&w=1&flr=0" className = 'price-intro-button'target='_blank'><span className="intro-button-span">Book an introduction</span></a>
        </div>
    );
}
 
export default BookIntroButton;