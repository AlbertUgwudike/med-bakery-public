import QuestionProgress from './QuestionProgress';
import Question from './Question';
import { useContext, useState } from 'react';
import { FinalsQuestion, NOMORE } from '../../types';
import SectionProgress from './SectionProgress';
import styled from 'styled-components';
import Notes from './Notes';
import Chat from './Chat';
import { Title } from '../General/Title';
import MetaContext from '../../MetaContext';

type QuestionPageProps = {
    availableQuestions: FinalsQuestion[];
    updateAvailableQuestions: React.Dispatch<React.SetStateAction<FinalsQuestion[]>>;
    finishSession: () => void;
    reviewMode: boolean;
}

const QuestionPage = (props: QuestionPageProps) => {

    const { darkMode } = useContext(MetaContext);
    const [questionIdx, updateQuestionIdx] = useState(0);
    const [sectionIdx, updateSectionIdx] = useState(0);
    
    // switch to empty filler question if questionIdx out of bounds or no available questions
    const currentQuestion = questionIdx >= 0                                                    && 
                            questionIdx < props.availableQuestions.length                       && 
                            props.availableQuestions.length > 0                                 && 
                            sectionIdx < props.availableQuestions[questionIdx].sections.length
        ? props.availableQuestions[questionIdx]
        : NOMORE;

    // render nothing untill sectionIdx is valid
    if (sectionIdx >= currentQuestion.sections.length) {
        updateSectionIdx(0);
        return <></>;
    }

    const canProgressQuestion = questionIdx < props.availableQuestions.length - 1;
    const canRetreatQuestion  = questionIdx > 0;
    const canSaveAndProgress = sectionIdx === currentQuestion.sections.length - 1;

    const canProgressSection = currentQuestion.sections[sectionIdx].selectedOption !== -1 && sectionIdx < currentQuestion.sections.length - 1;
    const canRetreatSection  = sectionIdx > 0;

    const saveAndProgress = () => {

        props.updateAvailableQuestions(props.availableQuestions.map((aq, idx) => {
            return idx === questionIdx
                ? { ...aq, Answered: true }
                : aq
        }))

        // only advance question if there are questions to advance to 
        updateQuestionIdx(i => i + 1 === props.availableQuestions.length ? i : i + 1);
    }

    return (
        <InnerDiv darkMode = { darkMode }>

            <Title darkMode = { darkMode }>
                <span style = {{ color: (darkMode ? "#FAD000" : "#7babff") }}> Finals </span> Questions
            </Title>

            <br/>

            <QuestionProgress 
                canProgressQuestion = { canProgressQuestion }
                canRetreatQuestion = { canRetreatQuestion }
                questionIdx = { questionIdx }
                questionCount = { props.availableQuestions.length }
                sectionIdx = { sectionIdx }
                sectionCount = { currentQuestion.sections.length }
                updateQuestionIdx = { updateQuestionIdx }
                finishSession = { props.finishSession }
                reviewMode = { props.reviewMode }
                currentQuestion = { currentQuestion }
                updateSectionIdx = { updateSectionIdx }
            />

            <Question 
                availableQuestions = { props.availableQuestions }
                updateAvailableQuestions = { props.updateAvailableQuestions }
                questionIdx = { questionIdx }
                updateQuestionIdx = { updateQuestionIdx }
                currentQuestion = { currentQuestion }
                sectionIdx = { sectionIdx }
                updateSectionIdx = { updateSectionIdx }
            />

            <SectionProgress 
                canProgressSection = { canProgressSection } 
                canRetreatSection = { canRetreatSection } 
                updateSectionIdx = { updateSectionIdx } 
                renderBackButton = { false } 
                saveAndProgress = { saveAndProgress }
                canSaveAndProgress = { canSaveAndProgress }
            /> 

            <Notes questionIdx = { currentQuestion.questionIdx } />

            <br/><br/>

            <Chat questionIdx = { currentQuestion.questionIdx } />  

        </InnerDiv>
           
    );
}

export default QuestionPage;

const InnerDiv = styled.div<{ darkMode: boolean }>`
    max-width: 800px;
    margin: auto;
    padding-top: 20px;
`;