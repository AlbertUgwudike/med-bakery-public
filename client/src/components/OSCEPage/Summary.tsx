import { Dispatch, SetStateAction } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Box, Container } from "./Common";
import Header from "./Header";
import SummaryPrompt from "./SummaryPrompt";
import { Question, Station } from "./types";

type SummaryProps = {
    questionIdx: number;
    updateIdx: Dispatch<SetStateAction<number>>;
    updateStation: Dispatch<SetStateAction<Station>>;
    station: Station;
    handleExit: (questions: Question[], tok: string) => void;
};

const Summary = (props: SummaryProps) => {
    const history = useHistory();
    const questionCount = props.station.questions.length;

    const nextFunc = () => {
        props.updateIdx(0);
        history.push("/OSCE/Station/Review");
    };
    const prevFunc = () => {
        props.updateIdx(questionCount - 1);
        history.push("/OSCE/Station/Question");
    };

    return (
        <Container>
            <Header
                station={props.station}
                updateStation={props.updateStation}
                handleExit={props.handleExit}
                title={"Finish"}
                percentage={100}
                timer={true}
                nextFunc={nextFunc}
                prevFunc={prevFunc}
            />

            <Box style={{ textAlign: "center", paddingBottom: "25px" }}>
                <SummaryPrompt />

                <br />

                <Link to="/OSCE/Station/Review">
                    <Start onClick={nextFunc}>Start Review</Start>
                </Link>
            </Box>
        </Container>
    );
};

export default Summary;

const Start = styled.div`
    background-color: grey;
    width: 50%;
    border: 2px solid grey;
    border-radius: 5px;
    margin: 0 auto;
    padding: 1% 0;
    &:hover {
        cursor: pointer;
        border: 2px solid #fad000;
        color: #fad000;
    }
`;
