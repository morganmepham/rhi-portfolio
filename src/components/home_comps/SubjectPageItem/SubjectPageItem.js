import React from "react";
import './SubjectPageItem.css'
import Maths from "../../SubjectComps/Maths/Maths";
import English from '../../SubjectComps/English/English'
import History from '../../SubjectComps/History/History'
import ReligiousStudies from '../../SubjectComps/ReligiousStudies/ReligiousStudies'
import PsychologySociology from '../../SubjectComps/PsychologySociology/PsychologySociology'
import Other from '../../SubjectComps/Other/Other'
import PageNotFound from '../../../pages/PageNotFound'


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
        default:
            component = <PageNotFound />
    }

    return (
        <div className="subject_page-div">
            {component}
        </div>
    );
}
 
export default SubjectPageItem;