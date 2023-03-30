import { FinalsQuestion } from "../../types";
import { FaMinus, FaCheck, FaTimes } from "react-icons/fa";
import styled from 'styled-components';
import { useContext } from "react";
import MetaContext from "../../MetaContext";

type QuestionSecctionSelectorProps = {
    currentQuestion: FinalsQuestion;
    sectionIdx: number;
    updateSectionIdx: React.Dispatch<React.SetStateAction<number>>;
    darkMode: boolean;
}

const QuestionSectionSelector = (props: QuestionSecctionSelectorProps) => {

    const { darkMode } = useContext(MetaContext);
    const buttonWidthPercentage = 70 / props.currentQuestion.sections.length;
    const buttonSeparation = 15 / (props.currentQuestion.sections.length);

    return (
        <Container darkMode = { darkMode }>

            { 
                Array(props.currentQuestion.sections.length).fill(0).map((_, idx) => {
                    const allPriorSectionsAnswered = props.currentQuestion.sections
                                                          .slice(0, idx)
                                                          .reduce((flag, section) => flag && section.selectedOption !== -1, true);
                    const buttonFunc = allPriorSectionsAnswered ? () => props.updateSectionIdx(idx) : () => {};
                    const buttonColor = idx === props.sectionIdx ? "#FAD000" : ( allPriorSectionsAnswered ? "white" : "grey" );
                    
                    let buttonContents = <FaMinus color = "grey" key="next"/>;
                    if (props.currentQuestion.sections[idx].selectedOption === props.currentQuestion.sections[idx].correctOption) 
                        buttonContents = <FaCheck color = "#1C725C"/>
                    else if (props.currentQuestion.sections[idx].selectedOption !== -1)
                        buttonContents = <FaTimes color = "#A94D53"/>

                    return (
                        <Button 
                            onClick = { buttonFunc } 
                            buttonWidthPercentage = { buttonWidthPercentage } 
                            buttonSeparation = { buttonSeparation } 
                            buttonColor = { buttonColor }
                            darkMode = { darkMode }
                        >
                            {buttonContents} 
                        </Button>
                    )
                })
            }
        </Container>
    )
}

export default QuestionSectionSelector;

const Container = styled.div<{ darkMode: boolean }>`
    border-radius: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${ props => props.darkMode ? "transparent" : "#f6f5f0" };
`

const Button = styled.button<{ darkMode: boolean, buttonWidthPercentage: number, buttonSeparation: number, buttonColor: string }>`
    width: ${ props => props.buttonWidthPercentage + "%" }; 
    margin: ${ props => "10px " + props.buttonSeparation + "% 10px " + props.buttonSeparation + "%" }; 
    background-color: ${ props => props.buttonColor };
    font-size: 12px;
    height: 25px;
    border-radius: 15px;
    padding: 0l;
    border: 1px solid #3F2091;
`
