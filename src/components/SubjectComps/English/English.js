import React from "react";
import SubSubjectButtons from "../../home_comps/SubSubjectButtons/SubSubjectButtons";
import './English.css'

const English = () => {

    const subSubjectData = [
        {name: 'English Literature', levels: ['KS2', 'KS3', 'KS4', 'KS5', 'GCSE', 'AS', 'A-Level'], ages:['11+', '13+', '18+'], exam_boards: ['AQA', 'WJEC', 'International'], texts: ['MacBeth', 'To Kill a Mockingbird']}, 
        {name: 'English Language', levels: ['KS2', 'KS3', 'KS4', 'KS5', 'GCSE', 'AS', 'A-Level'], ages:['11+', '13+', '18+'], exam_boards: ['AQA', 'WJEC', 'International']},
        {name: 'Essay writing', levels: ['KS2', 'KS3', 'KS4', 'KS5', 'GCSE', 'AS', 'A-Level'], ages:['11+', '13+', '18+'], exam_boards: ['AQA', 'WJEC', 'International']},
        {name: 'English as a Foreign Language', ages:['11+', '13+', '18+']},
        {name: 'IELTS', ages:['11+', '13+', '18+', '25+']}
    ]

    return (
        <div className="english_page-div">
            <h1 className="subject-page-title">English</h1>
            {subSubjectData.map((subSubject) => {
                return (
                <div className="sub_subject-div">
                    <h2 className="sub_subject-title">{subSubject.name}</h2>


                    {subSubject.levels && <div className="levels-div">
                        <h4 className="levels-text">Levels</h4>
                        {subSubject.levels.map((level) => {
                            return (
                                <span className="levels-span">{level}</span>
                            )
                        })}
                    </div>}

                    {subSubject.ages && <div className="ages-div">
                        <h4 className="ages-text">Ages</h4>
                        {subSubject.ages.map((age) => {
                            return (
                                <span className="ages-span">{age}</span>
                            )
                        })}
                    </div>}

                    {subSubject.exam_boards && <div className="exam_boards-div">
                        <h4 className="exam_boards-text">Exam Boards</h4>
                        {subSubject.exam_boards.map((examBoard) => {
                            return (
                                <span className="exam_boards-span">{examBoard}</span>
                            )
                        })}
                    </div>}
                    
                    <SubSubjectButtons />

                </div>
                )
            })}
        </div>
    );


}
 
export default English;