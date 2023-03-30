import styled from "styled-components";
import { DataInterpQuestion } from "./types";
import pneumo from "./Pneumothorax.png";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import MetaContext from "../../MetaContext";


type QuestionPageProps = {
    question: DataInterpQuestion;
};

const QuestionPage = (props: QuestionPageProps) => {
    console.log(props.question);
    const { SERVER_URL, token } = useContext(MetaContext);

    if (!props.question) {
        return (
            <>
              <Link to="/DataInterpretation">
                <div style={{ position: "absolute", top: 5, left: 10 }}><FaTimes /></div>
              </Link>
              <Container>
                <QuestionText>No more questions available.</QuestionText>
              </Container>
            </>
          );
    }
    
    if (props.question.id === -1) 
        return (
          <>
            <Link to="/DataInterpretation">
              <div style={{ position: "absolute", top: 5, left: 10 }}><FaTimes /></div>
            </Link>
            <Container>
              <QuestionText>No more questions available.</QuestionText>
            </Container>
          </>
        );
      
      
    
    return (
        <>
            <Link to="/DataInterpretation">
                <div style={{ position: "absolute", top: 5, left: 10 }}><FaTimes /></div>
            </Link>
            <Container>
                <QuestionText>{props.question.task}</QuestionText>
                <Content>
                    <Img src={SERVER_URL + "/media/interp/" + props.question.image} />
                </Content>
                <Link to="/DataInterpretation/Answer">
                    <ShowAnswer>Show Answer</ShowAnswer>
                </Link>
            </Container>
        </>
    );
};

export default QuestionPage;

const Container = styled.div`
    text-align: center;
    margin: 50px auto;
    max-width: 800px;
`

const QuestionText = styled.div`
    background-color: #2f3237;
    border-radius: 2px;
    padding: 10px;
`

const Content = styled.div`
    background-color: #2f3237;
    width: 100%;
    margin: 25px 0px;
    padding: 25px;
    border-radius: 2px;
`

const Img = styled.img`
    width: 200px;
`

const ShowAnswer = styled.div`
    background-color: #ffb000;
    color: black;
    border-radius: 2px;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
`
