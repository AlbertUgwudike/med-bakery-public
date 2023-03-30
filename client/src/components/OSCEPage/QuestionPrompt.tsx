import { FaVolumeUp } from "react-icons/fa";
import styled from "styled-components";
import { promptId, Question } from "./types";
import heart from "./media/heart.png";
import { useContext } from "react";
import MetaContext from "../../MetaContext";
import { useWindowSize } from "../../functions";

type QuestionPromptProps = {
    question: Question;
    toggle: () => void;
    promptId: string;
};

const QuestionPrompt = (props: QuestionPromptProps) => {
    const { narrowWindow } = useContext(MetaContext);

    return (
        <div
            onClick={props.toggle}
            style={{
                backgroundColor: "#031B34",
                padding: "5px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px auto",
                width: "100%",
                height: "10vh",
                cursor: "pointer",
            }}
        >
            <div style={{ margin: "5px" }}>
                <img src={heart} width={narrowWindow ? "35px" : "75px"} />
            </div>
            <div>
                <Prompt>
                    <FaVolumeUp />
                    <span style={{ fontSize: narrowWindow ? "16px" : "20px" }}>
                        &nbsp; &nbsp; {props.question.question}
                    </span>
                    <audio src={props.question.questionAudio} id={props.promptId} />
                </Prompt>
            </div>
        </div>
    );
};

export default QuestionPrompt;

const Prompt = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding: 5px;
    &:hover {
        cursor: pointer;
    }
`;
