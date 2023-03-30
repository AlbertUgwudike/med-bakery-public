import { useEffect, useState } from "react";
import styled from "styled-components";

type TimerBarProps = {
    percentage: number;
};

const TimerBar = (props: TimerBarProps) => {
    return (
        <OuterBar>
            <InnerBar percentage={props.percentage} />
        </OuterBar>
    );
};

export default TimerBar;

const OuterBar = styled.div`
    height: 10px;
    background-color: #4a4b52;
`;

const InnerBar = styled.div<{ percentage: number }>`
    background-color: #5dcc6f;
    width: ${props => props.percentage}%;
    height: 100%;
    transition: width 1s linear;
`;
