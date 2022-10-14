import React, { useState } from "react";

import './FaqItem.css'

const FaqItem = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    
    const handleClick = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
        <div className="faq-item" onClick={handleClick}>
            {!isOpen && (
                <>
                    <span className="down-arrow"></span>
                    <h3 className="faq-question">{props.faq.q} </h3>
                </>
            )}

            {isOpen && (
                <>
                    <span className="up-arrow"></span>
                    <h3 className="faq-question">{props.faq.q}</h3>
                    <p className="faq-answer">{props.faq.a}</p>
                </> 
            )}
        </div>
    );
}
 
export default FaqItem;