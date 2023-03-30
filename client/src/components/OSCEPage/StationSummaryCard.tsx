import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { FaCheckCircle, FaMinusCircle, FaTimesCircle } from "react-icons/fa";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import MetaContext from "../../MetaContext";
import { getBinaryDigits, markPercentage } from "./hooks";
import { AnsweredStationDetails } from "./types";

type StationSummaryCardProps = {
    summary: {
        id: string;
        thumbnail: string;
        title: string;
    };
    selectStation: (id: string, options: { review: boolean; marks: (0 | 1)[] }) => void;
    answeredStations: AnsweredStationDetails[];
    available: boolean;
    openSubscribeModal: () => void;
};

const StationSummaryCard = (props: StationSummaryCardProps) => {
    const history = useHistory();
    const matches = props.answeredStations.filter(s => s.id === props.summary.id);
    const percentage = matches.length === 0 ? 0 : markPercentage(matches[0].markCode);
    const marks = matches.length === 0 ? [] : getBinaryDigits(matches[0].markCode).slice(1);

    const handleClick = (review: boolean) => {
        props.selectStation(props.summary.id, { review, marks });
    };

    let completnessSymbol = <FaMinusCircle color="#505050" size={20} />;
    if (!isNaN(percentage) && props.available) {
        completnessSymbol =
            percentage < 50 ? (
                <FaTimesCircle color="red" size={20} />
            ) : (
                <FaCheckCircle color="green" size={20} />
            );
    }

    return (
        <StationPanel>
            <div style={{ margin: "20px 0 20px 20px", display: "flex", alignItems: "center" }}>
                <div>{completnessSymbol}</div> &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: 15 }}>{props.summary.title}</span>
            </div>
            <div>
                {props.available ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Percent color={percentage > 50 ? "green" : "red"}>
                            {isNaN(percentage) ? "--" : percentage}%
                        </Percent>

                        <div>
                            <Link to="/OSCE/Station/Brief" style={{ display: "block" }}>
                                <Button color="#FAD000" onClick={() => handleClick(false)}>
                                    Start
                                </Button>
                            </Link>
                            {matches.length > 0 && (
                                <Link to="/OSCE/Station/Summary" style={{ display: "block" }}>
                                    <Button color="grey" onClick={() => handleClick(true)}>
                                        Review
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                ) : (
                    <Premium
                        color="#FAD000"
                        style={{ backgroundColor: "#FAAD29", color: "#000000" }}
                        onClick={() => history.push("/Subscribe/Checkout")}
                    >
                        Premium
                    </Premium>
                )}
            </div>
        </StationPanel>
    );
};

export default StationSummaryCard;

const StationPanel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #040C18;
    color: #f7bd9d;
    border-style: none;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    margin: 0 20px 20px 0;
`;

const Button = styled.button<{ color: string }>`
    text-align: center;
    margin: 5px 10px 5px 0;
    border-radius: 8px;
    padding: 0 10px;
    height: 30px;
    width: 75px;
    border: 1px solid grey;
    color: ${props => props.color};
    background-color: transparent;
`;

const Percent = styled.button<{ color: string }>`
    text-align: center;
    margin: 5px 10px 5px 0;
    border-radius: 8px;
    padding: 0 10px;
    height: 30px;
    border: 1px solid grey;
    color: ${props => props.color};
    background-color: transparent;
`;

const Premium = styled.button`
    text-align: center;
    margin: 5px 10px 5px 0;
    border-radius: 8px;
    padding: 0 10px;
    border: 1px solid grey;
    color: #fad000;
    background-color: #fad000;
    width: 100px;
`;
