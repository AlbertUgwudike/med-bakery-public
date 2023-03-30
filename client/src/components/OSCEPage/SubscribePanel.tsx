import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MetaContext from "../../MetaContext";
import heart from "./media/heart.png";

const SubscribePanel = () => {
    const { token } = useContext(MetaContext);
    return (
        <Panel>
            <div style={{ margin: "20px" }}>
                <img src={heart} width="60pc" />
            </div>
            <div style={{ padding: "5px", textAlign: "left" }}>
                <h5>Get full access!</h5>
                <div>Unlimited access for £1</div>
                {token ? (
                    <Link to="/OSCE/Subscribe">
                        <StartOrReview>Purchase</StartOrReview>
                    </Link>
                ) : (
                    <StartOrReview>Sign in!</StartOrReview>
                )}
            </div>
        </Panel>
    );
};

export default SubscribePanel;

const Panel = styled.div`
    display: flex;
    align-items: center;
    background-color: #1c2124;
    color: white;
    border-style: none;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
`;

const StartOrReview = styled.button`
    text-align: center;
    margin: 5px 10px 5px 0;
    border-radius: 25px;
    padding: 0 10px;
    height: 30px;
    border: 2px solid grey;
    color: #fad000;
    background-color: transparent;
`;
