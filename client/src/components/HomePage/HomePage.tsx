import styled from "styled-components";
import Navigator from "../Navigator";
import { useContext } from "react";
import MetaContext from "../../MetaContext";
import { markPercentage, useUserDetails } from "../OSCEPage/hooks";
import Header from "./Header.jsx";
import Header2 from "./Header2.jsx";
import WhatisGPT3 from "./whatisGPT3.jsx";

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
            <Navigator selection={"Home"} />
                <Header/>
                {/* <WhatisGPT3/> */}
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            
        </>
        
    );
};

export default UserPage;

const Container = styled.div`
    
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
    background-color: #faad29;
    margin-bottom: 10px;
    padding: 5px;
    border-style: none;
    border-radius: 10px;
    width: 150px;
`;
