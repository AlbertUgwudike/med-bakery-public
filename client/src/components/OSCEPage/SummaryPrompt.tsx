import { FaVolumeUp } from "react-icons/fa"
import styled from "styled-components"
import { promptId, Question } from "./types"
import heart from "./media/heart.png"
import summaryAudioUrl from "./media/SummaryAudio.mp3"
import { useState } from "react"

type SummaryPromptProps = {
}

const SummaryPrompt = (props: SummaryPromptProps) => {

    const toggle = () => {
        const audioElement = document.getElementById("summaryAudio") as HTMLAudioElement;
        if (!audioElement) return;
        audioElement.paused ? audioElement.play() : audioElement.pause();
    }

    return (
        <div>

            <div style = {{ display: "inline-block", margin: "20px 0" }}><img src = { heart } width = "100px"/></div>

            <Prompt onClick = { toggle }>

                <FaVolumeUp /> &nbsp; &nbsp; You have completed the station, time to review!

                <audio autoPlay = {true} src = { summaryAudioUrl } id = "summaryAudio"/>

            </Prompt>

        </div>
    )
}

export default SummaryPrompt

const Prompt = styled.div`
    display: inline-block;
    color: #FFFF;
    border: 2px solid grey;
    border-radius: 5px;
    margin: 0 5%; 
    padding: 5px;
    &:hover {
        cursor: pointer;
        border: 2px solid #FAD000;
    }
`