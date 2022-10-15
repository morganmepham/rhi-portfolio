import React from "react";
import './NoPage.css'

const NoPage = () => {
    return (
        <div className="not-found-div">
            <h1 className="not-found-text">Oops! Theres nothing here. This isn't a valid URL</h1>
            <h2 className="not-found-text-2">Use the Navigation bar to find your way around</h2>
        </div>
    );
}
 
export default NoPage;