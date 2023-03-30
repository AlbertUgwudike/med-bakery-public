import axios from "axios";
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import MetaContext from "../../MetaContext";
import { Login } from "../HomePage/LoginLogout";
import { Box } from "../OSCEPage/Common";
import LoadingScreen from "../OSCEPage/LoadingScreen";
import heart from "../OSCEPage/media/heart.png";

type ChekoutProps = {};

const Chekout = (props: ChekoutProps) => {
    const { SERVER_URL, CLIENT_URL, token } = useContext(MetaContext);
    const history = useHistory();
    const [handlingCheckout, updateHandlingCheckout] = useState(false);

    const handleCheckout = async (t: string) => {
        updateHandlingCheckout(true);
        try {
            const { purchasedOsce } = (
                await axios.post(SERVER_URL + "/user/osce_details", { token: t })
            ).data;

            if (purchasedOsce) return history.push("/OSCE");

            const checkoutUrl = (
                await axios.post(SERVER_URL + "/pay/create-checkout-session", {
                    cancel_url: CLIENT_URL + "/Subscribe/PaymentCanceled",
                    success_url: CLIENT_URL + "/Subscribe/PaymentSuccess",
                    token: t,
                })
            ).data;

            window.location.href = checkoutUrl;
        } catch (err) {
            console.log(err);
        }
        updateHandlingCheckout(false);
    };

    return handlingCheckout ? (
        <LoadingScreen message="Please wait" />
    ) : (
        <div style={{ background: "#2f3237", margin: "5%", padding: "5%", textAlign: "center" }}>
            <div
                style={{
                    display: "flex",
                    margin: "20px auto",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div style={{ margin: "10px" }}>
                    <img src={heart} height={100} />
                </div>
                <div>
                    <div style={{ fontSize: "25px" }}> Unlock Premium Stations </div>
                    <div style={{ fontSize: "15px" }}> Only £45 per year </div>
                </div>
            </div>

            {token ? (
                <CheckoutButton
                    color="#FAD000"
                    minWidth={300}
                    onClick={() => handleCheckout(token)}
                >
                    Unlock the greatness
                </CheckoutButton>
            ) : (
                <span onClick={() => updateHandlingCheckout(true)}>
                    <Login label="Unlock the greatness" successCallback={t => handleCheckout(t)} />
                </span>
            )}
        </div>
    );
};

export default Chekout;

const CheckoutButton = styled.button<{ color: string; minWidth: number }>`
    display: block;
    margin: auto;
    border-style: none;
    border: 2px solid ${props => props.color};
    background-color: transparent;
    color: ${props => props.color};
    border-radius: 5px;
    padding: 5px;
    min-width: ${props => props.minWidth}px;
    &:hover {
        background-color: ${props => props.color};
        color: black;
    }
`;
