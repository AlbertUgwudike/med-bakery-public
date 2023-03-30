import { FaSpinner } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

type LoadingScreenProps = {
    message: string;
};

const LoadingScreen = (props: LoadingScreenProps) => {
    return (
        <div style={{ background: "#2f3237", margin: "5%", padding: "5%", display: "flex" }}>
            <h5>{props.message}</h5> &nbsp;&nbsp;&nbsp;
            <Spinner>
                <FaSpinner size={30} />
            </Spinner>
        </div>
    );
};

export default LoadingScreen;

const rotate = keyframes`
from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    -webkit-animation: ${rotate} 2s linear infinite;
    -o-animation: ${rotate} 2s linear infinite;
    animation: ${rotate} 2s linear infinite;
`;
