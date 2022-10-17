import React from "react";
import './Maths.css'
import SubSubjectButtons from "../../home_comps/SubSubjectButtons/SubSubjectButtons";

const Maths = () => {
    const subSubjectData = [
        {name: 'Mathematics', levels: ['KS2', 'KS3', 'KS4', 'KS5', 'GCSE'], ages:['11+', '13+'], exam_boards: ['AQA', 'WJEC', 'International']},
        {name: 'Maths Numeracy', levels: ['KS4', 'KS5', 'GCSE'], ages:['11+', '13+'], exam_boards: ['AQA', 'WJEC', 'International']},
    ]

    return (
        <div className="maths_page-div">
            <h1 className="subject-page-title">Mathematics</h1>
            {subSubjectData.map((subSubject) => {
                return (
                <div className="sub_subject-div">
                    <h2 className="sub_subject-title">{subSubject.name}</h2>

                    {subSubject.texts && <div className="texts-div">
                        <h4 className="texts-text">Texts</h4>
                        {subSubject.texts.map((text) => {
                            return (
                                <span className="texts-span">{text}</span>
                            )
                        })}
                    </div>}

                    {subSubject.levels && <div className="levels-div">
                        <h4 className="levels-text">At Levels</h4>
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
 
export default Maths;