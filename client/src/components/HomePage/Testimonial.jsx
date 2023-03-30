import React from "react";
import "./header.css";
import Brain from "../../images/brainComputer.png";
import "@fontsource/plus-jakarta-sans";
import { Login, LoginButton } from "./LoginLogout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaVolumeUp } from "react-icons/fa";
import "aos/dist/aos.css";

const Testimonial = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            
            <div
                style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "flex-start",
                    marginLeft: "-25px",
                }}
            >
                <div>
                <div style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "5px 43px",
                            marginBottom: "-40px",
                            justifyContent: "flex-start"}}>
                            <h1
                            style={{ fontFamily: "Jakarta", fontSize: 14, lineHeight: "-12%", color: '#da9926' }}
                            className="gradient__text">
                            Final year medical student
                        </h1>
                    </div>
                    <Prompt
                        style={{
                            fontSize: "120%",
                            width: "100%",
                            padding: "5px 23px",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            marginBottom: "20px"
                        }}
                    >
                        "I liked the idea, but using it I am loving it. This is such an easy way to revise"
                    </Prompt>
                    
                </div>

                <div>
                <div style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "5px 43px",
                            marginBottom: "-40px",
                            justifyContent: "flex-start"}}>
                            <h1
                            style={{ fontFamily: "Jakarta", fontSize: 14, lineHeight: "-12%", color: '#da9926' }}
                            className="gradient__text">
                            Third Year Medical Student
                        </h1>
                    </div>
                    <Prompt
                        style={{
                            fontSize: "120%",
                            width: "100%",
                            padding: "5px 23px",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            marginBottom: "20px"
                        }}
                    >
                        "It gave me wonderfully low pressure stress, I genuinley blanked on the sarcoidosis case, which is exactly what I need so I don't freeze up in the real thing."
                    </Prompt>
                    
                </div>

                <div>
                <div style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "5px 43px",
                            marginBottom: "-40px",
                            justifyContent: "flex-start"}}>
                            <h1
                            style={{ fontFamily: "Jakarta", fontSize: 14, lineHeight: "-12%", color: '#da9926' }}
                            className="gradient__text">
                            Final Year Medical Student
                        </h1>
                    </div>
                    <Prompt
                        style={{
                            fontSize: "120%",
                            width: "100%",
                            padding: "5px 23px",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            marginBottom: "20px"
                        }}
                    >
                        "I'm blown away by how much I'm enjoying this?!"
                    </Prompt>
                    
                </div>

                <div>
                <div style={{
                            width: "100%",
                            textAlign: "left",
                            padding: "5px 43px",
                            marginBottom: "-40px",
                            justifyContent: "flex-start"}}>
                            <h1
                            style={{ fontFamily: "Jakarta", fontSize: 14, lineHeight: "-12%", color: '#da9926' }}
                            className="gradient__text">
                            Fourth Year Medical Student
                        </h1>
                    </div>
                    <Prompt
                        style={{
                            fontSize: "120%",
                            width: "100%",
                            padding: "5px 23px",
                            textAlign: "left",
                            justifyContent: "flex-start",
                            marginBottom: "20px"
                        }}
                    >
                        "I hatee the sound of my voice so I was really reluctant to try it...It really made me realise how much I waffled, defintely something I need to work on."
                    </Prompt>
                    
                </div>

            </div>
        </div>

    </div>
);

export default Testimonial;

const DemoButton = styled.button`
    margin: 5% 5%;
    width: 200px;
    font-size: 24px;
    border: 1px solid #da9926;
    border-radius: 8px;
    background-color: #da9926;
    color: #000000;
    &:hover {
        drop-shadow: 2px;
        border: 1px solid black;
    }

    @media (max-width: 600px) {
        height: 40px;
        width: 150px;
        font-size: 15px;
    }
`;
const Prompt = styled.div`
    color: #FFFFF;
    border: 1px solid grey;
    border-radius: 8px;
    margin: 0.5% 5%;
    padding: 1% 0;
    &:hover {
        cursor: pointer;
        border: 1px solid #fad000;
    }
`;
