import React from "react";
import './SubjectPageItem.css'
import Maths from "../Maths/Maths";
import English from '../English/English'
import History from '../History/History'
import ReligiousStudies from '../ReligiousStudies/ReligiousStudies'
import PsychologySociology from '../PsychologySociology/PsychologySociology'
import Other from '../Other/Other'


const SubjectPageItem = (props) => {
    const subject = props.subject
    let component;
    switch(subject){
        case 'Mathematics':
            component = <Maths />
            break;
        case 'English':
            component = <English />
            break;
        case 'History':
            component = <History />
            break;
        case 'Religious-studies':
            component = <ReligiousStudies />
            break;
        case 'Psychology-sociology':
            component = <PsychologySociology/>
            break;
        case 'Other':
            component = <Other />
            break;
    }

    return (
        <div className="subject_page-div">
            {component}
        </div>
    );
}
 
export default SubjectPageItem;