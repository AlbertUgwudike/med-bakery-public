import styled from "styled-components";

export  const Panel = styled.div<{ darkMode: boolean }>`
    background-color: ${ props => props.darkMode ? "#1f1f1f" : "#f6f5f0" };
    border: 2.5px solid ${ props => props.darkMode ? "#838383" : "white" };
    box-shadow: ${ props => props.darkMode ? "0px 0px 10px black" : "0px 0px 5px gray" };
    border-radius: 5px;
    padding: 10px; 
`