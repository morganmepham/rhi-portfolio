import React from "react";
import IntroImg from '../../../images/IntroImg.jpeg'
import './HomeIntro.css'

const HomeIntro = () => {
    return (
        <div className="intro-div">
            <img src={IntroImg} alt="Rhian Fish" className="intro-img"/>
            <div className="intro-text-div">
                <h2 className="intro-title">Tutor</h2>
                <p className="intro-text">Tutoring for all ages and abilities. I have achieved 10 GCSEs A*-A, 3 A-Levels A-B and have recently completed an undergraduate degree in Human and Social Sciences (BSc). I am currently studying Integrative Counselling (MSc). I have worked with children from Primary to Secondary Education and further assisting them through their GCSEs and A-Levels. I have experience working with young people with Additional Learning Needs, and those who have physical/learning disabilities. I will always ensure to discuss with students at the end of each session what works for them, what they might like to do differently, and what the following sessions will involve.</p>
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
                <span className="online-span badge-span">
                    <p className="online-text">Online & <br/>In-person</p>
                </span>
            </div>
        </div>
    );
}
 
export default HomeIntro;
