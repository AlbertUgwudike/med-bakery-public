import { Link } from "react-router-dom";
import styled from "styled-components";

type PaymentAfterMathProps = {
    message: string;
};

const PaymentAfterMath = (props: PaymentAfterMathProps) => {
    return (
        <div>
            <br /> <br />
            <div style={{ textAlign: "center" }}>
                <h3>{props.message}</h3>
                <br />
                <Link to="/OSCE">
                    <CheckoutButton color="#FAD000" minWidth={300}>
                        Return Home
                    </CheckoutButton>
                </Link>
            </div>
        </div>
    );
};

export default PaymentAfterMath;

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
