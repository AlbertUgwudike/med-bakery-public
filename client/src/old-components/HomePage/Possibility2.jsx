import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import Screen from '../../images/Screen.png';
import Screen2 from '../../images/Screen2.png';
import styled from 'styled-components';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-content">
    <h4>No friends? No problem x</h4>
      <h1 className="gradient__text">Packed with real OSCE stations <br /> with Markschemes!</h1>
      <p>Listen to our exemplar audios or just mark yourself, either way, we've got you covered.  </p>
    </div>
    <div className="gpt3__possibility-image">
     <Record/>
    </div>
  </div>

);

export default Possibility;

const Record = styled.img`
    height: 186px;
    margin: auto;
    display: flex;
    content: url(${ Screen2 });
    scale: 100%;
    @media (max-width: 600px) {
        height: 75px;
        margin: auto;
    }
`
