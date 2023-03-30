import { Link } from "react-router-dom";
import styled from 'styled-components';
import { EcgTopic } from "./Generator/ECGTypes";
import { Title } from "../General/Title";
import { Subtitle } from "../General/Subtitle";
import { useContext } from "react";
import MetaContext from "../../MetaContext";

type ECGSummaryProps = {
    topics: EcgTopic[];
    updateTopics: React.Dispatch<React.SetStateAction<EcgTopic[]>>;
}

const ECGSummary = (props: ECGSummaryProps) => {

    const { darkMode } = useContext(MetaContext);

    const selectEcgOption = (name: string) => {
        console.log(props.topics);
        props.updateTopics(props.topics.map(topic => topic.name === name ? { ...topic, selected: !topic.selected } : topic))
    }

    return (
        <>
            
            <Title darkMode = { darkMode }><span style = {{ color: (darkMode ? "#FAD000" : "#7babff") }}> ECG </span> Trainer</Title>

            <Subtitle darkMode = { darkMode }> Select your sauce! </Subtitle>

            {
                props.topics.map(topic => {

                    const percentage = Math.round(100 * topic.correct / topic.attempts);

                    return (
                        <OptionButton 
                            selected = { topic.selected }
                            onClick = { () => selectEcgOption(topic.name) }
                            darkMode = { darkMode }
                        > 
                            <CategoryTitle>{ topic.name }</CategoryTitle>

                            <div style = {{ display: "inline-block", marginLeft: "10px", width: "max-content" }}>
                                <ScoreDiv darkMode = { darkMode }>Attempted: { topic.attempts }</ScoreDiv>
                                <ScoreDiv darkMode = { darkMode }>Correct: { topic.correct }</ScoreDiv>
                            </div>

                            <OuterPill>
                                <InnerPill percentage = { percentage } />
                            </OuterPill>

                        </OptionButton>
                    )
                })
            }

            <div style = {{ textAlign: "center" }}>
                {
                    props.topics.filter(topic => topic.selected).length > 0 
                        ?   <Link to = "/User/ECG/Session"> 
                                <StartButton darkMode = { darkMode } active = { true } style = {{ marginTop: "50px" }} >
                                    <span>Start</span>
                                </StartButton>
                            </Link>
                        :   <StartButton darkMode = { darkMode } active = { false } style = {{ marginTop: "50px" }} >
                                <span>Start</span>
                            </StartButton>
                }
            </div>

        </>
    );
}

export default ECGSummary;


const OptionButton = styled.button<{ darkMode: boolean, selected: boolean }>`
    background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : ( props.darkMode ? "#9546f05e" : "#b1def599" ) };
    color: ${ props => props.darkMode ? "white" : "black" };
    margin: 15px 10px 15px 10px;
    border-style: none;
    border-radius: 10px;
    width: 100%;
    padding:0.5%;
    text-align: left;
    &:hover {
        background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : (props.darkMode ? "#7735FD" : "#FBE9EE") };
    }
`

const StartButton = styled.button<{ darkMode: boolean, active: boolean }>`
    background-color: ${ props => props.active ? "#FAD000" : "grey" };
    padding: 10px;
    color: black;
    font: 30px Proxima;
    border-radius: 10px;
    width: 200px;
    border: none;
`

const CategoryTitle = styled.div`
    margin: 1px 0px 2px 10px;
    font-size: 22px;
`

const ScoreDiv = styled.div<{ darkMode: boolean }>`
    font-size: 10px;
    margin: 5px;
` 

const OuterPill = styled.div`
    display: inline-block;
    width: 75%;
    height: 20px;
    background-color: white;
    border-radius: 5px;
    margin: 0 0 5px 10px;
`

const InnerPill = styled.div<{ percentage: number }>`
    width: ${ props => props.percentage }%;
    height: 20px;
    background-color: orange;
    border-radius: 5px;
`