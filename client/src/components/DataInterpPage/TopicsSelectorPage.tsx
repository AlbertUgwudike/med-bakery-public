import axios from "../../myaxios";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pneumo from "./Pneumothorax.png";
import { DataInterpQuestion } from "./types";
import MetaContext from "../../MetaContext";
import { NullQuestion } from "./exampleQuestions";
import { FaTimes } from "react-icons/fa";


export type TopicSelectorProps = {
  updateCurrentQuestion: Dispatch<SetStateAction<DataInterpQuestion>>;
  updateQuestions: Dispatch<SetStateAction<DataInterpQuestion[]>>;
  setCurrentFinding: Dispatch<SetStateAction<string>>;
};


const TopicSelectorPage = (props: TopicSelectorProps) => {
    // these will be null in the actual implementatiuon
    // initalised once questions are retrieved
    const [questions, updateQuestions] = useState([ NullQuestion ]);
    const [selectedQuestion, updateSelectedQuestion] = useState(NullQuestion);
    const [selectedFinding, updateSelectedFinding] = useState<string | null>("");
    const [selectedCategory, updateSelectedCategory] = useState<string | null>("");



    const { SERVER_URL, token } = useContext(MetaContext);

    const loadQuestions = async () => {
  const res = await axios.post(SERVER_URL + "/interp/get_questions", { token });
  const exemplarQuestions = res.data.questions.filter((q: { exemplar: string; category: string; finding: string }) => 
    (q.exemplar === "true" || q.exemplar === "false") &&
    q.category !== "ExcludedCategory" &&
    q.finding !== "Basics" &&
    q.finding !== "Irregular Rhythm"
  );

  updateQuestions(exemplarQuestions);

  // Set the initial selected category and finding
  if (exemplarQuestions.length > 0) {
    const firstCategory = exemplarQuestions[0].category;
    const firstFinding = exemplarQuestions[0].finding;
    updateSelectedCategory(firstCategory);
    updateSelectedFinding(firstFinding);

    // Uncheck the first radio button
    const firstRadioButton = document.getElementById(firstFinding) as HTMLInputElement;
    if (firstRadioButton) {
      firstRadioButton.checked = false;
    }
  }
};

    
      

    
    useEffect( () => { loadQuestions(); }, [])

    const categories = Array(...new Set(questions.map(q => q.category)));

    const changeSelection = (category: string, finding: string) => {
      updateSelectedCategory(category);
      console.log("Selected category:", category); // Log the updated selected category
    
      const filteredForCategory = questions.filter(q => q.category === category);
    
      if (finding === "") {
        updateSelectedFinding(filteredForCategory[0].finding);
        console.log("Selected finding:", filteredForCategory[0].finding); // Log the updated selected finding
    
        updateSelectedQuestion(filteredForCategory[0]);
        console.log("Selected question:", filteredForCategory[0]); // Log the updated selected question
    
        props.setCurrentFinding(filteredForCategory[0].finding); // Update the current finding using the prop
        return;
      }
    
      updateSelectedFinding(finding);
      console.log("Selected finding:", finding); // Log the updated selected finding
    
      const filteredForfinding = filteredForCategory.filter(q => q.finding === finding);
    
      // select a random question
      const randomIndex = Math.floor(Math.random() * filteredForfinding.length);
    
      updateSelectedQuestion(filteredForfinding[randomIndex]);
      console.log("Selected question:", filteredForfinding[randomIndex]); // Log the updated selected question
    
      props.setCurrentFinding(finding); // Update the current finding using the prop
      props.updateQuestions(filteredForfinding);
    };
    
    
    
    
    

  
  

    const handleStartButtonClick = () => {
        setTopicSelectorDisplayed(true);
      };

      return (
        <> 
        
        <Container>
          <div >
            <Fieldset>
            <Link to = "/DataInterpretation" >
                <div style = {{ position: "relative", top: 2, left: 185  }}><FaTimes /></div>
            </Link>
              <Legend>Choose a topic</Legend>
              <RadioItemContainer >
                {categories.map((c) => {
                  const findings = Array(
                    ...new Set(
                      questions.filter((q) => q.category === c).map((q) => q.finding)
                    )
                  );
      
                  return (
                    <div
                      
                    >
                      {findings.map((f) => (
                        <RadioItem>
                          <RadioLabel htmlFor={f}>
                      <RadioInput
                          type="radio"
                          id={f}
                          name="category"
                          value={f}
                          checked={selectedCategory === c && selectedFinding === f && selectedCategory !== null && selectedFinding !== null}

                          onChange={() => changeSelection(c, f)}
                      />


                            <RadioSpan>{f}</RadioSpan>
                            <Icon></Icon>
                          </RadioLabel>
                        </RadioItem>
                      ))}
                    </div>
                  );
                })}
              </RadioItemContainer>
            </Fieldset>
            <Link to="/DataInterpretation/Question">
              <Title onClick={() => props.updateCurrentQuestion(selectedQuestion)}>
                <span>Start</span>
              </Title>
            </Link>
          </div>
        </Container>

        </>
      );
      
      
};

export default TopicSelectorPage;

const Container = styled.div`
    margin: 5%;
    padding: 10px 10px;
    display: flex;
    flex-flow: column;
    height: 1000px;
    display: grid;
    place-items: center;
    user-select: none;
`;

const FindingOption = styled.div<{ selected: boolean }>`
margin-bottom: 10px;
padding: 10px 5px;
border: 0.25px solid grey;
margin: 10px;
background-color: #fad000;
color: black;
margin: 5%;
background-color: ${props => (props.selected ? "#fad000" : "transparent")};
color: ${props => (props.selected ? "black" : "#81AFDD")};
    display: flex;
    cursor: pointer;
`;

const CategoryTitle = styled.div`
    font-size: 20px;
    margin: 5px;
`;

const CategoryPanel = styled.div<{ selected: boolean }>`

`;

const QuestionSummary = styled.div`
    text-align: center;
    border: 5px solid #031B34;
    margin: 10px;
    font-size: 20px;
    padding: 2%;
`;

const Img = styled.img`
    height: 300px;
`;

const Features = styled.div`
    text-align: left;
    border: 0.25px solid grey;
    margin: 10px;
    padding: 20px;
`;

const Content = styled.div`
    background-color: #2f3237;
    width: 100%;
    margin: 25px 0px;
    padding: 25px;
    border-radius: 2px;`;

const Title = styled.div`
text-align: center;
margin-bottom: 10px;
padding: 10px 5px;
border: 0.25px solid grey;
margin: 10px;
background-color: #fad000;
color: black;
margin: 5%;
border-radius: 5px;
span {
    color: black;
    font-weight: bold;
  }
`;



const StartButton = styled.div`
text-align: center;
margin-bottom: 10px;
padding: 10px 5px;
border: 0.25px solid grey;
margin: 10px;
background-color: #040C18;
`;
function setTopicSelectorDisplayed(arg0: boolean) {
    throw new Error("Function not implemented.");
}



const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;
  max-width: 340px;
  border-radius: 20px;
  width: 100%;
`;

const Legend = styled.legend`
  font-size: 22px;
  font-weight: 600;
  color: #191919;
  margin: 0;
  background: #edf4fe;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px 10px 0 0;
  border: 2px solid #3a88f6;
  display: flex;
`;

const RadioItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #3a88f6;
  border-top: 0;
  background: #042c54;
  border-radius: 0 0 10px 10px;
  padding: 10px 0;
`;

const RadioItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const RadioLabel = styled.label`
  font-weight: 300;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
  display: flex;
  padding: 20px 20px 20px 50px;
  font-weight: 500;
  color: #FFFF;
  -webkit-tap-highlight-color: transparent;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  position: absolute;
  appearance: none;
  -webkit-appearance: none;
  transition: linear 0.8s;
  height: 0;
  width: 0;
  -webkit-tap-highlight-color: transparent;
  left: 20px;

  &:after {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    top: 50%;
    left: 0;
    border-radius: 20px;
    border: 2px solid #3a88f6;
    transition: linear 0.2s;
    cursor: pointer;
    transform: translateY(-50%);
  }

  &:checked:after {
    content: "";
    position: absolute;
    height: 16px;
    width: 16px;
    background: #3a88f6;
    transition: linear 0.2s;
    cursor: pointer;
    transform: translateY(-50%);
  }

  &:checked:before {
    content: "";
    position: absolute;
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background: #fff;
    left: 4px;
    top: 50%;
    z-index: 1;
    cursor: pointer;
    transform: translateY(-50%);
  }
`;


const RadioSpan = styled.span`
  // Add any necessary CSS styles for the span
`;

const Icon = styled.span`
  font-size: 24px;
  position: absolute;
  right: 26px;
  top: 11px;
  transition: linear 0.3s;

  ${RadioInput}:checked + ${RadioSpan} > & {
    transform: scale(1.7);
  }
`;
