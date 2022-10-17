import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    const [homeColor, setHomeColor] = useState('#4d3129')
    const [priceColor, setPriceColor] = useState('#593b33')

    useEffect(() => {
        const path = window.location.pathname
        if(path === '/'){
            setHomeColor('#4d3129')
            setPriceColor('#593b33')
        }else{
            setHomeColor('#593b33')
            setPriceColor('#4d3129')
        }
    }, [])

    return ( 
        <nav>
            <Link to='/' className="link link-home"  style={{backgroundColor: homeColor}}>Home</Link>
            <Link to='/prices' className="link link-prices" style={{backgroundColor: priceColor}}>Prices</Link>
        </nav>
     );
}

 
export default NavBar;