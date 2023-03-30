import { Dispatch, MutableRefObject, SetStateAction, useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import styled from "styled-components";
import { generateWaveSurfer } from "../hooks";

type TaskSectionProps = {
    playResponse: () => void;
    stopEverything: () => void;
    responseAudio: string;
    questionIdx: number;
    updateResponseWaveSurfer: Dispatch<SetStateAction<WaveSurfer | undefined>>;
};

const TaskSection = (props: TaskSectionProps) => {
    const [responsePlaying, updateResponsePlaying] = useState(false);

    useEffect(() => {
        const container = document.getElementById("waveform" + props.questionIdx);
        if (container) container.innerHTML = "";

        const ws = generateWaveSurfer("waveform" + props.questionIdx, props.responseAudio);
        ws.on("play", () => updateResponsePlaying(true));
        ws.on("finish", () => updateResponsePlaying(false));
        ws.on("pause", () => updateResponsePlaying(false));

        props.updateResponseWaveSurfer(ws);
    }, [props.responseAudio]);

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            {!props.responseAudio ? (
                <>
                    <Panel
                        style={{ margin: "10px 0", width: "10%", backgroundColor: "#031B34" }}
                    ></Panel>
                    <Panel
                        style={{
                            margin: "10px 0",
                            width: "87%",
                            backgroundColor: "#031B34",
                        }}
                    >
                        <div id={"waveform" + props.questionIdx}></div>
                    </Panel>
                </>
            ) : (
                <>
                    <Panel
                        onClick={responsePlaying ? props.stopEverything : props.playResponse}
                        style={{ margin: "10px 0", width: "10%" }}
                    >
                        {responsePlaying ? <FaPause /> : <FaPlay />}
                    </Panel>
                    <Panel style={{ margin: "10px 0", width: "87%" }}>
                        <div id={"waveform" + props.questionIdx}></div>
                    </Panel>
                </>
            )}
        </div>
    );
};

export default TaskSection;

const Panel = styled.div`
    background-color: #303237;
    padding: 0 10px;
    border-radius: 10px;
`;
