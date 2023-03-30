import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MetaContext from "../../MetaContext";
import TimerBar from "./TimerBar";
import { Question, Station } from "./types";
import { Link, useHistory, useLocation } from "react-router-dom";
import AlphaTimer from "./AlphaTimer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SaveModal from "./SaveModal";

type HeaderProps = {
    updateStation: Dispatch<SetStateAction<Station>>;
    station: Station;
    handleExit: (questions: Question[], tok: string) => void;
    title: string;
    percentage: number;
    timer: boolean;
    nextFunc: () => void;
    prevFunc: () => void;
};

const Header = (props: HeaderProps) => {
    const { token } = useContext(MetaContext);
    const [displayLoginOption, updateDisplayLoginOption] = useState(false);

    return (
        <HeaderContainer>
            <h2>{props.title}</h2>
            <TimerBar percentage={props.percentage} />

            <br />

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: "3px",
                }}
            >
                <ExitButton
                    onClick={() =>
                        token
                            ? props.handleExit(props.station?.questions, token)
                            : updateDisplayLoginOption(true)
                    }
                >
                    Exit
                </ExitButton>

                {props.timer && (
                    <AlphaTimer
                        startTime={props.station.timePermitted}
                        nextFunc={props.nextFunc}
                        updateStation={props.updateStation}
                    />
                )}

                <div style={{ display: "flex" }}>
                    <Arrow onClick={props.prevFunc}>
                        <FaArrowLeft />
                    </Arrow>
                    <Arrow onClick={props.nextFunc}>
                        <FaArrowRight />
                    </Arrow>
                </div>
            </div>

            <br />

            {displayLoginOption && (
                <SaveModal
                    handleExit={props.handleExit}
                    station={props.station}
                    close={() => updateDisplayLoginOption(false)}
                />
            )}
        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
    grid-row-start: 1;
    grid-column-start: 1;
    height: 20vh;
    text-align: center;
    width: 100%;
    max-width: 800px;
    margin: auto;
    background-color: #;
    padding-top: 20px;
    opacity: 0.98;
    z-index: 999;
    border-radius: 5px;
`;

export const Arrow = styled.button`
    text-align: center;
    border: 2px solid grey;
    width: 40px;
    color: #FFFF;
    background-color: transparent;
    border-radius: 2px;
    height: max-content;
    border-radius: 5px;
`;

export const ExitButton = styled.div`
    display: inline-block;
    text-align: center;
    border: 2px solid grey;
    width: 80px;
    color: #FFFF;
    border-radius: 2px;
    height: max-content;
    border-radius: 5px;
`;
