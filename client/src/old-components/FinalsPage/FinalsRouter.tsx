import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import LearningPointsPage from './LearningPointsPage';
import TextBook from '../TextBookPage/TextBookPage';
import FinalsSelector from './FinalsSelector';
import LastSessionRouter from './LastSessionRouter';
import { Container } from '../General/Container';
import BackButton from '../General/BackButton';
import { useContext, useState } from 'react';
import { FinalsQuestion } from '../../types';
import axios from 'axios';
import CategoryPage from './CategoryPage';
import QuestionPage from '../QuestionPage/QuestionPage';
import MetaContext from '../../MetaContext';

type FinalsRouterProps = { }

const FinalsRouter = (props: FinalsRouterProps) => {

    const { SERVER_URL, token } = useContext(MetaContext);
    const [availableQuestions, updateAvailableQuestions] = useState([] as FinalsQuestion[]);
    const [sessionType, updateSessionType] = useState("Filter");

    const handleSessionTypeChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
        updateSessionType(e.target.value);
    }

    const finishSession = () => {
        const answeredQuestions = availableQuestions.filter(q => q.answered)

        // if all the fetched available questions are unanswered we must be reviewing questions, do not submit
        // we might need a mmore robust flag for this function
        if (answeredQuestions.length > 0) {
            window.analytics.track({
                userId: "",
                event: "Question session Finished"
            })
            axios.post(SERVER_URL + "/users/finishsession", { 
                token,
                questions: answeredQuestions
            }).catch(console.log);
        }
    }

    const retriveQuestions = (paths: string[][]) => {
        window.analytics.track({
            userId: "",
            event: "questions started"
        })
        axios.post(SERVER_URL + "/questions/newquestion", {
            token,
            paths: paths,
            repeatQuestions: sessionType === "All Questions"
        }).then(res => {
            // console.log("we got em", res.data)
            updateAvailableQuestions(res.data)
        }).catch(console.log);
    }

    if (!token) return <Redirect to = {"/"} />

    return (
        <div>

            <Switch>

                <Route exact path = "/User/Finals">
                    <CategoryPage 
                        retriveQuestions = { retriveQuestions }
                        handleSessionTypeChange = { handleSessionTypeChange }
                        sessionType = { sessionType } 
                    />
                </Route>
                
                <Route path = "/User/Finals/Session"> 
                    <QuestionPage 
                        availableQuestions = { availableQuestions }
                        updateAvailableQuestions = { updateAvailableQuestions }
                        finishSession = { finishSession }
                        reviewMode = { false }
                    />
                </Route>

                <Route path = "/User/Finals/LastSession"> 
                    <LastSessionRouter
                        reviewMode = { false }
                    />
                </Route>

                <Route path = "/User/Finals/LearningPoints"> 
                    <LearningPointsPage />
                </Route>

                <Route path = "/User/Finals/TextBook">
                    <TextBook />
                </Route>

            </Switch>

        </div>
    );
}

export default FinalsRouter;