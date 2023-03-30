import {
    GoogleLogin,
    GoogleLoginResponse,
    GoogleLoginResponseOffline,
    GoogleLogout,
} from "react-google-login";
import axios from "../../myaxios";
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import MetaContext from "../../MetaContext";

const clientID = "439563851182-mo2cj9djg7f0u19ctnjp1864tdaredkc.apps.googleusercontent.com";

type LoginProps = {
    label: string;
    successCallback?: (token: string) => void;
};

export const Login = (props: LoginProps) => {
    const { SERVER_URL, setToken } = useContext(MetaContext);

    const onSuccess = (res: any) => {
        axios.post(SERVER_URL + "/user/googlelogin", { token: res.tokenId }).then(axres => {
            if (axres.data.success) {
                setToken(res.tokenId);
                if (props.successCallback) props.successCallback(res.tokenId);
            }
        });
    };

    const onFailure = (res: any) => {
        console.log("err: ", res);
    };

    return (
        <GoogleLogin
            clientId={clientID}
            buttonText="LOGIN"
            onSuccess={onSuccess}
            onFailure={onFailure}
            isSignedIn={true}
            render={propss => (
                <LoginButton onClick={propss.onClick} disabled={propss.disabled} id="loginboi">
                    <div>{props.label}</div>
                </LoginButton>
            )}
        />
    );
};

export const LoginButton = styled.button`
    text-align: center;
    margin: 10px 10%;
    border-radius: 25px;
    padding: 0 50px;
    height: 30px;
    border: 2px solid grey;
    color: #fad000;
    background-color: transparent;
`;

export const Logout = (props: { setToken: (userToken: string) => void; darkMode: boolean }) => {
    const { darkMode } = useContext(MetaContext);

    const onSuccess = () => {
        console.log("we logged out!");
        props.setToken("");
        window.analytics.track({
            userId: clientID,
            event: "User Logged out",
        });
    };

    return (
        <GoogleLogout
            clientId={clientID}
            buttonText="LOGOUT"
            onLogoutSuccess={onSuccess}
            render={prps => (
                <LogoutButton darkMode={darkMode} onClick={prps.onClick} disabled={prps.disabled}>
                    <FaSignOutAlt /> &nbsp; Logout &nbsp;
                </LogoutButton>
            )}
        />
    );
};

const LogoutButton = styled.button<{ darkMode: boolean }>`
    text-align: center;
    margin: 30px 10%;
    border-radius: 25px;
    width: 150px;
    height: 30px;
    border: 2px solid grey;
    color: #fad000;
    background-color: transparent;
`;
