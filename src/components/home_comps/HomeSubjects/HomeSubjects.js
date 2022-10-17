import React from "react";
import './HomeSubjects.css'
import maths_background from '../../../images/maths_background.jpg'
import history_background from '../../../images/history_background.jpg'
import english_background from '../../../images/english_background.jpg'
import rs_background from '../../../images/rs_background.jpg'
import social_background from '../../../images/social_background.png'
import gray from '../../../images/gray.png'
import rs2_background from '../../../images/rs2_background.png'

import './HomeSubjects.css'
import { Link } from "react-router-dom";

const HomeSubjects = () => {
    const subjects = [
        {subject: 'Mathematics', src: maths_background, id: 1, path: 'Mathematics'},
        {subject: 'English', src: english_background, id: 2, path: 'English'},
        {subject: 'History', src: history_background, id: 3, path: 'History'},
        {subject: 'Religious Studies', src: rs2_background, id: 4, path: 'Religious-studies'},
        {subject: 'Psychology and Sociology', src: social_background, id: 5, path: 'Psychology-sociology'},
        {subject: 'Other', src: gray, id: 6, path: 'Other'}
    ]

    const handleClick = () => {
        window.scrollTo(0, 0)
    }

    const items = subjects.map((subject) => {
        return (
        <div className="subject-item" key={subject.id}>
            <img src={subject.src} alt={subject.subject} className="subject-image" />
            <Link to={`/subjects/${subject.path}` }><p className="subject-title" onClick={handleClick}>{subject.subject}</p></Link>
        </div>
        )
    })
    return (
        <>
            <h2 className="subjects-div-title">Subjects</h2>
            <div className="subjects-div">
                {items}
            </div>
        </>
    );
}
 
export default HomeSubjects;