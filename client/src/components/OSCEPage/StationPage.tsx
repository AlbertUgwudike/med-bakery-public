import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch, useLocation } from "react-router-dom";
import Brief from "./Brief";
import MarkReviewPage from "./MarkReviewPage";
import QuestionPage from "./Question/QuestionPage";
import QuestionReviewPage from "./QuestionReview/QuestionReviewPage";
import Summary from "./Summary";
import { AnsweredStationDetails, Question, Station } from "./types";

type StationPageProps = {
    station: Station;
    updateStation: Dispatch<SetStateAction<Station>>;
    answeredStations: AnsweredStationDetails[];
    reviewMode: boolean;
    handleExit: (questions: Question[], tok: string) => void;
};

const StationPage = (props: StationPageProps) => {
    const [questionIdx, updateQuestionIdx] = useState(0);

    if (props.station.id === "NullStation") return <Redirect to="/OSCE" />;

    return (
        <div
            style={{
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <Switch>
                <Route exact path="/OSCE/Station/Brief">
                    <Brief
                        updateStation={props.updateStation}
                        station={props.station}
                        handleExit={props.handleExit}
                        questionIdx={questionIdx}
                    />
                </Route>

                <Route exact path={"/OSCE/Station/Question"}>
                    <QuestionPage
                        station={props.station}
                        updateStation={props.updateStation}
                        questionIdx={questionIdx}
                        updateQuestionIdx={updateQuestionIdx}
                        handleExit={props.handleExit}
                    />
                </Route>

                <Route exact path="/OSCE/Station/Summary">
                    <Summary
                        updateStation={props.updateStation}
                        updateIdx={updateQuestionIdx}
                        station={props.station}
                        questionIdx={questionIdx}
                        handleExit={props.handleExit}
                    />
                </Route>

                <Route exact path={"/OSCE/Station/Review"}>
                    <QuestionReviewPage
                        station={props.station}
                        updateStation={props.updateStation}
                        questionIdx={questionIdx}
                        updateIdx={updateQuestionIdx}
                        reviewMode={props.reviewMode}
                        handleExit={props.handleExit}
                    />
                </Route>

                <Route exact path="/OSCE/Station/MarkReview">
                    <MarkReviewPage
                        station={props.station}
                        updateStation={props.updateStation}
                        reviewMode={props.reviewMode}
                        handleExit={props.handleExit}
                        updateIdx={updateQuestionIdx}
                        questionIdx={questionIdx}
                    />
                </Route>
            </Switch>
        </div>
    );
};

export default StationPage;
