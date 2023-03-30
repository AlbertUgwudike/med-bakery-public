import { props } from "ramda";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heart from "../OSCEPage/media/heart.png";
import { Login, LoginButton } from "../HomePage/LoginLogout";
import { Question, Station } from "./types";

type SaveModalProps = {
    close: () => void;
    handleExit: (questions: Question[], tok: string) => void;
    station: Station;
};

const SaveModal = (props: SaveModalProps) => {
    return (
        <OverLay onClick={props.close}>
            <Modal>
                <div style={{ margin: "20px 10px" }}>
                    <img src={heart} height={100} />
                </div>

                <div style={{ textAlign: "center" }}>
                    <Link to="/OSCE">
                        <LoginButton style = {{backgroundColor: "#1c2124", color: "#DCDCDC",}}>I don't want to save</LoginButton>
                    </Link>
                    <Login 
                        label={"Save my progress!"}
                        successCallback={t => props.handleExit(props.station.questions, t)}
                    />
                </div>
            </Modal>
        </OverLay>
    );
};

export default SaveModal;

const OverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
    z-index: 2000;
`;

const Modal = styled.div`
    border-radius: 10px;
    position: absolute;
    top: 200px;
    left: 12.5vw;
    background-color: #1c2124;
    height: 250px;
    width: 75vw;
`;
