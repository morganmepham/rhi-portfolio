import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return ( 
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/book'>Book Sessions</Link>
            <Link to='/about-me'>About me</Link>
            <Link to='/contact'>Contact me</Link>
        </nav>
     );
}
 
export default NavBar;