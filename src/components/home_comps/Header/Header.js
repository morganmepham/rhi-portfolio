import React from "react";
import './Header.css'

const Header = () => {
    const handleContactClick = () => {
        const footer = document.querySelector('footer')
        footer.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div className="homePage-header">
            <h2 className='homePage-header-title'>Rhian Fish Tutoring</h2>
            <span className="contact-me" onClick={handleContactClick}>Contact Me</span>
        </div>
    );
}
export default Header;