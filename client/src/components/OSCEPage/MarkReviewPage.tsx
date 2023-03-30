import { Box, Container } from "./Common";
import { MarkSchemeSection, Question, Station } from "./types";
import styled from "styled-components";
import { Dispatch, SetStateAction, useContext, useState,  } from "react";
import { countPoints } from "./hooks";
import { FaCaretDown, FaCaretRight, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import MetaContext from "../../MetaContext";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import SaveModal from "./SaveModal";

type MarkReviewProps = {
    questionIdx: number;
    updateIdx: Dispatch<SetStateAction<number>>;
    station: Station;
    updateStation: Dispatch<SetStateAction<Station>>;
    reviewMode: boolean;
    handleExit: (questions: Question[], tok: string) => void;
};

const MarkReviewPage = (props: MarkReviewProps) => {
    const { token } = useContext(MetaContext);
    const [displayLoginOption, updateDisplayLoginOption] = useState(false);
    const masterMarkScheme = props.station.questions.map(q => q.markScheme).flat();
    const [selected, total] = countPoints(masterMarkScheme);
    const { narrowWindow } = useContext(MetaContext);

    const history = useHistory();
    const questionCount = props.station.questions.length;

    const nextFunc = () => {};

    const prevFunc = () => {
        props.updateIdx(questionCount - 1);
        history.push("/OSCE/Station/Review");
    };

    const passed = selected > total * 0.4;

    return (
        <Container>
            <Header
                updateStation={props.updateStation}
                station={props.station}
                handleExit={props.handleExit}
                title={"Summary"}
                percentage={100}
                timer={false}
                nextFunc={nextFunc}
                prevFunc={prevFunc}
            />

            <Box style={{ height: narrowWindow ? "500px" : "700px", overflow: "scroll" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ fontSize: "20px", margin: "10px" }}>
                        {passed ? "You: Passed!" : "You did not Pass."}
                    </div>

                    {passed ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}
                </div>

                <br />

                {masterMarkScheme.map(section => (
                    <DropDown section={section} />
                ))}

                <br />
                <br />

                <ResultsBox>
                    Total : {selected} / {total}
                </ResultsBox>

                <ExitButton
                    onClick={() =>
                        token
                            ? props.handleExit(props.station?.questions, token)
                            : updateDisplayLoginOption(true)
                    }
                >
                    Done
                </ExitButton>

            {displayLoginOption && (
                <SaveModal
                    handleExit={props.handleExit}
                    station={props.station}
                    close={() => updateDisplayLoginOption(false)}
                />
            )}

            </Box>
            
        </Container>
        
    );
};

export default MarkReviewPage;

const ResultsBox = styled.div`
    border: 2px solid #fad000;
    width: 190px;
    margin: auto;
    padding: 5px;
    text-align: center;
    border-radius: 5px;
`;

const DropDown = (props: { section: MarkSchemeSection }) => {
    const [expanded, updateExpanded] = useState(true);

    const renderSchemePoint = (schemePoint: {
        point: string;
        selected: boolean;
        pointId: number;
    }) => (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
            }}
        >
            <SchemePoint>{schemePoint.point}</SchemePoint>
            <div>
                {schemePoint.selected ? (
                    <FaCheckCircle color="green" />
                ) : (
                    <FaTimesCircle color="red" />
                )}
            </div>
        </div>
    );

    return (
        <div style={{ margin: "10px 0" }}>
            <Title onClick={() => updateExpanded(!expanded)}>
                {expanded ? <FaCaretDown /> : <FaCaretRight />}
                &nbsp; {props.section.title}
            </Title>

            <div
                style={{
                    display: expanded ? "block" : "none",
                    margin: expanded ? "20px 0" : "0",
                    padding: "0 10%",
                }}
            >
                {props.section.points.map(renderSchemePoint)}
            </div>
        </div>
    );
};

const Title = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #031B34;
    border-radius: 5px;
    border: 2px #81AFDD;
    height: 35px;
    align-content: center;
    margin: auto;
    width: 100%;
    color: white;
    border: 2px solid grey;
`;

const SchemePoint = styled.div`
    color: #FFFF;
    font-size: 13px;
    margin: 0 5px;
`;
export const ExitButton = styled.div`
    font-size: 23px;    
    display: inline-block;
    text-align: center;
    border: 2px solid grey;
    width: 80px;
    color: #;
    border-radius: px;
    height: max-content;
    border-radius: 5px;
    margin: 15px 5px;
`;
