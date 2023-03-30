import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import Screen from '../../images/Screen.png';
import styled from 'styled-components';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
     <Record/>
    </div>
    <div className="gpt3__possibility-content">
      <h4>Get in  before it's too late...</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Textbooks cannot teach you how to ace your OSCES, the only way is through deliberate practice with other people. If you have no friends, that's okay we'll prep with you x  </p>
    </div>
  </div>
);

export default Possibility;

const Record = styled.img`
    height: 186px;
    margin: auto;
    display: flex;
    content: url(${ Screen });
    scale: 100%;
    @media (max-width: 600px) {
        height: 75px;
        margin: auto;
    }
`