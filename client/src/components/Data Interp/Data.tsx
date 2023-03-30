import axios from "../../myaxios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigator from "../Navigator";
import { NullStation, NullStationDetails } from "../OSCEPage/DemoStations/NullStation";
import { ReactChild, ReactFragment, ReactPortal, useContext, useEffect, useState } from "react";
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
import Pneumothorax from "../../Media/Pneumothorax.png";
import content from "./Content/example.json";
import Test from "./Test";
import data from "./data.json";
import { Url } from "url";

type DataProps = {
    // station: Station;
    // questionIdx: number;
    // title: string;
    // body: string;
    // caption: string;
    // image: Url;
    // content: Object[];
};

const Data = (props: DataProps) => {
    const { SERVER_URL, token } = useContext(MetaContext);
    const [{ answeredStations, purchasedOsce }, userLoading] = useUserDetails(SERVER_URL, token);

    const averagePercentage =
        answeredStations.length === 0
            ? 0
            : answeredStations.map(as => markPercentage(as.markCode)).reduce((acc, a) => acc + a) /
              answeredStations.length;

    return (
        <>
            <Navigator selection={"Data Interpretation"} />

            <Container>
                <Container2
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box style={{ overflow: "scroll", width: "66vh" }}>
                        <Title
                            style={{ padding: "10px", fontFamily: "Jakarta", lineHeight: "-12%" }}
                        >
                            {data &&
                                data.map(postData => {
                                    console.log(postData);
                                    return <div>{postData.title}</div>;
                                })}
                        </Title>

                        <Image
                            style={{
                                display: "flex",
                                alignItems: "center",
                                height: "49vh",
                            }}
                        >
                            {data &&
                                data.map(postData => {
                                    console.log(postData);

                                    const ImageSquare = () => {
                                        const path = postData.image;

                                        return <img src={require(path)} />;
                                    };

                                    return <Img>{ImageSquare}</Img>;
                                })}
                        </Image>

                        {/* <img src={require("../Pneumothorax.png")} alt="" /> */}

                        <Caption>
                            <div style={{ padding: "10px" }}>
                                {data &&
                                    data.map(postData => {
                                        console.log(postData);
                                        return <div>{postData.body}</div>;
                                    })}
                            </div>
                        </Caption>
                    </Box>

                    <Test />

                    {}
                </Container2>
            </Container>
        </>
    );
};

export default Data;

const Container = styled.div`
    background-color: #FFFF;
    margin: 5%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 10px;
`;

const Container2 = styled.div`
    background-color: #1d1d1f;
    margin: 5%;
    padding: 5%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 10px;
`;

const Title = styled.div`
    margin: 15px 40px;
    font-size: 30px;
    background-color: #454752;
    border-radius: 4px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    word-wrap: break-word;
`;

const Image = styled.div`
    margin: 15px 60px;
    font-size: 25px;
    border-radius: 4px;
`;

const Caption = styled.div`
    margin: 15px 40px;
    font-size: 25px;
    background-color: #454752;
    border-radius: 4px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const Box = styled.div`
    margin: 15px 30px;
    background-color: #303237;
    padding: 10px;
    border-radius: 10px;
    flex-flow: column;
`;

const Img = styled.div`
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    transition: width 0.2s;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
