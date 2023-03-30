
import Header from './Header.jsx'
import Header2 from './Header2.jsx'
import Navbar from './Navbar.jsx'
import WhatisGPT3 from './whatisGPT3.jsx'
import styled from "styled-components";
import { Link } from "react-router-dom";


type HomePageProps = {}

const HomePage = (props: HomePageProps) => {

    return (
        <div>
            
            <div style = {{ padding: "2%", maxWidth: "1400px", margin: "auto"  }}>
                <Navbar/>
                <Header/>
                <hr style = {{ marginBottom: "75px"}}/>
                <Header2/>
                <WhatisGPT3/>
                <div style={{ scale: '200%', width: "100%", textAlign: "center", justifyContent: "flex-start" }}>
                    <Link to="/OSCE">
                        <DemoButton> Let me in! </DemoButton>
                    </Link>
                </div>
            </div> 

            <div style = {{ height: "50px" }} />
            
        </div>
    );
}

export default HomePage;

const DemoButton = styled.button`
    margin: 5% 5%;
    width: 200px;
    font-size: 24px;
    border: 1px solid #da9926;
    border-radius: 8px;
    background-color: #da9926;
    color: #000000;
    &:hover {
        drop-shadow: 2px;
        border: 1px solid black;
    }

    @media (max-width: 600px) {
        height: 40px;
        width: 150px;
        font-size: 15px;
    }
`;