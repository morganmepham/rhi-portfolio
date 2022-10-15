import React from "react";
import IntroImg from '../../../images/IntroImg.jpeg'
import './HomeIntro.css'

const HomeIntro = () => {
    return (
        <div className="intro-div">
            <img src={IntroImg} alt="Rhian Fish" className="intro-img"/>
            <div className="intro-text-div">
                <h2 className="intro-title">Lorem ipsum</h2>
                <p className="intro-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, commodi maiores deleniti sit dignissimos consequatur, vitae placeat non quo quaerat sed asperiores! Debitis odit harum impedit numquam et ratione corrupti!</p>
            </div>
            <div className="badges-div">
                <span className="dbs-span badge-span">
                    <p className="dbs-text">DBS Checked</p>
                </span>
                <span className="experience-span badge-span">
                    <p className="experience-text">+5 Years Experience</p>
                </span>
                <span className="wjec_aqa-span badge-span">
                    <p className="wjec_aqa-text">WJEC & AQA</p>
                </span>
            </div>
        </div>
    );
}
 
export default HomeIntro;
