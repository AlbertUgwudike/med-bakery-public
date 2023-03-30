import { useContext, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import styled from "styled-components";
import MetaContext from "../../../MetaContext";
import startToneUrl from "../media/start.mp3";

type RecordControlProps = {
    recording: boolean;
    stopEverything: () => void;
    startRecording: () => void;
    questionIdx: number;
};

const RecordControl = (props: RecordControlProps) => {
    const { narrowWindow } = useContext(MetaContext);

    const record = () => {
        props.stopEverything();
        const startTone = new Audio(startToneUrl);
        startTone.onended = props.startRecording;
        startTone.play();
    };
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Control
                onClick={props.recording ? props.stopEverything : record}
                narrowWindow={narrowWindow}
                recording={props.recording}
            >
                <div style={{paddingBottom:"10%"}}> 
                <span> 
                <FaMicrophone /> &nbsp;
                {props.recording && "Done"}
                {!props.recording && "Tap to answer"}
                </span>
                </div>

            </Control>
        </div>
    );
};

export default RecordControl;

const Control = styled.button<{ narrowWindow: boolean; recording: boolean }>`
padding: 10px 20px;
background-color: #fad000;
border: none;
border-radius: 5px;
    color: black;
    font-weight: bold;

    height: 35px;
    align-content: center;
    margin: auto;
    width: 45%;
    border: 1px solid ${props => (props.recording ? "red" : "#414142")};
    color: ${props => (props.recording ? "red" : "black")};
    font-size: ${props => (props.narrowWindow ? "12px" : "15px")};
`;
