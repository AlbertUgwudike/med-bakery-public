import { EcgTopic } from "./Generator/ECGTypes";
import { Switch, Route, Redirect } from "react-router-dom";
import ECGSummary from "./ECGSummary";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ECGSession from "./ECGSession";
import MetaContext from "../../MetaContext";

type ECGPageProps = {}

const ECGPage = (props: ECGPageProps) => {
    const { token, SERVER_URL } = useContext(MetaContext);
    const [topics, updateTopics] = useState([] as EcgTopic[])

    useEffect(() => {
        axios.post(SERVER_URL + "/ecgs/topics", { token })
             .then(res => {
                 updateTopics(res.data)
             });
    }, [])

    const finishEcgSession = () => {

        console.log("topics to be sent", topics);
        window.analytics.track({
            userId: "",
            event: "ECG session finished"
        })
        axios.post(SERVER_URL + "/ecgs/finishsession", { token, topics })
             .then(res => {
                 console.log("scores updated")
             });
    }

    return (
        <Switch>

            <Route exact path = "/User/ECG"> 
                <ECGSummary 
                    topics = { topics }
                    updateTopics = { updateTopics }
                />
            </Route>

            <Route path = "/User/ECG/Session">
                { 
                    topics.length > 0 
                        ?   <ECGSession 
                                topics = { topics.filter(topic => topic.selected) }
                                finishEcgSession = { finishEcgSession }
                            />
                        :   <Redirect to = "/User/ECG" />
                }
            </Route>

        </Switch>
    );
}

export default ECGPage;