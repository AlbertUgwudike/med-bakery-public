import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MetaContext from "../../MetaContext";
import { Panel } from "../General/Panel";
import { Subtitle } from "../General/Subtitle";
import { Title } from "../General/Title";
import ECGAnsweredOptions from "./ECGAnsweredOptions";
import ECGOptions from "./ECGOptions";
import ECGQuestionProgress from "./ECGQuestionProgress";
import { generateECG } from "./Generator/ECGGenerator";
import ECGSketch from "./Generator/ECGSketch";
import { themes } from "./Generator/ECGSketchThemes";
import { EcgQuestion, EcgQuestionSections, EcgTopic } from "./Generator/ECGTypes";


// lets say last question in list is **always** unaanswered
const ECGSession = (props: { topics: EcgTopic[], finishEcgSession: () => void}) => {
    const { darkMode } = useContext(MetaContext);
    const [darkTheme, updateDarkTheme] = useState(darkMode);
    const [questions, updateQuestions] = useState([] as EcgQuestion[]);
    const [questionIdx, updateQuestionIdx] = useState(0);

    useEffect( () => {
        updateDarkTheme(darkMode);
    }, [darkMode])

    useEffect( () => {
        updateQuestions([generateECG(props.topics)]);
    }, []);


    const handleOptionChange = (label: string, selected: string) => {
        const currentWorkingQuestion = questions[questions.length - 1];
        const modifiedQuestion: EcgQuestion = {
            ...currentWorkingQuestion,
            sections: currentWorkingQuestion.sections.map(s => s.label === label ? { ...s, selected } : s) as EcgQuestionSections
        }
        updateQuestions(questions.map((q, i) => i === questions.length - 1 ? modifiedQuestion : q))
    }

    const submitAnswers = () => {
        updateQuestions(questions.map((q, i) => i === questions.length - 1 ? {...q, answered: true} : q).concat([generateECG(props.topics)]))
    }

    const refreshQuestion = () => {
        const newQuestion = generateECG(props.topics);
        updateQuestions(questions.map((q, i) => i === questions.length - 1 ? newQuestion : q))
    }

    if (questions.length === 0) return <></>

    // can only submit if last question and all fields answered
    const submitPermitted = 
        questionIdx === questions.length - 1 &&
        questions[questions.length - 1].sections.reduce((flag, section) => flag && section.selected !== "", true);

    return (
        <div style = {{ textAlign: "center" }}>
            
            <Title darkMode = { darkMode }><span style = {{ color: (darkMode ? "#FAD000" : "#7babff") }}> ECG </span> Trainer</Title>

            <Subtitle darkMode = { darkMode }>{questions[questionIdx].answered ? "Review Mode" : "Interpret it!"}</Subtitle>

            <Panel id = "ecgsketch" darkMode = { darkMode }>

                <br></br>

                <ECGSketch  theme = { themes[darkTheme ? 0 : 1] } question = { questions[questionIdx] } reviewMode = { questions[questionIdx].answered } />
            
                <div className = "row" style = {{ maxWidth: "1000px", margin: "auto"}}>
                    
                    <div className="col-md-4">
                        <ECGQuestionProgress 
                            questionIdx = { questionIdx } 
                            updateQuestionIdx = { updateQuestionIdx } 
                            questions = { questions }
                        />
                    </div>

                    <div className="col-md-4">
                        <BakeButton darkMode = { darkMode } onClick = { questionIdx === questions.length - 1 ? refreshQuestion : () => {} } active = { questionIdx === questions.length - 1 }>
                            Bake new ECG
                        </BakeButton>
                    </div>

                    <div className="col-md-4">

                        <ReveiwButton darkMode = { darkMode } onClick = { () => updateDarkTheme(!darkTheme) }>
                            Toggle Theme
                        </ReveiwButton>
                        
                        <Link to = { questions.length > 1 ? "/User/ECG" : "/User/ECG/Session" }>
                            <ReveiwButton darkMode = { darkMode } onClick = { props.finishEcgSession }>
                                Finish
                            </ReveiwButton>
                        </Link>
                        
                    </div>

                </div>

            </Panel>

            <br/><br/>

            <SectionContainer darkMode = { darkMode } >
            { 
                questions[questionIdx].sections.map( section => {
                    return questions[questionIdx].answered 
                        ? <ECGAnsweredOptions section = { section } handleOptionChange = { handleOptionChange } />
                        : <ECGOptions section = { section } handleOptionChange = { handleOptionChange } />
                })
            }
            </SectionContainer>

            <SubmitButton 
                submitPermitted = { submitPermitted } 
                reviewMode = { questions[questionIdx].answered }
                onClick = { submitPermitted ? submitAnswers : () => {} }
            >
                Submit
            </SubmitButton>

        </div>
    );
}

export default ECGSession;

const SectionContainer = styled.div<{ darkMode: boolean }>`
    background-color: ${ props => props.darkMode ? "#191964" : "#FBE9EE"};
    overflow: scroll;
    white-space: nowrap;
    border-radius: 5px;
    border: 10px solid ${ props => props.darkMode ? "#191964" : "#FBE9EE"};
`

const BakeButton = styled.button<{ darkMode: boolean, active: boolean }>`
    display: inline-block;
    border-style: none;
    border-radius: 10px;
    margin: 0 10px 10px 10px;
    width: 200px;
    height: 38px;
    background-color: ${ props => props.darkMode ? "rgba(64, 75, 224, 0.459)" : "#FFC9C9" };
    opacity: ${ props => props.active ? 1 : 0.3 };
    color: ${ props => props.darkMode ? "white" : "black" };
`

const ReveiwButton  = styled.button<{ darkMode: boolean }>`
    display: block;
    border-radius: 10px;
    border: none;
    font-size: 10px;
    margin: 0px auto 2px auto;
    width: 100px;
    padding: 2px 10px;
    background-color: ${ props => props.darkMode ? "rgba(64, 75, 224, 0.459)" : "#FFC9C9" };
    color: ${ props => props.darkMode ? "white" : "black" };
`

const SubmitButton  = styled.button<{ submitPermitted: boolean, reviewMode: boolean }>`
    width: 200px;
    margin: 40px auto 0 auto;
    font: bold 20px sans-serif;
    border-radius: 20px;
    border-style: none;
    background-color: ${ props => props.submitPermitted ? "#FAD000" : "grey" };
    display: ${ props => props.reviewMode ? "none" : "inline-block" };
`