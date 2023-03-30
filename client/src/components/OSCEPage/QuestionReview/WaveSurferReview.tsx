import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import styled from "styled-components";
import MetaContext from "../../../MetaContext";
import { Box } from "../Common";
import { generateWaveSurfer } from "../hooks";

type WaveSurferReviewProps = {
    play: () => void;
    stopEverything: () => void;
    responseAudio: string;
    exemplarAudio: string;
    updateWaveSurfer: Dispatch<SetStateAction<WaveSurfer | undefined>>;
    questionIdx: number;
};

const WaveSurferReview = (props: WaveSurferReviewProps) => {
    const [selection, updateSelection] = useState<"response" | "exemplar" | "">("");
    const { narrowWindow } = useContext(MetaContext);
    const [playing, updatePlaying] = useState(false);

    const handleClick = (sel: "response" | "exemplar"): void => {
        // if already selected then just toggle
        if (sel === selection) return playing ? props.stopEverything() : props.play();

        // need to stopEverything while ws exists
        props.stopEverything();

        const container = document.getElementById("waveform" + props.questionIdx);
        if (container) container.innerHTML = "";

        const audio = sel === "response" ? props.responseAudio : props.exemplarAudio;
        const waveSurfer = generateWaveSurfer("waveform" + props.questionIdx, audio);

        // potential issue if ws already loaded, dunno if this still fires in that case
        if (selection) waveSurfer.on("ready", _ => waveSurfer.play()); // if (sel) ==> do not play on first load
        waveSurfer.on("play", _ => updatePlaying(true));
        waveSurfer.on("finish", _ => updatePlaying(false));
        waveSurfer.on("pause", _ => updatePlaying(false));

        props.updateWaveSurfer(waveSurfer);

        updateSelection(sel);
    };

    // load in the user's repsonse audio at first
    useEffect(() => {
        handleClick("response");
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
            }}
        >
            <AudioSelect
                onClick={() => handleClick("response")}
                narrowWindow={narrowWindow}
                selected={selection === "response"}
            >
                {selection === "response" && playing ? <FaPause /> : <FaPlay />}
                &nbsp; You
            </AudioSelect>

            <AudioSelect
                onClick={() => handleClick("exemplar")}
                narrowWindow={narrowWindow}
                selected={selection === "exemplar"}
            >
                {selection === "exemplar" && playing ? <FaPause /> : <FaPlay />}
                &nbsp; Exemplar
            </AudioSelect>

            <Box style={{ margin: "0", width: "87%", borderRadius: "5px", height: "30px" }}>
                <div id={"waveform" + props.questionIdx}></div>
            </Box>
        </div>
    );
};

export default WaveSurferReview;

const AudioSelect = styled.button<{ selected: boolean; narrowWindow: boolean }>`
    background-color: ${props => (props.selected ? "#FAD000" : "#031B34")};
    border-radius: 5px;
    margin-right: 5px;
    height: 30px;
    align-content: center;
    width: 130px;
    border: 1px solid #414142;
    color: ${props => (props.selected ? "#FFFFF" : "#FFFF")};
    font-size: ${props => (props.narrowWindow ? "12px" : "15px")};
`;
