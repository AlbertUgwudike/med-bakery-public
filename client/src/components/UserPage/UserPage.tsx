import axios from "../../myaxios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigator from "../Navigator";
import { NullStation, NullStationDetails } from "../OSCEPage/DemoStations/NullStation";
import ProgressPie from "./ProgressPie";
import { useContext, useEffect, useState } from "react";
import MetaContext from "../../MetaContext";
import {
    downloadAssets,
    getBinaryDigits,
    markPercentage,
    populateMarkScheme,
    populateResponseAudios,
    useUserDetails,
} from "../OSCEPage/hooks";
import { AnsweredStationDetails, Station, StationSummary } from "../OSCEPage/types";
import Analysis from "./Analysis";
import OSCEPage from "../OSCEPage/OSCEPage";
import OSCESelector from "../OSCEPage/OSCESelector";
import StationSummaryCard from "../OSCEPage/StationSummaryCard";
import Summary from "../OSCEPage/Summary";
import Header from '/Users/a/Documents/med-bakery-react/client/src/components/HomePage/Header.jsx'
import Header2 from '/Users/a/Documents/med-bakery-react/client/src/components/HomePage//Header2.jsx'
import Navbar from '/Users/a/Documents/med-bakery-react/client/src/components/HomePage//Navbar.jsx'
import WhatisGPT3 from '/Users/a/Documents/med-bakery-react/client/src/components/HomePage/whatisGPT3.jsx'



type UserPageProps = {};

const UserPage = (props: UserPageProps) => {
    const { SERVER_URL, token } = useContext(MetaContext);
    const [{ answeredStations, purchasedOsce }, userLoading] = useUserDetails(SERVER_URL, token);

    const averagePercentage =
        answeredStations.length === 0
            ? 0
            : answeredStations.map(as => markPercentage(as.markCode)).reduce((acc, a) => acc + a) /
              answeredStations.length;

    return (
        <>
            <Navigator selection={"Dashboard"} />

            <Container>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "50px" }}>Welcome Back</div>
                        <br />
                        <Panel>
                            <Title>Average OSCE Score</Title>
                            <ProgressPie percentage={averagePercentage} radius={75} />
                            <Link to="/OSCE">
                            <Button>Practice</Button>
                            </Link>
                        </Panel>
                        <Panel>
                            <Title>Review Last Station</Title>
                            <Link to="/OSCE">
                                <Button>Review</Button>
                            </Link>
                        </Panel>{" "}
                    </div>
                    {/*
                    <div style={{ width: "40%", textAlign: "center" }}>
                        <Panel>
                            <Title>Breakdown</Title>
                            <Analysis answeredOsceDetails={answeredStations} />
                            <Button>Analysis</Button>
                        </Panel>
                    </div> */}
                </div>
            </Container>
        </>
    );
};

export default UserPage;

const Container = styled.div`
    background-color: #2f3237;
    margin: 5%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 10px;
`;

const Panel = styled.div`
    background-color: #1c2124;
    margin-bottom: 10px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
`;

const Title = styled.div`
    margin: 15px 0;
    font-size: 25px;
`;

const Button = styled.button`
    background-color: #FAAD29;
    margin-bottom: 10px;
    padding: 5px;
    border-style: none;
    border-radius: 10px;
    width: 150px;
`;
