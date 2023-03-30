import { Link } from 'react-router-dom';
import {Animated} from "react-animated-css";
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import { useContext } from 'react';
import MetaContext from '../../MetaContext';

type ContentCardProps = {
    available: boolean;
    name: string;
    description: string;
    path: string;
    imgsrc: string;
}

const ContentCard = (props: ContentCardProps) => {

    const { darkMode } = useContext(MetaContext);

    const track = () => window.analytics.track({
        userId: "",
        event: `${props.path} clicked`
    });

    return (
        
        <Container>
            {/* <Animated animationIn="zoomIn" animationOut="fadeOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}> */}
            
                <ContentDiv darkMode = { darkMode }>

                    <div style = {{ display: "flex", alignItems: "center" }}>

                        <img src = { props.imgsrc } alt = "pancreas" height = "75px" width = "75px" />

                        <div style = {{ textAlign:  'left', marginLeft: "20px" }}>
                            <div style = {{ font: "37px Champion"}}>{ props.name }</div>
                            <Blurb darkMode = { darkMode }>{ props.description }</Blurb>
                        </div>

                    </div>

                    <div style = {{ height: "5px", backgroundColor: (darkMode ? "#272727" : "#f6f5f0"), marginTop: "20px" }}></div>

                    <Link to={ props.available ? props.path : "/User" } onClick={ track }>
                        <StartButton available = { props.available }>
                            { props.available ? <><FaCheck /> GO!</> : "Coming Soon!" }
                        </StartButton>
                    </Link>
                    
                </ContentDiv>

            {/* </Animated> */}
        </Container>
        
    );
}

export default ContentCard;

const Container = styled.div`
    margin: 20px 0;
    width: 45%;
    minWidth: 300px;
    @media (max-width: 1200px) { width: 100%; margin: 20px 0; }
`

const ContentDiv = styled.div<{ darkMode: boolean }>`
    background-color: ${ props => props.darkMode ? "#1f1f1f" : "#f6e7ff" };
    border: 2.5px solid ${ props => props.darkMode ? "#838383" : "white" };
    box-shadow: ${ props => props.darkMode ? "0px 0px 10px black" : "0px 0px 5px gray" }; 
    text-align: center;
    border-radius: 5px;
    margin: auto;
    padding: 25px 5%;
`

const Blurb = styled.div<{ darkMode: boolean}>`
    display: block;
    font-size: 18px;
    color: ${ props => props.darkMode ? "#ffffff" : "#100A28" };
`

const StartButton = styled.div<{ available: boolean }>`
    text-decoration: none;
    background-color: ${ props => props.available ? "rgba(0, 255, 0, 0.5)" : "rgba(171, 0, 250, 0.5)" };
    color: ${ props => props.available ? "black" : "white" };
    margin: 10px auto;
    padding: 5px 25px;
    border-radius: 20px;
    border: none;
    width: max-content;
`