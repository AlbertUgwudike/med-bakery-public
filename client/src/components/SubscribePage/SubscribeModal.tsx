import { props } from "ramda";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import heart from "../OSCEPage/media/heart.png";

type SubcribeModalProps = {
    close: () => void;
};

const SubscribeModal = (props: SubcribeModalProps) => {
    return (
        <OverLay onClick={props.close}>
            <Modal>
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
                        <div style={{ fontSize: "15px" }}> Only £45 per year  </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button style = {{backgroundColor: "#1c2124", color: "#DCDCDC",}} onClick={props.close}>Maybe Later</Button>
                    <Link to="/Subscribe/Checkout">
                        <Button style = {{backgroundColor: "#da9926", color: "#000000",}}>Buy Now</Button>
                    </Link>
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        margin: "10px",
                        cursor: "pointer",
                    }}
                    onClick={props.close}
                >
                    <FaTimes size={20} />
                </div>
            </Modal>
        </OverLay>
    );
};

export default SubscribeModal;

const OverLay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    width: 100vw;
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

const Button = styled.button`
    background-color: #fad000;
    border-radius: 5px;
    border-style: none;
    height: 35px;
    width: 100px;
    margin: 10px;
`;
