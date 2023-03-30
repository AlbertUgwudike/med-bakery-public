import { FinalsQuestion } from '../../types'; 
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, { useContext } from 'react';
import {Animated} from "react-animated-css";
import { Title } from '../General/Title';
import { Subtitle } from '../General/Subtitle';
import MetaContext from '../../MetaContext';

type PreviousSessionProps = {
    previousSessions: FinalsQuestion[][];
    updateSelectedSession: React.Dispatch<React.SetStateAction<FinalsQuestion[]>>;
}

const PreviousSessionsPage = (props: PreviousSessionProps) => {

    const { darkMode } = useContext(MetaContext);

    const createSessionArray = (q: FinalsQuestion, idx: number) => {

        const correctlyAnsweredSectionCount = q.sections.reduce((acc, s) => acc + (s.correctOption === s.selectedOption ? 1 : 0), 0);
        const percentageCorrect = Math.round(100 * correctlyAnsweredSectionCount / q.sections.length);

        return (
            <QuestionListItem darkMode = { darkMode } key = {idx}>
                
                <Percentage darkMode = { darkMode }> 
                    { percentageCorrect } % 
                </Percentage>

                <QuestionTitle darkMode = { darkMode }> {idx + 1}. { q.categoryPath[q.categoryPath.length - 1] } </QuestionTitle>

                <Dosset > 
                    { q.sections.map( (s, i) => <Pill darkMode = { darkMode } correct = { s.correctOption === s.selectedOption } /> ) }  
                </Dosset>
                    
            </QuestionListItem>
        );
    }

    return (
        <>

            <Title darkMode = { darkMode }>
                <span style = {{ color: (darkMode ? "#FAD000" : "#7babff") }}> Finals </span> Questions
            </Title>

            <Subtitle darkMode = { darkMode }>
                Previous Sessions
            </Subtitle>

            {
                props.previousSessions.length > 0
                ?   props.previousSessions.map(previousSession => 
                        <Link to = "/User/Finals/LastSession/Session">
                            <QuestionList darkMode = { darkMode } onClick = { () => props.updateSelectedSession(previousSession) }>
                                { previousSession.map(createSessionArray) }
                            </QuestionList>
                        </Link>
                    )

                : <Title darkMode = { darkMode } style = {{ color: 'grey' }}>Do Some Questions!</Title>
            }
        
        </>
    );
}

export default PreviousSessionsPage;

const QuestionList = styled.ul<{ darkMode: boolean }>`
    display: flex;
    align-items: center;
    overflow: scroll;
    background-color: ${ props => props.darkMode ? "#9546f05e" : "#b1def599" };
    border-radius: 20px;
    margin: 20px 0;
    padding: 10px;
`

const QuestionListItem = styled.div<{ darkMode: boolean }>`
    display: inline-block;
    width: 175px;
    min-width: 175px;
    background-color: ${ props => props.darkMode ? "#10132C" : "#F6F0F0" };
    box-shadow: ${ props => props.darkMode ? "2px 2px 2px #100A28" : "2px 2px 2px rgba(0, 0, 0, 0.25)" }; 
    text-align: center;
    border-radius: 20px;
    margin: 10px;
    padding: 10px 30px;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`
const QuestionTitle = styled.div<{ darkMode: boolean}>`
    text-align: center;
    margin-top: 10px;
    color: ${ props => props.darkMode ? "#ffffff" : "#100A28" };
    font: 15px Proxima;
`

const Percentage = styled.div<{ darkMode: boolean}>`
    text-align: center;
    margin-top: 20px;
    color: ${ props => props.darkMode ? "#ffffff" : "#100A28" };
    font: 35px Champion;
`

const Dosset = styled.div`
    white-space: wrap;
    margin: 10px auto 0 auto;
    text-align: center;
`

const Pill  = styled.div<{ correct: boolean, darkMode: boolean }>`
    display: inline-block;
    height: 16px;
    width: 16px;
    border-radius: 8px;
    margin: 0px 2px;
    background-color: ${ props => props.correct ? (props.darkMode ? "#1C725C" : "#41BFA0") : (props.darkMode ? "#A94D53" : "#C6777D") }
`