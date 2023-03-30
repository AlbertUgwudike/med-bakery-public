import React from "react";
import "./header.css";
import Brain from "../../images/Brain.png";
import "@fontsource/plus-jakarta-sans";
import { Login, LoginButton } from "./LoginLogout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaVolumeUp } from "react-icons/fa";
import "aos/dist/aos.css";

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1
                style={{ fontFamily: "Jakarta", fontSize: 50, lineHeight: "-12%" }}
                className="gradient__text"
            >
                MedBakery
            </h1>

            <div
                style={{
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "flex-start",
                    marginLeft: "-25px",
                }}
            >
                <div>
                    <Prompt
                        style={{
                            fontSize: "108%",
                            width: "100%",
                            padding: "5px 23px",
                            textAlign: "left",
                            justifyContent: "flex-start",
                        }}
                    >
                        <FaVolumeUp
                            style={{ marginRight: "8px", marginTop: "3px", marginBottom: "3.5px" }}
                        />
                        A freshly baked platform created to help you pass medical exams
                    </Prompt>
                </div>
                <div style={{ width: "100%", textAlign: "left", justifyContent: "flex-start" }}>
                    <Link to="/OSCE">
                        <DemoButton> Get Started </DemoButton>
                    </Link>
                </div>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img style={{ scale: "85%" }} src={Brain} />
        </div>
    </div>
);

export default Header;

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
    color: #da9926;
    border: 1px solid grey;
    border-radius: 8px;
    margin: 0.5% 5%;
    padding: 1% 0;
    &:hover {
        cursor: pointer;
        border: 1px solid #fad000;
    }
`;
