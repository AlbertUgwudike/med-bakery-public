import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ECGSketch from "../ECGPage/Generator/ECGSketch";
import { themes } from "../ECGPage/Generator/ECGSketchThemes";
import styled from 'styled-components';
import { generateECG } from "../ECGPage/Generator/ECGGenerator";
import { constants, EcgQuestion, EcgTopic } from "../ECGPage/Generator/ECGTypes";
import { Panel } from "../General/Panel";

// to be fetched from the user
const topics: EcgTopic[] = [
    {
        "name": "ACS",
        "selected": false,
        "attempts": 0,
        "correct": 0
    },
    {
        "name": "Rate",
        "selected": false,
        "attempts": 0,
        "correct": 0
    },
    {
        "name": "Arrhythmias",
        "selected": false,
        "attempts": 0,
        "correct": 0
    }
]

const ECGHomePageDemo = () => {
    const [question, updateQuestion] = useState(null as EcgQuestion | null);

    useEffect(() => { updateQuestion(generateECG(topics)) }, []);
    
    const refreshQuestion = () => updateQuestion(generateECG(topics));

    return (
        <Panel className = "row" darkMode = { true }>

            <div className = "col-md-4">
                <EcgTitle>ECG Trainer</EcgTitle>
                <p>Pathological ECGs generated on request. Practice an unlimited number of questions</p>
                <p>Have a go with this one! <FaArrowRight size = "30"/></p>          
            </div>

            <div className = "col-md-8" style = {{ textAlign: "center" }}>  
                
                <RefreshButton onClick = { refreshQuestion }> Tap me to generate new ECG 👀 </RefreshButton>

                <div style = {{ overflow: "scroll", width: "100%" }} >
                    { question ? <ECGSketch reviewMode = { false } question = { question } theme = { themes[0] } /> : <></> }
                </div>

                <div>
                    <div style = {{ display: "inline", width: "max-content", margin: "10px 0", font: "20px Champion" }}>DDX?</div>
                    <Select>{ constants.diagnosisOptions.map(title => <option>{title}</option>) }</Select>
                    <TrapButton onClick = { () => document.getElementById("loginboi")!.click() }> See if you got it right ... </TrapButton>
                </div>

            </div>

        </Panel>
    )
}

export default ECGHomePageDemo

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

const RefreshButton = styled.button`
    margin-bottom: 20px; 
    width: 275px;
    font: 15px sans-serif;
    border: none;
    border-radius: 10px;
    background: #FAD000;
    -webkit-animation: pulse 3s infinite;
`

const TrapButton = styled.button`
    display: inline-block;
    background-color: #FAD000;
    border-radius: 10px;
    border-style: none;
    width: 275px;
    margin: 10px 5px;
`

const Select = styled.select`
    display: inline-block;
    max-width: 200px;
    margin: 10px 5px;
    height: 20px;
`