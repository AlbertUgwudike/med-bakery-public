import Navigator from "../Navigator";
import { Route, Switch } from "react-router-dom";
import TaskPage from "./TaskPage";
import QuestionSelector from "./QuestionSelector";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { NullQuestion } from "./exampleQuestions";
import AnswerPage from "./AnswerPage";
import TopicSelectionPage from "./TopicsSelectorPage";
import TopicSelectorPage from "./TopicsSelectorPage";
import { DataInterpQuestion } from "./types";
import MetaContext from "../../MetaContext";
import axios from "axios";

const DataInterpPage = (props: {}) => {
    const [currentQuestion, updateCurrentQuestion] = useState(NullQuestion);
    const [questions, updateQuestions] = useState<DataInterpQuestion[]>([]);
    const { SERVER_URL, token } = useContext(MetaContext);
    const [currentFinding, setCurrentFinding] = useState('');


  
    // Fetch questions
    const loadQuestions = async () => {
      const res = await axios.post(SERVER_URL + "/interp/get_questions", { token });
      // ... rest of the loadQuestions function
    };
  
    useEffect(() => {
      loadQuestions();
    }, []);

  
    const handleUpdateQuestionsList = (completedQuestion: DataInterpQuestion) => {
        console.log("handleUpdateQuestionsList called");
        console.log("completedQuestion:", completedQuestion);
    
        if (!completedQuestion) {
            console.error("Completed question is undefined");
            return;
        }

         // Filter the questions by finding, excluding the current question
            const filteredQuestionsByFinding = questions.filter(
            (question) =>
            question.finding === currentFinding && question.id !== completedQuestion.id
        );
    
        const updatedQuestionsList = questions.filter(
            (question) => question.id !== completedQuestion.id
        );
    
        // Update the questions list
        updateQuestions(updatedQuestionsList);
        console.log("Updated questions list:", updatedQuestionsList); // Log the updated questions list
    
        // Choose another random question
        const randomIndex = Math.floor(Math.random() * updatedQuestionsList.length);
        const newSelectedQuestion = updatedQuestionsList[randomIndex];
    
        // Update the current question
        updateCurrentQuestion(newSelectedQuestion);
        console.log("Next question:", newSelectedQuestion); // Log the next question after fetching it
    };
    
    
      

    return (
        <>
            <Switch>
                <Route exact path = "/DataInterpretation">
                    <Navigator selection={ "Data Interpretation" } />
                    <QuestionSelector updateCurrentQuestion={updateCurrentQuestion} />
                </Route>

                <Route path="/DataInterpretation/TopicSelection">
                <TopicSelectorPage
                updateCurrentQuestion={updateCurrentQuestion}
                updateQuestions={updateQuestions}
                setCurrentFinding={setCurrentFinding}
                />
                </Route>


                <Route path="/DataInterpretation/Question">
                    <TaskPage 
                    question = {currentQuestion}/>
                </Route>

                <Route path="/DataInterpretation/Answer">
                <AnswerPage
                    question={currentQuestion}
                    handleUpdateQuestionsList={handleUpdateQuestionsList}
                />
                </Route>
            </Switch>
        </>
    );
};

export default DataInterpPage;
