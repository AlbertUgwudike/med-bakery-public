import styled from 'styled-components';

export const Subtitle = styled.div<{ darkMode: boolean }>`
    font: 30px Champion;
    text-align: center;
    padding: 10px 40px;
    margin: 20px auto;
    background-color: ${ props => props.darkMode ? "#1f1f1fd0" : "#f6e7ff90" };
    box-shadow: ${ props => props.darkMode ? "0px 0px 5px black" : "0px 0px 2px gray" };
    border-radius: 5px; 
    width: 300px;
`