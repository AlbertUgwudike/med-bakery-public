import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import styled from "styled-components";
import { copy } from "../../../old-components/ECGPage/Functions/utility";
import { Box } from "../Common";
import QuestionPrompt from "../QuestionPrompt";
import RecordControl from "./RecordControl";
import WaveSurfer from "./WaveSurfer";
import { promptId, Question, Station } from "../types";
import MetaContext from "../../../MetaContext";
import startToneUrl from "../media/start.mp3";

type QuestionContentProps = {
    question: Question;
    updateStation: Dispatch<SetStateAction<Station>>;
    active: boolean;
    questionIdx: number;
    nextFunc: () => void;
};

const QuestionContent = (props: QuestionContentProps) => {
    const { narrowWindow } = useContext(MetaContext);

    const { startRecording, stopRecording, status } = useReactMediaRecorder({
        audio: true,
        onStop: (blobUrl, _) => {
            console.log("recording stopped");
            props.updateStation(s => {
                console.log(props.questionIdx);
                s.questions[props.questionIdx].responseAudio = blobUrl ? blobUrl : "";
                return copy(s); // because object is nested, react shallow compares
            });

            const endTone = new Audio(startToneUrl);
            endTone.onended = props.nextFunc;
            endTone.play();
        },
    });

    const [responseWaveSurfer, updateResponseWaveSurfer] = useState<WaveSurfer | undefined>(
        undefined
    );

    const getPromptAudio = () =>
        document.getElementById(promptId + props.questionIdx) as HTMLAudioElement | null;

    const stopEverything = () => {
        getPromptAudio()?.pause();
        responseWaveSurfer?.stop();
        if (status === "recording") stopRecording();
    };

    const play = (id: string) => {
        stopEverything();
        if (id === promptId) getPromptAudio()?.play();
        else responseWaveSurfer?.play();
    };

    useEffect(() => {
        getPromptAudio()!.currentTime = 0;
        props.active ? getPromptAudio()?.play() : stopEverything();
    }, [props.active]);

    return (
        <div>
            <div
                style={{
                    gridRowStart: 2,
                    gridColumnStart: 1,
                    height: "60vh",
                    transition: `transform ${500}ms`,
                }}
            >
                <QuestionPrompt
                    question={props.question}
                    toggle={() => {
                        !getPromptAudio()?.paused ? stopEverything() : play(promptId);
                    }}
                    promptId={promptId + props.questionIdx}
                />
                <Box
                    style={{
                        display: "flex",
                        alignItems: "center",
                        height: "49vh",
                    }}
                >
                    <Img src={props.question.img} narrowWindow={narrowWindow}></Img>
                    <br />
                </Box>
            </div>
            <div
                style={{
                    gridRowStart: 4,
                    gridColumnStart: 1,
                    zIndex: 700,
                    backgroundColor: "#",
                    height: "15vh",
                }}
            >
                <WaveSurfer
                    playResponse={() => play("waveform" + props.questionIdx)}
                    stopEverything={stopEverything}
                    responseAudio={props.question.responseAudio}
                    questionIdx={props.questionIdx}
                    updateResponseWaveSurfer={updateResponseWaveSurfer}
                />

                <RecordControl
                    recording={status === "recording"}
                    stopEverything={stopEverything}
                    startRecording={startRecording}
                    questionIdx={props.questionIdx}
                />
            </div>
        </div>
    );
};

export default QuestionContent;

const Img = styled.img<{ narrowWindow: boolean }>`
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    transition: width 0.2s;
`;
