import React from "react";
import './HomeSubjects.css'
import maths_background from '../../images/maths_background.jpg'
import history_background from '../../images/history_background.jpg'
import english_background from '../../images/english_background.jpg'
import rs_background from '../../images/rs_background.jpg'
import social_background from '../../images/social_background.jpg'
import gray from '../../images/gray.png'

import './HomeSubjects.css'

const HomeSubjects = () => {
    const subjects = [
        {subject: 'Maths', src: maths_background, id: 1},
        {subject: 'English', src: english_background, id: 2},
        {subject: 'History', src: history_background, id: 3},
        {subject: 'Religious Studies', src: rs_background, id: 4},
        {subject: 'Psychology and Sociology', src: social_background, id: 5},
        {subject: 'Other', src: gray, id: 6}
    ]

    const items = subjects.map((subject) => {
        return (
        <div className="subject-item" key={subject.id}>
            <img src={subject.src} alt={subject.subject} className="subject-image" />
            <p className="subject-title">{subject.subject}</p>
        </div>
        )
    })
    return (
        <>
            <h2 className="subjects-div-title">What I teach</h2>
            <div className="subjects-div">
                {items}
            </div>
        </>
    );
}
 
export default HomeSubjects;