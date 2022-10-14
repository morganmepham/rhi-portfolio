import React from "react";
import './English.css'

const English = () => {
    return (
        <div className="english_page-div ">
            <h1 className="english-title">English</h1>

            <div className="english_lit-div sub-div">
                <h2 className="english_lit-title">English Literature</h2>
            </div>

            <div className="english_lang-div sub-div">
                <h2 className="english_lang-title">English Language</h2>
            </div>

            <div className="english_foreign-lang-div sub-div">
                <h2 className="english_foreign-lang-title">English as a foreign Language</h2>
            </div>

            <div className="ielts-div sub-div">
                <h2 className="ielts-title">IELTS</h2>
            </div>

            <div className="essay-div sub-div">
                <h2 className="essay-title">Essay Writing</h2>
            </div>
        </div>

    );
}
 
export default English;