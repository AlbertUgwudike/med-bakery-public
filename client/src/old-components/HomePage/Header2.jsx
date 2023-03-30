import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import Brain from '../../images/Brain.png';
import "@fontsource/plus-jakarta-sans";
import { Login, LoginButton } from './LoginLogout';
import USP from '../../images/USP.png';
import stones from '../../images/stones.png'
import styled from 'styled-components';
import { useContext } from 'react';
import MetaContext from '../../MetaContext';
import whitelogo from '../../images/whitelogo.svg';
import intestine from '../../images/Intestine.png';
import { Link } from 'react-router-dom';
import { FaVolumeUp } from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';



const Header2 = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <h2 style={{fontFamily:"Jakarta", fontSize:35, lineHeight:"-12%"}} className="gradient__text">Perform better at OSCE's</h2>
      <p></p>

      <div style = {{  display: "flex", flexFlow: "column", justifyContent: 'flex-start', marginLeft: "0px", marginTop: "-25px"}}>

                        <div>
                        <Prompt style = {{ fontSize: '108%', width: "100%", padding: "15px 23px", textAlign: "left", justifyContent: 'flex-start',}} >
      
                        Textbooks cannot teach you how to ace your OSCES, <br/>the only way is through deliberate practice with other people. <br/>If you have no friends, that's okay we'll prep with you x

                        </Prompt>
                        </div> 
              
                </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img style={{scale: "85%"}} src={stones} />
    </div>

  </div>
);

export default Header2;

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