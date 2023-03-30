import { Dispatch, SetStateAction } from "react";
import { Link, useHistory } from "react-router-dom";
import { Box, Container, StartButton } from "./Common";
import { Question, Station } from "./types";
import htmlParser from "react-html-parser";
import TimerApparatus from "./AlphaTimer";
import Header from "./Header";

type BriefProps = {
    updateStation: Dispatch<SetStateAction<Station>>;
    station: Station;
    handleExit: (questions: Question[], tok: string) => void;
    questionIdx: number;
};

const Brief = (props: BriefProps) => {
    const history = useHistory();
    const nextFunc = () => history.push("/OSCE/Station/Question");
    const prevFunc = () => history.push("/OSCE/Station/Question");

    return (
        <Container>
            <Header
                updateStation={props.updateStation}
                station={props.station}
                handleExit={props.handleExit}
                title={"Brief"}
                percentage={5}
                timer={false}
                nextFunc={nextFunc}
                prevFunc={prevFunc}
            />

            <Box style={{ padding: "20px", textAlign: "left" }}>
                <div style={{ textAlign: "center" }}>
                    <TimerApparatus
                        nextFunc={() => history.push("/OSCE/Station/Question")}
                        startTime={props.station.brief.timePermitted}
                        updateStation={props.updateStation}
                        brief={true}
                    />
                </div>

                <br />

                {htmlParser(props.station.brief.prompt)}

                <br></br>

                <Link to="/OSCE/Station/Question">
                    <StartButton style={{ margin: "auto" }}>Start Station</StartButton>
                </Link>
            </Box>
        </Container>
    );
};

export default Brief;
