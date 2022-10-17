import React from "react";
import FaqItem from "../FaqItem/FaqItem";
import './HomeFaqDisplay.css'

const HomeFaqDisplay = () => {
    const faqList = [
        {q: 'How do I book sessions?', a: `Click the "Book an introduction" button.
        Fill out the Google Form. Make sure all required fields are filled.
        I will contact you to arrange an introduction.`, id: 1},

        {q: 'Can I have online sessions?', a: `Yes! I offer both Online and In-person tutoring. All you need to do is select your preference when booking.`, id: 2},

        {q: 'Can I have group sessions?', a: `Yes, if you'd like to study with friends. Include their contact details on the booking form and we'll work out a time that works best for all.`, id: 3},

        {q: 'How much does it cost?', a: `See our full list of rates and offers on the prices page.`, id: 4},
    ]

    
    return (
        <div className="faq-div">
        <h2 className="faq-div-title">FAQ's</h2>
            {faqList.map((q) => {
                return (
                    <FaqItem faq={q} key={q.id}/>
                )
            })}
        </div>
    );
}
 
export default HomeFaqDisplay;