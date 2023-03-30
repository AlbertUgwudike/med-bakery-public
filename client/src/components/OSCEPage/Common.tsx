import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 0 20px;
    text-align: center;
`;
export const Box = styled.div`
    background-color: #031B34;
    padding: 10px;
    border-radius: 10px;
`;

export const Timer = styled.div`
    display: inline-block;
    text-align: center;
    border: 2px solid grey;
    width: 75px;
    background-color: #;
    border-radius: 5px;
`;

export const StartButton = styled.div`
    text-align: center;
    border: 2px solid grey;
    width: 120px;
    color: #fad000;
    border-radius: 5px;
    height: max-content;
`;

export const MoveOn = styled.div`
    text-align: center;
    border: 2px solid grey;
    margin: auto;
    background-color: #272727;
    color: #fad000;
    border-radius: 2px;
    &:hover {
        cursor: pointer;
    }
`;

export const P = styled.p`
    margin: 20px;
`;
