import { useContext, useEffect, useState } from 'react';
import { FinalsQuestion, Section } from '../../types';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { Panel } from '../General/Panel';
import MetaContext from '../../MetaContext';

type QuestionProps = {
    availableQuestions: FinalsQuestion[];
    updateAvailableQuestions: React.Dispatch<React.SetStateAction<FinalsQuestion[]>>;
    questionIdx: number;
    updateQuestionIdx: React.Dispatch<React.SetStateAction<number>>;
    currentQuestion: FinalsQuestion;
    sectionIdx: number;
    updateSectionIdx: React.Dispatch<React.SetStateAction<number>>;
}

const Question = (props: QuestionProps) => {

    const { darkMode } = useContext(MetaContext);

    // keep track fo expanded explanations
    const [expanded, updateExpanded] = useState(resetExandedArray(props.currentQuestion.sections[props.sectionIdx]))

    // start at section 0 if question changes, important to avoid index overflow bugs
    useEffect(() => { 
        props.updateSectionIdx(0) 
    }, [props.currentQuestion]);

    // update expanations to be displayed by default
    useEffect(() => { 
        updateExpanded(resetExandedArray(props.currentQuestion.sections[props.sectionIdx]))
    }, [props.sectionIdx, props.currentQuestion]);

    // updates questions with user selected answer, checks and set if all sections have been answered
    const selectAnswerOption = (sectionIdx: number, optionIdx: number) => {
        props.updateAvailableQuestions(props.availableQuestions.map((aq, idx) => {
            if (idx === props.questionIdx){
                aq.sections[sectionIdx].selectedOption = optionIdx;
                aq.answered = aq.sections.reduce((flag, sec) => flag && sec.selectedOption !== -1, true as boolean);
            }
            return aq;
        }));

        // display the appropriate explanations
        updateExpanded(expanded.map((el, idx) => idx === optionIdx ? true : el))
    }

    const formatOption = (sectionIdx: number, optionIdx: number) => {
        return (
            <li>
                <OptionButton
                    darkMode = { darkMode }
                    onClick = { () => selectAnswerOption(sectionIdx, optionIdx) }
                >
                    { props.currentQuestion.sections[sectionIdx].options[optionIdx] }
                </OptionButton>
            </li>
        );
    }

    const formatSection = (sectionIdx: number) => {
        const sectionContent = props.currentQuestion.sections[sectionIdx];
        return (
            <div style = {{ margin: "50px auto", textAlign: "left" }}>

                <Panel darkMode = { darkMode }>

                    <div style = {{ font: "30px Champion" }}>Question</div>

                    <br></br>

                    <p>{ ReactHtmlParser(sectionContent.stem)  }</p>

                    <p>{ sectionContent.question }</p>

                </Panel>

                <br/><br/>

                <ul style = {{ padding: 0, listStyleType: "none" }} >
                    { sectionContent.options.map( (_, optionIdx) => formatOption(sectionIdx, optionIdx)) }
                </ul>

            </div>
        );
    } 

    const renderAnsweredOptions = (sectionContent: Section) => {
        return sectionContent.options.map((_, optionIdx) => {
            let backgroundColor;
        
            if (optionIdx === sectionContent.correctOption) 
                backgroundColor = darkMode ? "#1C725C" : "#41BFA0";
            else if (optionIdx === sectionContent.selectedOption)
                backgroundColor = darkMode ? "#A94D53" : "#C6777D";

            const toggleExplanation = () => updateExpanded({ ...expanded, [optionIdx]: !expanded[optionIdx] })
                
            return(
                <li>
                    <OptionButton darkMode = { darkMode } style = {{ backgroundColor }} onClick = { toggleExplanation } >

                        <div style = {{ display: "flex", justifyContent: "space-between" }}>
                            <div style = {{ textAlign: 'left' }}>{ sectionContent.options[optionIdx] }</div>
                            <div> { expanded[optionIdx] ? <FaArrowUp /> : <FaArrowDown /> } </div>
                        </div>
                        
                        <Explanation darkMode = { darkMode } expanded = { expanded[optionIdx] }>
                            { ReactHtmlParser(sectionContent.explanations[optionIdx]) }
                        </Explanation>

                    </OptionButton>
                </li>
            )
        })
        
    }

    const formatAnsweredSection = (sectionContent: Section) => {
        return (
            <div style = {{ margin: "50px auto", textAlign: "left" }}>

                <Panel darkMode = { darkMode }>

                    <div style = {{ font: "30px Champion" }}>Question</div>

                    <br></br>

                    <p>{ ReactHtmlParser(sectionContent.stem) }</p>

                    <p>{ ReactHtmlParser(sectionContent.question) }</p>

                </Panel>

                <Button darkMode = { darkMode } onClick = { () => updateExpanded(expanded.map(_ => !expanded.every(v => v))) }>
                    Toggle All Explanations
                </Button>

                <ul style = {{ padding: 0, listStyleType: "none" }} >
                    { renderAnsweredOptions(sectionContent) }
                </ul>

            </div>
        );
    }

    return (
        <div>

            <div >
                { 
                    props.currentQuestion.sections.length && props.currentQuestion.sections[props.sectionIdx].selectedOption === -1 
                        ? formatSection(props.sectionIdx) 
                        : formatAnsweredSection(props.currentQuestion.sections[props.sectionIdx])
                } 
            </div>
            
        </div>
    )
    
}

export default Question


const OptionButton = styled.button<{ darkMode: boolean }>`
    width: 100%;
    border-radius: 10px;
    font-size: 15px;
    margin: 8px auto;
    text-align: center;
    border: none;
    box-shadow: ${ props => props.darkMode ? "0px 0px 5px black" : "0px 0px 5px gray" };
    padding: 8px 20px;
    font-family: Proxima;
    color: ${ props => props.darkMode ? "white" : "black" };
    background-color: ${ props => props.darkMode ? "#505050" : "#F6F5F0" };
    &:hover {
        background-color: ${ props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE" }; 
    }
`

const Explanation = styled.div<{ darkMode: boolean, expanded: boolean }>`
    background-color: ${ props => props.darkMode ? "#1f1f1f" : "#F6F5F0" };
    border-radius: 10px;
    margin-top: ${ props => props.expanded ? "10px" : "0" };
    padding: ${ props => props.expanded ? "20px" : 0 };
    font-size: 15px;
    max-height: ${ props => props.expanded ? "1000px" : "0" };
    overflow: hidden;
    text-align: left;
`

const Button = styled.button<{ darkMode: boolean, selected?: boolean }>`
    display: block;
    border-radius: 20px;
    border: none;
    font-size: 10px;
    width: 120px;
    height: 15px;
    margin: 30px 0 0 0;
    text-align: center;
    background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : ( props.darkMode ? "#1B275E" : "#F6F5F0" ) };
    color: ${ props => props.darkMode ? "white" : "black" };
    &:hover {
        background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : (props.darkMode ? "#7735FD" : "#FBE9EE") };
    }
`

const resetExandedArray = (section: Section): boolean[] => {
    return Array(section.options.length)
        .fill(false)
        .map((_, idx) => {
            return idx === section.correctOption || idx === section.selectedOption // rely on previous button click?
        })
}