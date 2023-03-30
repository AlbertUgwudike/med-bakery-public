import { FinalsQuestion } from "../../types"
import { FaArrowRight } from "react-icons/fa";
import Question from "../QuestionPage/Question";
import { useState } from "react";
import demoquestion from "./demoquestion";
import SectionProgress from "../QuestionPage/SectionProgress";
import styled from 'styled-components'
import { Panel } from "../General/Panel";

const FinalsHomePageDemo = () => {
    const [availableQuestions, updateAvailableQuestions] = useState([demoquestion] as FinalsQuestion[])
    const [questionIdx, updateQuestionIdx] = useState(0);
    const [sectionIdx, updateSectionIdx] = useState(0);

    return (
        <Panel className = "row" darkMode = { true }>

            <div className = "col-md-4">
                <EcgTitle>Question Bank</EcgTitle>
                <p>An extensive collection of practice questions, curated in sections that actually reflect clinical practice.</p>
                <p>Get a feel for it <FaArrowRight size = "30"/></p>               
            </div>

            <div className = "col-md-8">

                <Question 
                    currentQuestion = { availableQuestions[questionIdx] }
                    sectionIdx = { sectionIdx }
                    updateSectionIdx = { updateSectionIdx }
                    updateQuestionIdx = { updateQuestionIdx }
                    availableQuestions = { availableQuestions }
                    updateAvailableQuestions = { updateAvailableQuestions }
                    questionIdx = { 0 }
                />

                <SectionProgress 
                    updateSectionIdx = { updateSectionIdx }
                    canRetreatSection = { sectionIdx > 0 }
                    canProgressSection = { sectionIdx < availableQuestions[questionIdx].sections.length - 1 }
                    renderBackButton = { false }
                    canSaveAndProgress = { false }
                    saveAndProgress = { () => {} }
                />

                {
                    availableQuestions[questionIdx].sections.length === sectionIdx + 1 
                        ? <button className = "ecgdemo-refresh" onClick = { () => document.getElementById("loginboi")!.click() }>Want some more? ...</button>
                        : <></>
                }

            </div>

        </Panel>
    )
}

export default FinalsHomePageDemo

const EcgTitle = styled.div`
    text-align: center;
    color: #FAD000;
    font: 70px Champion;
    margin: 60px 10px 0 0;

    @media (max-width: 600px) { 
        font-size: 35px; 
        margin: 30px auto 40px auto;
    }
`