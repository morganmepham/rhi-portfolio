import React from "react";
import './IntroInstructions.css'

const IntroInstructions = () => {
    return (
        <div className="instructions-div">
            <h1 className="instructions-title">How it works</h1>
            <ul className="instructions-list">
                <li className="instructions-list-item">Click the "Book an introduction" button</li>
                <li className="instructions-list-item">Fill out the Google Form. Make sure all required fields are filled</li>
                <li className="instructions-list-item">I will contact you to arrange an introduction</li>
            </ul>
        </div>
    );
}
 
export default IntroInstructions;