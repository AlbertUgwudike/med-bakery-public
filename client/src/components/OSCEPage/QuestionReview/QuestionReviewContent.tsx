import { useContext, useState, useEffect, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import MetaContext from "../../../MetaContext";
import { Box } from "../Common";
import QuestionPrompt from "../QuestionPrompt";
import { Question, promptId, responseId, Station } from "../types";
import MarkScheme from "./MarkScheme";
import WaveSurferReview from "./WaveSurferReview";

type QuestionReviewContentProps = {
    question: Question;
    questionIdx: number;
    updateStation: Dispatch<SetStateAction<Station>>;
    reviewMode: boolean;
    active: boolean;
};

const QuestionReviewContent = (props: QuestionReviewContentProps) => {
    const { narrowWindow } = useContext(MetaContext);
    const [waveSurfer, updateWaveSurfer] = useState<WaveSurfer | undefined>();
    const [showMarkScheme, updateShowMarkScheme] = useState(true);

    const getPromptAudio = () =>
        document.getElementById(promptId + props.questionIdx) as HTMLAudioElement | null;

    const stopEverything = () => {
        getPromptAudio()?.pause();
        waveSurfer?.stop();
    };

    const play = (id: string) => {
        stopEverything();
        if (id === promptId) getPromptAudio()?.play();
        else waveSurfer?.play();
    };

    useEffect(() => {
        getPromptAudio()!.currentTime = 0;
        props.active ? getPromptAudio()?.play() : stopEverything();
    }, [props.active]);

    return (
        <>
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
                    {showMarkScheme ? (
                        <Img src={props.question.img} narrowWindow={narrowWindow}></Img>
                    ) : (
                        <MarkScheme
                            markScheme={props.question.markScheme}
                            questionIdx={props.questionIdx}
                            updateStation={props.updateStation}
                            reviewMode={props.reviewMode}
                        />
                    )}
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
                <SchemeToggle
                    narrowWindow={narrowWindow}
                    onClick={() => updateShowMarkScheme(!showMarkScheme)}
                >
                    {showMarkScheme ? "Mark Scheme" : "Show Station"}
                </SchemeToggle>
                <WaveSurferReview
                    stopEverything={stopEverything}
                    play={() => play(responseId)}
                    exemplarAudio={props.question.exemplarAudio}
                    responseAudio={props.question.responseAudio}
                    updateWaveSurfer={updateWaveSurfer}
                    questionIdx={props.questionIdx}
                />
            </div>
        </>
    );
};

export default QuestionReviewContent;

const Img = styled.img<{ narrowWindow: boolean }>`
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    transition: width 0.2s;
`;

const SchemeToggle = styled.button<{ narrowWindow: boolean }>`
    background-color: #031B34;
    border-radius: 5px;
    height: 30px;
    align-content: center;
    width: 100%;
    margin-top: 10px;
    border: 1px solid #414142;
    color: #fad000;
    font-size: ${props => (props.narrowWindow ? "12px" : "15px")};
`;
