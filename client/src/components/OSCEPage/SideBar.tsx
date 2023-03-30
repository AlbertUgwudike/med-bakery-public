import { FaCreditCard, FaFootballBall, FaGreaterThan, FaHome, FaLeaf, FaLessThan, FaPhone, FaSearch, FaTimes, FaTree } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import whitelogo from '../../images/whitelogo.svg';

type SideBarProps = {
    toggled: boolean;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>;
    narrowWindow: boolean;
}

const SideBar = (props: SideBarProps) => {

    const renderLink = (path: string, Icon: IconType) => {
        return (
            <Link to = { path }>
                <NavButton darkMode = { true } onClick = { () => props.setToggled(!props.narrowWindow) } >
                    <Icon />
                </NavButton>
            </Link>
        )
    }

    return (
        <Container darkMode = { true } toggled = { props.toggled } >

            {/* ----------------------- Button to collapse the side bar -----------------------*/}
            <Open onClick = { () => props.setToggled(!props.toggled) } toggled = { props.toggled }>
                { props.toggled ? <FaLessThan size = {12} /> : <FaGreaterThan size = {12} /> }
            </Open>
            
            <div style = {{ margin: "auto", width: "max-content" }}>

                {/* -------------------------------- Logo ------------------------------------- */}
                <div style = {{ display: "inline-block", marginTop: "20px" }}>
                    <img 
                        src = { whitelogo }
                        height="60px" style={{ margin: "0px 20px 20px 20px" }} 
                        onClick = { () => props.setToggled(!props.toggled) }
                    /> 
                </div>

                <br></br>
                <br></br>

                { renderLink("/Demo", () => <FaSearch size = {23}/>) }

                <br></br>

                { renderLink("/Demo", () => <FaPhone size = {23}/>) }
                { renderLink("/Demo", () => <FaLeaf size = {23}/>) }
                { renderLink("/Demo", () => <FaFootballBall size = {23}/>) }
                { renderLink("/Demo", () => <FaCreditCard size = {23}/>) }
                { renderLink("/Demo", () => <FaTree size = {23}/>) }

            </div>

        </Container>
    )
}

export default SideBar

const Container = styled.div<{ toggled: boolean, darkMode: boolean }>`
    display: block;
    position: sticky;
    top: 0;
    align-self: flex-start;
    height: 100vh;
    text-align: center;
    width: ${ props => props.toggled ? "80px" : "0" };
    transition: left 0.5s;
    background-color: ${ props => props.darkMode ? "#1f1f1f" : "#f6eeee" };
    transition: width 0.5s;
    white-space: nowrap;
    overflow: hidden;
    z-index: 1000;

    @media (max-width: 600px) {
        position: fixed;
        width: ${ props => props.toggled ? "100%" : "0" };
    }
`

const Exit = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    &:hover {
        cursor: pointer;
    }
`

const NavButton = styled.div<{ darkMode: boolean }>`
    background-color: transparent;
    color: ${ props => props.darkMode ? "white" : "black" };
    width: 100%;
    padding: 10px 20px;
    margin: 0;
    border-style: none;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
`

const Open = styled.div<{ toggled: boolean }>`
    position: fixed;
    background-color: #1f1f1f;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    top: 50%;
    left: ${ props => props.toggled ? "75px" : "0px" };
    padding: 15px 5px;
    align-content: center;
    &:hover {
        cursor: pointer;
    }
    transition: left 0.5s;
`