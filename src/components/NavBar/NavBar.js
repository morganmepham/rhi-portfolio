import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return ( 
        <nav>
            <Link to='/' className="link">Home</Link>
            <Link to='/book' className="link">Book Sessions</Link>
            <Link to='/about' className="link">About me</Link>
            <Link to='/contact' className="link">Contact me</Link>
        </nav>
     );
}
 
export default NavBar;