import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";
import Brain from "../../images/brainComputer.png";
import Navigator from "../Navigator";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
            <h1 className="gradient__text">Master Medical Exams and Data Interpretation</h1>
            <p>
                {" "}
                Get Ahead with Our Innovative OSCE Trainer and Guided Data Interpretation content,
                including our unique ECG and Chest X-Ray interpretation skill trainers
            </p>

            <div className="gpt3__header-content__input">
                <Link to="/OSCE">
                    <LoginButton>
                        <span>Get Started For Free</span>
                    </LoginButton>
                </Link>
            </div>

            <div className="gpt3__header-content__people">
                <img src={people} />
                <p>Join the thousands of medical students who have already signed up</p>
            </div>
        </div>

        <div className="gpt3__header-image">
            <img style={{ scale: "125%" }} src={Brain} />
        </div>
    </div>
);

export default Header;

const LoginButton = styled.button`
    padding: 10px 20px;
    background-color: #fad000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    span {
        color: black;
        font-weight: bold;
    }
`;
