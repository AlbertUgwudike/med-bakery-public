import ProgressPie from './ProgressPie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useWindowSize } from '../../functions';
import QuestionSectionSelector from './QuestionSectionSelector';
import { FinalsQuestion } from '../../types';
import { Panel } from '../General/Panel';
import { useContext } from 'react';
import MetaContext from '../../MetaContext';

type QuestionProgressProps = {
    questionIdx: number;
    questionCount: number;
    sectionIdx: number;
    sectionCount: number;
    updateQuestionIdx: React.Dispatch<React.SetStateAction<number>>;
    updateSectionIdx: React.Dispatch<React.SetStateAction<number>>; 
    canProgressQuestion: boolean;
    canRetreatQuestion: boolean;
    currentQuestion: FinalsQuestion;
    finishSession: () => void;
    reviewMode: boolean;
}

const QuestionProgress = (props: QuestionProgressProps) => {

    const { darkMode } = useContext(MetaContext);
    const [width, height] = useWindowSize();
    const narrowWindow = width < 800;

    const progress = () => props.updateQuestionIdx(i => props.canRetreatQuestion ? i - 1 : i);
    const retreat = () => props.updateQuestionIdx(i => props.canProgressQuestion ? i + 1 : i);

    return (
        <Panel darkMode = { darkMode }>

            <div style = {{ display: narrowWindow ? "block" : "inline-block", textAlign: narrowWindow ? "center" : "left", position: 'relative', top: narrowWindow ? "0" : "75px" }}>

                <QuestionSwitcher onClick = { progress }> <FaArrowLeft color = { darkMode ? "white" : "black" } /> </QuestionSwitcher>
                    {props.questionIdx + 1} / { props.questionCount }
                <QuestionSwitcher onClick = { retreat }> <FaArrowRight color = { darkMode ? "white" : "black" } /> </QuestionSwitcher>

                <Link to = { props.reviewMode ? "/User/Finals/LastSession" : "/User/Finals"} >
                    <FinishButton darkMode = { darkMode } onClick = { props.finishSession }>
                        Finish Session
                    </FinishButton>
                </Link>

            </div>

            <div  style = { 
                narrowWindow
                    ? { display: "block", textAlign: "center"  }
                    : { display: "inlilne-block", position: "relative", left: "50%", width: "max-content"}
            }>

                <div style = {{ marginLeft: narrowWindow ? "auto" : "-72px"}}>
                    <ProgressPie 
                        sectionCount = { props.sectionCount } 
                        sectionIdx = { props.sectionIdx } 
                        pieRadius = { 50 }
                        darkMode ={ darkMode }
                        questionIdx = { props.questionIdx }
                    /> 
                </div>

            </div>

            <QuestionSectionSelector 
                sectionIdx = { props.sectionIdx } 
                updateSectionIdx = { props.updateSectionIdx } 
                currentQuestion = { props.currentQuestion }
                darkMode = { darkMode }
            />

            
        </Panel>
    );
}

export default QuestionProgress;

const QuestionSwitcher = styled.button`
    color: white;
    border: none;
    background-color: transparent;
    font: bold 20px sans-serif;
`;

const FinishButton = styled.button<{ darkMode: boolean }>`
    background-color: ${ props => props.darkMode ? "#0D163C" : "#FFF4F7" };
    color: ${ props => props.darkMode ? "white" : "black" };
    border: none;
    border-radius: 5px;
    margin-left: 20px;
`;