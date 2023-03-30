import React from 'react';
import './whatGPT3.css';
import USP from '../../images/USP.png';
import stones from '../../images/stones.png'
import example from '../../images/Example.png'
import styled from 'styled-components';
import { FaVolumeUp } from "react-icons/fa"
import { Link } from 'react-router-dom';

const WhatGPT3 = () => (
  <div style={{marginTop: '-30px', marginLeft: ''}} className="gpt3__whatgpt3 section__margin" id="wgpt3">

    <div className="gpt3__header-image">
      <img style={{scale: "100%"}} src={USP} />
    </div>
    
    <div className="gpt3__header-image">
      <img style={{scale: "100%"}} src={example} />
    </div>



    {/* <div style={{ display: 'inline-flex', justifyContent: 'center'}}>
    <div style={{ width: "40%", textAlign: "left", justifyContent: 'center',}}>
                        <Link to = "/Demo">
                            <DemoButton> Get Started </DemoButton>
                        </Link>
    </div>
    </div> */}

  </div>

);

export default WhatGPT3;

const Usp = styled.img`
    height: 450px;
    margin: auto;
    display: flex;
    content: url(${ USP });
    scale: 100%;
    @media (max-width: 600px) {
        height: 75px;
        margin: auto;
    }
`

const Prompt = styled.div`
    color: #B8A5B6;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 1% 0;
    &:hover {
        cursor: pointer;
        border: 1px solid #FAD000;
    }
`
const DemoButton = styled.button`
    margin: 5% 5%;
    padding: 0% 10%;
    font-size: 35px;
    border: 1px solid #DA9926;
    border-radius: 8px;
    background-color: #DA9926;
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
`