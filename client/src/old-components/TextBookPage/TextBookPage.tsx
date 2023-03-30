import {Switch, Route} from "react-router-dom"
import TopicPage from "./TopicPage";
import TopicSelector from "./TopicSelector";
import { useContext, useEffect, useState } from "react";
import { TextBookTopic } from "../../types";
import axios from "axios";
import MetaContext from "../../MetaContext";

const TextBookPage = (props: {}) => {

    const { SERVER_URL, token } = useContext(MetaContext);
    const [topics, updateTopics] = useState([] as TextBookTopic[]);
    const [currentTopic, updateCurrentTopic] = useState({
        _id: "",
        topicTitle: "",
        learningPointIdx: [],
        topicIdx: -1,
        categoryPath: [],
        sections: []
    } as TextBookTopic)

    useEffect( () => {
        axios.post(SERVER_URL + "/products/finals/textbook", { token })
             .then( res => updateTopics(res.data) )
             .catch(console.log);
    })

    return (
        <Switch>

            <Route exact path = "/User/Finals/TextBook" >
                {/* could be implemented inline */}
                <TopicSelector topics = { topics } updateCurrentTopic = { updateCurrentTopic }/>
            </Route>

            <Route path = "/User/Finals/TextBook/Subject">
                <TopicPage topic = { currentTopic }/>
            </Route>

        </Switch>
    )
    
}

export default TextBookPage;