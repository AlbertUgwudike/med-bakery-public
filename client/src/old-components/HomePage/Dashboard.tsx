import { Login, LoginButton } from './LoginLogout';
import styled from 'styled-components';
import { useContext } from 'react';
import MetaContext from '../../MetaContext';
import whitelogo from '../../images/whitelogo.svg';
import intestine from '../../images/Intestine.png';
import { Link } from 'react-router-dom';
import { FaVolumeUp } from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';

type DashboardProps = {
    setToken: (tokenId: string) => void;
}

const Dashboard = (props: DashboardProps) => {

    const { SERVER_URL } = useContext(MetaContext);
    AOS.init();
    AOS.refresh();
    return (

        <div>

            <div style = {{ padding: "5%", display: "flex", flexWrap: 'revert', justifyContent: "center", alignItems: "center" }}> 

                {/* <div style = {{ margin: "0 2.5%" }}>
                    <Logo />
                </div>  */}
     

            <div style = {{ maxWidth: "300px", margin: "0 20px" }}>
                <Logo/>
            </div>

            <div style={{display: "flex", flexWrap: 'wrap', flexDirection: "row", alignItems: "center", alignContent: 'center', justifyContent: "center", padding: "5%", minWidth: 0, minHeight: 0,}}>
                
            <div style={{display: "flex", flexWrap: 'inherit', alignItems: "center", alignContent: 'center', justifyContent: "center", minWidth: 0, minHeight: 0,}}>
                <div style={{ display: "flex", justifyContent: 'left', flexWrap: 'wrap'}}>

                <div style={{}} data-aos="zoom-in-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <Logo style={{ textAlign:"left", alignItems: "inherit"}}/>
                </div>

                <div data-aos="fade-up-left" data-aos-offset="300" data-aos-easing="ease-in-sine" style = {{  display: "flex", flexFlow: "column", justifyContent: "center", flexShrink:2}}>

                        <div>
                        <LandingTitle> <span style = {{ color: "#00000", textAlign:"left", justifyContent: "center", alignItems: "left", padding: "25px",}}>MedBakery</span> </LandingTitle>
                        </div>

                        <div>
                        <Prompt style = {{ width: "100%", padding: "5px 15px", textAlign: "left", justifyContent: "center",}} >
                        <FaVolumeUp style={{marginRight: "8px", marginTop:"1px", marginBottom: "3.5px"}} />
                        A freshly baked platform created to  help you pass medical exams

                        </Prompt>
                        </div> 
                        <div style={{ width: "100%", textAlign: "left", justifyContent: "left",}}>
                        <Link to = "/OSCE">
                            <DemoButton> Get Started </DemoButton>
                        </Link>
                        </div>
                </div>
                </div>

            </div>
                
            </div>

        </div>

        </div>
    );
}

export default Dashboard;

const LandingTitle = styled.div`
    font: 40px Champion;
    line-height: 100px;
    margin: 1x 0;
    aling: left;

    @media (max-width: 400px) { 
        font: 40px Champion;
        line-height: 0px;
        margin: 20px 0;
    }
`
const Logo = styled.img` 
    height: 200px;
    margin: auto;
    display: flex;
    min-width: auto;
    content: url(${ intestine });
    @media (max-width: 600px) {
        scale: 50%;
    }
`
const Prompt = styled.div`
    color: #DA9926;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 0 10px;
    &:hover {
        cursor: pointer;
        border: 1px solid #FAD000;
    }
`
const DemoButton = styled.button`
    width: 200px;
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

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction:row};
  img {
    width: 80%;
  }
  & > div {
    flex: 1;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  & > div,
  & > ul {
    flex: 1;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`
const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`
const Side = styled.button`
  border-radius: 50px;
  border: none;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  }
`
