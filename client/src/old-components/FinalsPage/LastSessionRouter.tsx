import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import MetaContext from "../../MetaContext";
import { FinalsQuestion } from "../../types";
import QuestionPage from "../QuestionPage/QuestionPage";
import PreviousSessionsPage from "./PreviousSessionsPage";

type LastSessionRouterProps = {
    reviewMode: boolean; // allows for unrestricted question navigation
}

const LastSessionRouter = (props: LastSessionRouterProps) => {

    const { SERVER_URL, token } = useContext(MetaContext);
    const [previousSessions, updatePreviousSessions] = useState([] as FinalsQuestion[][]);
    const [selectedSession, updateSelectedSession] = useState([] as FinalsQuestion[]);

    useEffect(() => {
        axios.post(SERVER_URL + "/users/previoussessions", { token })
            .then(res => {
                updatePreviousSessions(res.data);
            })
            .catch(err => console.log("woopsie! " + err)); 
    }, []);

    return (
        <Switch> 

            <Route exact path = "/User/Finals/LastSession">
                <PreviousSessionsPage
                    previousSessions = { previousSessions }
                    updateSelectedSession = { updateSelectedSession }
                />
            </Route>

            <Route path = "/User/Finals/LastSession/Session">
                <QuestionPage 
                    availableQuestions = { selectedSession }
                    updateAvailableQuestions = { updateSelectedSession }
                    finishSession = { () => {} }
                    reviewMode = { true }
                />
            </Route>

        </Switch>
    )
}

export default LastSessionRouter