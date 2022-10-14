import React from "react";
import FaqItem from "../FaqItem/FaqItem";
import './HomeFaqDisplay.css'

const HomeFaqDisplay = () => {
    const faqList = [
        {q: 'How do I book sessions?', a: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et voluptate illo, eligendi blanditiis amet. Maiores nisi obcaecati saepe, deserunt hic quam, aliquam sed quibusdam fuga, nesciunt eos! Delectus, vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, itaque ipsum vel ipsam perferendis esse eum repudiandae adipisci maiores officia provident odit doloremque nisi dolor a consequatur harum non vitae?`, id: 1},
        {q: 'How do I book sessions?', a: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et voluptate illo, eligendi blanditiis amet. Maiores nisi obcaecati saepe, deserunt hic quam, aliquam sed quibusdam fuga, nesciunt eos! Delectus, vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, itaque ipsum vel ipsam perferendis esse eum repudiandae adipisci maiores officia provident odit doloremque nisi dolor a consequatur harum non vitae?`, id: 2},
        {q: 'How do I book sessions?', a: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et voluptate illo, eligendi blanditiis amet. Maiores nisi obcaecati saepe, deserunt hic quam, aliquam sed quibusdam fuga, nesciunt eos! Delectus, vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, itaque ipsum vel ipsam perferendis esse eum repudiandae adipisci maiores officia provident odit doloremque nisi dolor a consequatur harum non vitae?`, id: 3},
        {q: 'How do I book sessions?', a: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et voluptate illo, eligendi blanditiis amet. Maiores nisi obcaecati saepe, deserunt hic quam, aliquam sed quibusdam fuga, nesciunt eos! Delectus, vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, itaque ipsum vel ipsam perferendis esse eum repudiandae adipisci maiores officia provident odit doloremque nisi dolor a consequatur harum non vitae?`, id: 4},
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