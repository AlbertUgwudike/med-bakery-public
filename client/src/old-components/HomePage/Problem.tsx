import { Login, LoginButton } from './LoginLogout';
import styled from 'styled-components';
import { useContext } from 'react';
import MetaContext from '../../MetaContext';
import Logo1 from '../../images/Logo1.png';
import micIcon from '../../images/micIcon.png';
import speaker from '../../images/Speaker.png';
import tickIcon from '../../images/tickIcon.png'
import { Link } from 'react-router-dom';
import { FaVolumeUp } from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';

type ProblemProps = {
    setToken: (tokenId: string) => void;
}

const Problem = (props: ProblemProps) => {

    const { SERVER_URL } = useContext(MetaContext);
    AOS.init();
    AOS.refresh();
    return (
        <div style={{marginTop: "10px", }}>

{/* border: "1px solid #DA9926", */}

                <div style={{display: "flex", flexWrap: 'inherit', flexDirection: "column", alignItems: "center", alignContent: 'center', justifyContent: "center", padding: "5%", marginLeft: "43px",}}>
                
                    <div style={{ display: "flex", flexWrap: 'inherit', flexDirection: "row", alignItems: "center", alignContent: 'center', justifyContent: "center",}}>
                    <Record style={{ alignItems: "center", alignContent: 'center'}}>

                    </Record>

                    <div style={{flexBasis: "80%", color: "#FFFF",}}>
                        <h2 style={{color: '#DA9926'}}>
                        Practice Outloud
                        </h2>
                        <p>
                        The only platform that allows you to practice your OSCE skills under exam conditions in real time. 
                        </p>
                        
                    </div>
                    
                    </div>
                    </div>


           
        </div>
    );
}

export default Problem;

const LandingTitle = styled.div`
    font: 45px Champion;
    line-height: 50px;
    margin: 1x 0;
    aling: left;

    @media (max-width: 600px) { 
        font: 40px Champion;
        line-height: 0px;
        margin: 20px 0;
    }
`
const Record = styled.img`
    height: 186px;
    margin: auto;
    display: flex;
    content: url(${ micIcon });
    scale: 50%;
    @media (max-width: 600px) {
        height: 75px;
        margin: auto;
    }
`
const Speaker = styled.img`
    height: 186px;
    margin: auto;
    display: flex;
    content: url(${ speaker });
    scale: 50%;
    @media (max-width: 600px) {
        height: 75px;
        margin: auto;
    }
`

const TickIcon = styled.img`
    height: 185px;
    margin: auto;
    display: flex;
    content: url(${ tickIcon });
    scale: 50%;
    @media (max-width: 600px) {
        height: 75px;
        margin: auto;
    }
`

const Prompt = styled.div`
    color: #DA9926;
    border: 1px solid grey;
    border-radius: 8px;
    margin: 0.5% 5%; 
    padding: 1% 0;
    &:hover {
        cursor: pointer;
        border: 1px solid #FAD000;
        padding: 65%;
    }
`
const DemoButton = styled.button`
    margin: 5% 5%;
    padding: 0% 15%;
    font-size: 24px;
    border: 1px solid #DA9926;
    border-radius: 8px;
    background-color: #DA9926;
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
`