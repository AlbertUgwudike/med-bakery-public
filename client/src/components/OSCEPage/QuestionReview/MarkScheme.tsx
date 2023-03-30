import { Dispatch, SetStateAction, useState } from "react";
import { FaCaretDown, FaCaretRight, FaCheckCircle, FaCircle, FaTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import { toggleMarkPoint } from "../hooks";
import { MarkSchemeSection, Station } from "../types";

type MarkSchemeProps = {
    updateStation: Dispatch<SetStateAction<Station>>;
    markScheme: MarkSchemeSection[];
    questionIdx: number;
    reviewMode: boolean;
};

const MarkScheme = (props: MarkSchemeProps) => {
    const selectPoint = (pointId: number) => {
        props.updateStation(oldStation => toggleMarkPoint(oldStation, props.questionIdx, pointId));
    };

    const renderSchemePoint = (schemePoint: {
        point: string;
        selected: boolean;
        pointId: number;
    }) => {
        return (
            <SchemePointContainer
                onClick={() => (props.reviewMode ? {} : selectPoint(schemePoint.pointId))}
            >
                <SchemePoint>{schemePoint.point}</SchemePoint>
                <div>
                    {schemePoint.selected ? (
                        <FaCheckCircle color="green" />
                    ) : (
                        <FaCircle color="grey" />
                    )}
                </div>
            </SchemePointContainer>
        );
    };

    return (
        <div style={{ margin: "5% auto", padding: "0 10%" }}>
            {props.markScheme.map(x => (
                <>
                    <h5>{x.title}</h5>
                    {x.points.map(renderSchemePoint)}
                    <br />
                </>
            ))}
        </div>
    );
};

export default MarkScheme;

const Title = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #414142;
    border-radius: 5px;
    height: 35px;
    align-content: center;
    margin: auto;
    width: 100%;
    border-style: none;
    color: white;
`;

const SchemePoint = styled.div`
    text-align: left;
    color: #fad000;
    font-size: 18px;
    margin: 0 5px;
`;

const SchemePointContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;
