import React from "react";
import './Footer.css'
import facebookIcon from '../../images/facebookIcon.png'
import linkedInIcon from '../../images/linkedInIcon.png'

const Footer = () => {
    return (
        <footer className="footer">
            <h4 className="footer-title">Contact me</h4>
            <div className="email-div">
                <a className="email-text" href="mailto:Email@gmail.com">Email@gmail.com</a>
            </div>
            <div className="social-links-div">
                <a href='#'>
                    <div className="facebookLink-div social-click">
                        <img src = {facebookIcon} alt="facebook-icon"/>
                        <h4 className="facebook-text">FaceBook</h4>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/rhian-fish-4b5564213/?originalSubdomain=uk' target= '_blank' rel="noreferrer">
                    <div className="LinkedinLink-div social-click">
                        <img src = {linkedInIcon} alt="linkedIn-icon"/>
                        <h4 className="linkedIn-text">LinkedIn</h4>
                    </div>
                </a>
            </div>
        </footer>
    );
}
 
export default Footer;