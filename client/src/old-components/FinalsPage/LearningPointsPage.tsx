import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Title } from "../General/Title";
import { Subtitle } from "../General/Subtitle";
import MetaContext from "../../MetaContext";

type LearningPointsPageProps = { }

type LearningPoint = {
    learningPointIdx: number;
    learningPoint: string;
    timeLastUpdated: number;
    categories: string[];
    correctAttempts: number;
    totalAttempts: number;
}

type LearningPointCategory = {
    title: string;
    learningPoints: LearningPoint[];
    selected: boolean;
}

const LearningPointsPage = (props: LearningPointsPageProps) => {

    const { darkMode, SERVER_URL, token } = useContext(MetaContext);
    const [learningPointCategories, updateLearningPointCategories] = useState([] as LearningPointCategory[])

    useEffect( () => {
        axios.post(SERVER_URL + "/questions/learningpoints", { token })
            .then(res => {
                updateLearningPointCategories(res.data)
            });
    }, [] )

    const renderLearningPoint = (learningPoint: LearningPoint) => {
        return (
            <li>
                <InfoDiv darkMode = { darkMode }>
                    { learningPoint.learningPoint }
                    <div>
                        <ScoreDiv darkMode = { darkMode }>Attempted: { learningPoint.totalAttempts }</ScoreDiv>
                        <ScoreDiv darkMode = { darkMode }>Correct: { learningPoint.correctAttempts }</ScoreDiv>
                    </div>
                </InfoDiv>
            </li>
        )
    }

    const renderLearingPointCategory = (category: LearningPointCategory, idx: number) => {

        const toggleLearningPoints = () => {
            updateLearningPointCategories(learningPointCategories.map((c, i) => i === idx ? { ...c, selected: !c.selected } : c));
        }

        return (
            <li>
                <OptionButton darkMode = { darkMode } onClick = { toggleLearningPoints } >

                    <div style = {{ display: "flex", justifyContent: "space-between" }}>
                        <div style = {{ textAlign: 'left' }}>{ category.title }</div>
                        <div> { category.selected ? <FaArrowUp /> : <FaArrowDown /> } </div>
                    </div>
                    
                    <Explanation darkMode = { darkMode } expanded = { category.selected }>
                        <ul style = {{ padding: 0, listStyleType: "none" }}>
                            { category.learningPoints.map(renderLearningPoint) }
                        </ul>
                    </Explanation>

                </OptionButton>
            </li>
        )
    }

    return (
        <>

            <Title darkMode = { darkMode }>
                <span style = {{ color: (darkMode ? "#FAD000" : "#7babff") }}> Finals </span> Questions
            </Title>
            
            <Subtitle darkMode = { darkMode }> Learning Points </Subtitle>

            <ul style = {{ padding: 0, margin: 0, listStyleType: "none" }}>
                { learningPointCategories.map(renderLearingPointCategory) }
            </ul>

        </>
    )
}

export default LearningPointsPage;

const OptionButton = styled.button<{ darkMode: boolean }>`
    display: block;
    max-width: 800px;
    border-radius: 10px;
    font-size: 15px;
    margin: 20px auto;
    border: none;
    padding: 8px 20px;
    font-family: Proxima;
    color: ${ props => props.darkMode ? "white" : "black" };
    background-color: ${ props => props.darkMode ? "#9546f05e" : "#b1def599"  };
    &:hover {
        background-color: ${ props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE" }; 
    }
`

const Explanation = styled.div<{ darkMode: boolean, expanded: boolean }>`
    background-color: ${ props => props.darkMode ? "#0D163C" : "#E6E5E0" };
    border-radius: 10px;
    margin-top: ${ props => props.expanded ? "10px" : "0" };
    padding: ${ props => props.expanded ? "10px" : 0 };
    font-size: 15px;
    max-height: ${ props => props.expanded ? "300px" : "0" };
    overflow: ${ props => props.expanded ? "scroll" : "hidden" };
    text-align: left;
`

const InfoDiv = styled.div<{ darkMode: boolean }>`
    background-color: ${ props => props.darkMode ? "rgb(27, 39, 94)" : "#F6F5F0" };
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
` 

const ScoreDiv = styled.div<{ darkMode: boolean }>`
    background-color: ${ props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE" }; 
    border-radius: 5px;
    font-size: 10px;
    display: inline-block;
    margin: 5px;
    padding: 5px;
` 