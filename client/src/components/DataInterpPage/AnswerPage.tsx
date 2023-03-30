import styled from "styled-components";
import { DataInterpQuestion } from "./types";
import pneumo from "./Pneumothorax.png";
import { Link, useHistory } from "react-router-dom";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import MetaContext from "../../MetaContext";

type AnswerPageProps = {
    question: DataInterpQuestion;
    handleUpdateQuestionsList: (completedQuestion: DataInterpQuestion) => void;
};


const AnswerPage = (props: AnswerPageProps) => {
    const [selectedPoint, updateSelectedPoint] = useState(0);
    const section = props.question.sections[selectedPoint]

    const { SERVER_URL, token } = useContext(MetaContext);
    const history = useHistory();



      
      
    
    return (
        <>
            <Link to = "/DataInterpretation" >
                <div style = {{ position: "absolute", top: 5, left: 10 }}><FaTimes /></div>
            </Link>
            <Container>
                <Description>{props.question.description}</Description>
                <Content>
                    <div style = {{ width: "40%" }}>
                        {props.question.sections.map((s, idx) => 
                            <Point selected = {idx == selectedPoint} onClick = {() => updateSelectedPoint(idx)}>
                                {s.tab_label}
                            </Point>)}
                    </div>
                    <div><Img src = {SERVER_URL + "/media/interp/" + section.image} /></div>
                    
                </Content>
                <PointDetail>{section.descirption}</PointDetail>
                <ShowAnswer
                        onClick={() => {
                             console.log("Next button clicked");
                            if (selectedPoint === props.question.sections.length - 1) {
                                props.handleUpdateQuestionsList(props.question);
                                history.push('/DataInterpretation/Question');
                            } else {
                                updateSelectedPoint(p => p + 1);
                            }
                        }}
                    >
                        Next
            </ShowAnswer>


            </Container>
        </>
    );
};

export default AnswerPage;

const Container = styled.div`
    text-align: center;
    margin: 100px auto;
    max-width: 800px;
`

const Description = styled.div`
    background-color: grey;
    color: black;
    border-radius: 2px;
    padding: 10px;
`

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #2f3237;
    width: 100%;
    margin: 25px auto;
    padding: 25px;
    border-radius: 2px;
`

const Point = styled.div<{selected: boolean}>`
    background-color: ${props => props.selected ? "#ffb000" : "grey"};
    color: ${props => props.selected ? "black" : "white"};
    width: 100%;
    margin: 10px 0px;
    border-radius: 2px;
    cursor: pointer;
    font-size: 20px;
`

const Img = styled.img`
    width: 200px;
`

const PointDetail = styled.div`
    background-color: #2f3237;
    width: 100%;
    margin: 25px 0px;
    padding: 25px;
    border-radius: 2px;
`

const ShowAnswer = styled.div`
    background-color: #ffb000;
    color: black;
    border-radius: 2px;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`
