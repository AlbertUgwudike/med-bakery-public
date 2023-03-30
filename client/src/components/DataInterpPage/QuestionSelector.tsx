import axios from "../../myaxios";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pneumo from "./Pneumothorax.png";
import { DataInterpQuestion } from "./types";
import MetaContext from "../../MetaContext";
import { NullQuestion } from "./exampleQuestions";
import TopicSelectionPage from "./TopicsSelectorPage";
import { useRef } from 'react';
import { Question } from "../OSCEPage/types";
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type QuestionSelectorProps = {
    updateCurrentQuestion: Dispatch<SetStateAction<DataInterpQuestion>>;
};

interface CustomImgAttributes extends ImgHTMLAttributes<HTMLImageElement> {
    hoverSrc?: string;
  }
  
  type CustomImgProps = DetailedHTMLProps<CustomImgAttributes, HTMLImageElement>;
  

const QuestionSelector = (props: QuestionSelectorProps) => {
    // these will be null in the actual implementatiuon
    // initalised once questions are retrieved
    const [questions, updateQuestions] = useState([ NullQuestion ]);
    const [selectedQuestion, updateSelectedQuestion] = useState(NullQuestion);
    const [selectedFinding, updateSelectedFinding] = useState("");
    const [selectedCategory, updateSelectedCategory] = useState("");
    const [showFindings, setShowFindings] = useState(true);
    const [findingButtonsVisible, setFindingButtonsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setMenuOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [menuRef]);

  const toggleFindings = () => {
    setShowFindings(!showFindings);
  };

  const toggleFindingButtons = () => {
    setFindingButtonsVisible(!findingButtonsVisible);
  };
  
  const handleBurgerMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

    const { SERVER_URL, token } = useContext(MetaContext);

    const loadQuestions = async () => {
        const res = await axios.post(SERVER_URL + "/interp/get_questions", { token });
        const exemplarQuestions = res.data.questions.filter((q: { exemplar: string; }) => q.exemplar === "true");
        updateQuestions(exemplarQuestions);
        updateSelectedQuestion(exemplarQuestions[0]);
        updateSelectedFinding(exemplarQuestions[0].finding);
        updateSelectedCategory(exemplarQuestions[0].category);
      };
      

    
    useEffect( () => { loadQuestions(); }, [])

    const categories = Array(...new Set(questions.map(q => q.category)));

    const changeSelection = (category: string, finding: string, idx: number) => {
        updateSelectedCategory(category);
        const filteredForCategory = questions.filter(q => q.category === category);

        // no finding selected, set question to first in category
        if (finding === "") {
            updateSelectedFinding(filteredForCategory[0].finding);
            updateSelectedQuestion(filteredForCategory[0]);
            return;
        }

        // finding has been provided
        updateSelectedFinding(finding);
        const filteredForfinding = filteredForCategory.filter(q => q.finding === finding);

        // no specific index selected
        if (idx === -1) {
            updateSelectedQuestion(filteredForfinding[0]);
            return;
        }

        // valid idx has been selected
        updateSelectedQuestion(filteredForfinding[idx]);
    };

    const handleStartButtonClick = () => {
        setTopicSelectorDisplayed(true);
      };

      const lastSectionImage =
  selectedQuestion &&
  selectedQuestion.sections &&
  selectedQuestion.sections.length > 0
    ? selectedQuestion.sections[selectedQuestion.sections.length - 1].image
    : "";


      return (
        <Container>
          <BurgerMenu isOpen={menuOpen} onClick={handleBurgerMenuClick}>&#9776;</BurgerMenu>
  <Overlay isOpen={menuOpen} onClick={handleBurgerMenuClick} />

<DropdownContainer isOpen={menuOpen}>
    
  <div style={{ scale: "95%" }}>
    <Link to="/DataInterpretation/TopicSelection">
      <Title onClick={() => props.updateCurrentQuestion(selectedQuestion)}>
        <span>Question Bank</span>
      </Title>
    </Link>
  </div>
  <CategoryButton onClick={() => { toggleFindings(); toggleFindingButtons(); }}>
    {selectedCategory} {findingButtonsVisible ? '▼' : '▶'}
  </CategoryButton>
  <div
    className="finding-container"
    style={{
      display: showFindings ? "flex" : "none",
      flexWrap: "wrap",
      marginBottom: "20px",
      flexDirection: "column",
    }}
  >
    <div className="finding-container" style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px", flexDirection: "column", }}>
      {Array.from(
        new Set(questions.filter((q) => q.category === selectedCategory).map((q) => q.finding))
      ).map((finding) => (
        <FindingButton
          key={finding}
          onClick={() => changeSelection(selectedCategory, finding, -1)}
          selected={finding === selectedFinding}
        >
          {finding}
        </FindingButton>
      ))}
    </div>
  </div>
</DropdownContainer>

    <MainContent style={{display:"flex", flexDirection:"column", alignItems: "space-between", justifyItems:"center", }}>
    
    <MenuContainer> 
    <MobileMenu isOpen={menuOpen}>
  <div style={{ background: "", padding: "5%" }}>
    {Array.from(new Set(questions.map((q) => q.category))).map((category) => (
      <li key={category}>
        {Array.from(
          new Set(questions.filter((q) => q.category === category).map((q) => q.finding)),
        ).map((finding) => (
          <li key={finding} style={{ listStyle: "none" }}>
            <CategoryTitle> {finding} </CategoryTitle>
            <ul style={{ listStyle: "none", paddingLeft: "1rem" }}>
              {questions
                .filter((q) => q.category === category && q.finding === finding)
                .map((question, index) => (
                  <li key={index} style={{ listStyle: "none", marginBottom: "0.25rem" }}>
                    <MenuItem
                      onClick={() => {
                        props.updateCurrentQuestion(question);
                        changeSelection(question.category, question.finding, index);
                        handleBurgerMenuClick(); // Close the menu when a question is selected
                      }}
                      selected={question.title === selectedQuestion.title}
                    >
                      {question.title}
                    </MenuItem>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </li>
    ))}
  </div>
</MobileMenu>
   
    </MenuContainer>
    
    <div className="finding-container" style={{ display: "flex", flexWrap: "wrap", marginBottom: "0px", marginTop:"0px", flexDirection: "column", justifyContent:"center", alignItems:"center",}}>
   <SmallMenu>
    <div className="finding-container" style={{ display: "flex", flexWrap: "wrap", marginBottom: "0px", marginTop:"0px", flexDirection: "row", justifyContent:"center"}}>
    <div style={{ scale: "95%" }}>
    <Link to="/DataInterpretation/TopicSelection">
      <Title onClick={() => props.updateCurrentQuestion(selectedQuestion)}>
        <span>Question Bank</span>
      </Title>
    </Link>
  </div>
    <CategoryButton onClick={() => { toggleFindings(); toggleFindingButtons(); }}>
    {selectedCategory} {findingButtonsVisible ? '▼' : '▶'}
  </CategoryButton>
  <div
    className="finding-container"
    style={{
      display: showFindings ? "flex" : "none",
      flexWrap: "wrap",
      marginBottom: "20px",
      flexDirection: "column",
    }}
  >
     <div className="finding-container" style={{ display: "flex", flexWrap: "wrap", marginBottom: "0px", marginTop:"0px", flexDirection: "row", justifyContent:"center"}}>
      {Array.from(
        new Set(questions.filter((q) => q.category === selectedCategory).map((q) => q.finding))
      ).map((finding) => (
        <FindingButton
          key={finding}
          onClick={() => changeSelection(selectedCategory, finding, -1)}
          selected={finding === selectedFinding}
        >
          {finding}
        </FindingButton>
      ))}
    </div>
  </div>
    </div>
    </SmallMenu>
      <div className="finding-container" style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px", marginTop:"0px", flexDirection: "row", justifyContent:"center"}}>
      {questions
                    .filter(
                        (q) => q.category === selectedCategory && q.finding === selectedFinding
                    )
                    .map((q, i) => (
                        <FindingOption
                            onClick={() => changeSelection(q.category, q.finding, i)}
                            selected={q.title === selectedQuestion.title}
                        >
                            {q.title}
                        </FindingOption>
                    ))}
                    
                          
            </div>
            </div>
            

            
            <div style={{ display: "flex", width: "100%", justifyContent:"center" }}>
              <QuestionSummary style={{ width: "400px", maxWidth: "800px",}}>
                <Features style={{display: "flex", justifyContent: "center"}}> 
               {selectedQuestion.title}
               </Features>
                {/* image would be fetched from source in actual implementation */}
                <Features style={{display: "flex", justifyContent: "center"}}> 
                
                <StyledImage
                src={selectedQuestion ? SERVER_URL + "/media/interp/" + selectedQuestion.image : ""}
                hoverSrc={lastSectionImage ? SERVER_URL + "/media/interp/" + lastSectionImage : ""}
                />
                </Features>
                <Features>
                  {selectedQuestion.description}
                </Features>
              </QuestionSummary>
              
            </div>
            
            <div style={{display:"flex", justifyContent:"center"}}> 
            <Link to="/DataInterpretation/TopicSelection">
               
    
      <Title style={{}} onClick={() => props.updateCurrentQuestion(selectedQuestion)}>
        <span>Spot Diagnosis Questions</span>
      </Title>
    
  </Link>
  </div>
          </MainContent>
          
        </Container>
      );
};

export default QuestionSelector;

const SubcategoryTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const BurgerMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  padding: 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const SmallMenu = styled.div`
  display: none;
  padding: 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuContainer = styled.div`
  position: relative;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  transition: all 0.3s ease;
`;


const MobileMenu = styled.ul<{ isOpen: boolean }>`
display: none;
position: absolute;
top: 0;
left: ${(props) => (props.isOpen ? '0' : '-100%')};
width: 300px;
height: 100%;
margin: 0;
padding: 80px 0;
list-style: none;
background-color: #eceff1;
box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
transition-duration: 0.25s;
z-index: 1000;


 @media (max-width: 768px) {
  display: ${(props) => (props.isOpen ? "block" : "none")};
  flex-direction: column;
    gap: 10px;
    list-style: none;
    padding: 0;
   }
`;

const MenuItem = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#042c54" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#81AFDD")};
  margin: 5px;
  padding: 5px 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.selected ? "#81AFDD" : "#042c54")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #042c54;
    color: white;
    border-color: #042c54;
  }
`;


const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // ... (your other styles)
`;

const ListItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;


const DropdownContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    display: ${(props) => (props.isOpen ? "none" : "none")};
  }
`;



const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
    background-color: #031B34;
    margin: 5%;
    padding: 20px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 1000px;
    
    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        align-items: center;
    }
`;

const CategoryButton = styled.button`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  font-size: 18px;
  line-height: 1.5;
  background-color: transparent;
  color: #81afdd;
  border: 0px solid #81afdd;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #042c54;
    color: white;
    border-color: #042c54;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const Select = styled.select`
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 18px;
    line-height: 1.5;
    background-color: transparent;
    color: #81AFDD;
    border: 0px solid #81AFDD;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    appearance: none;

    &:hover {
        background-color: #042c54;
        color: white;
        border-color: #042c54;
    }

    &.category-container,
    &.finding-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 600px;
    }

    @media (max-width: 768px) {
        font-size: 16px; // Increase the font size
        &.category-container,
        &.finding-container {
            max-height: none;
            flex-wrap: nowrap;
            overflow-y: visible; // Change overflow-y to visible
        }
    }
`;




const FindingButton = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#042c54" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#81AFDD")};
  margin: 5px;
  padding: 5px 5px;
  font-size: 14px; 
  border-radius: 5px;
  border: 1px solid ${(props) => (props.selected ? "#81AFDD" : "#042c54")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #042c54;
    color: white;
    border-color: #042c54;
  }
`;

const TitleButton = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#042c54" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#81AFDD")};
  margin: 5px;
  padding: 5px 5px;
  font-size: 14px; 
  border-radius: 5px;
  border: 1px solid ${(props) => (props.selected ? "#81AFDD" : "#042c54")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #042c54;
    color: white;
    border-color: #042c54;
  }
`;


const FindingOption = styled.div<{ selected: boolean }>`
background-color: ${(props) => (props.selected ? "#042c54" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#81AFDD")};
  margin: 5px;
  padding: 5px 5px;
  font-size: 16px; 
  border-radius: 5px;
  border: 1px solid ${(props) => (props.selected ? "#81AFDD" : "#042c54")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #042c54;
    color: white;
    border-color: #042c54;
  }
`;

const CategoryTitle = styled.div`
    font-size: 20px;
    margin: 5px;
`;

const CategoryPanel = styled.div<{ selected: boolean }>`
    text-align: center;
    margin-bottom: 10px;
    padding: 10px 5px;
    border: 0.25px solid grey;
    margin: 10px;
    background-color: #040C18;
`;

const QuestionSummary = styled.div`
    text-align: center;
    border: 5px solid #031B34;
    margin: 10px;
    font-size: 30px;
    border-radius: 15px;
    padding: 2%;
    background: radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 0.5) 5%, rgba(4, 12, 24, 0.5) 25%);
    color-bg: #040C18;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const StyledImage = styled.img<CustomImgProps>`
 height: 300px;
    
    
    @media (max-width: 768px) {
        height: 200px;
    }

  &:hover {
    content: url(${(props) => props.hoverSrc});
  }
`;



const Features = styled.div`
    text-align: left;
    background: rgba(4, 12, 24, 0.55);
    color: #81AFDD;
    border: 0.75px solid #042c54;
    margin: 10px;
    padding: 20px;
    font-size: 18px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Title = styled.div`
text-align: center;
background-color: #fad000;
color: black;
display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 18px;
    line-height: 1.5;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    appearance: none;

    &:hover {
        background-color: #FFFF;
        color: white;
        border-color: #042c54;
    }

span {
    color: black;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px; // Increase the font size
    &.category-container,
    &.finding-container {
        max-height: none;
        flex-wrap: nowrap;
        overflow-y: visible; // Change overflow-y to visible
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

