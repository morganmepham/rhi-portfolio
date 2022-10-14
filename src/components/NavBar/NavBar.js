import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const handleContactClick = () => {
        const footer = document.querySelector('footer')
        footer.scrollIntoView({behavior: 'smooth'})
    }

    return ( 
        <nav>
            <Link to='/' className="link">Home</Link>
            <Link to='/book' className="link">Book Sessions</Link>
            <Link to='/about' className="link">About me</Link>
            <p className="link" onClick={handleContactClick}>Contact Me</p>
        </nav>
     );
}
 
export default NavBar;