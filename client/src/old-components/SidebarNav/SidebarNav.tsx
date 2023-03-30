import { FaHome,FaHeartbeat, FaSun, FaMoon, FaFlagCheckered, FaEquals, FaSkullCrossbones, FaTimes, FaArrowUp, FaArrowDown, FaBone } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import blacklogo from '../../images/blacklogo.svg';
import whitelogo from '../../images/whitelogo.svg';
import { Link } from 'react-router-dom';
import { Logout } from '../HomePage/LoginLogout';
import styled from 'styled-components';
import { getEmailFromToken } from '../../functions';
import { IconType } from 'react-icons/lib';
import MetaContext from '../../MetaContext';

type SidebarNavProps = {
    setToken: (userToken: string) => void;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    toggled: boolean;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>;
    narrowWindow: boolean;
}

const SidebarNav = (props: SidebarNavProps) => {

    const { darkMode, token, SERVER_URL } = useContext(MetaContext)
    const [masterUser, updateMasterUser] = useState(false);
    const [finalsDropDown, updateFinalsDropDown] = useState(false);

    useEffect(() => {
        // determine whether the "master user" (me hehe) is logged in; allows access to dev controls
        getEmailFromToken(token).then(email => updateMasterUser(email === "albertu98@googlemail.com"));
    }, []);

    const renderLink = (path: string, Icon: IconType, label: string) => {
        return (
            <Link to = { path }>
                <NavButton darkMode = { darkMode } onClick = { () => props.setToggled(!props.narrowWindow) } > 
                    <Icon  /> &nbsp; { label } &nbsp; 
                </NavButton>
            </Link>
        )
    }
    
    return (
        <Container darkMode = { darkMode } toggled = { props.toggled } >

            {/* ----------------------- Button to collapse the side bar -----------------------*/}
            <Exit onClick = { () => props.setToggled(false) }>
                <FaTimes />
            </Exit>
            
            <div style = {{ margin: "auto", width: "max-content" }}>

                {/* -------------------------------- Logo ------------------------------------- */}
                <div style = {{ display: "inline-block", marginTop: "50px" }}>
                    <img 
                        src = { darkMode ? whitelogo : blacklogo } 
                        height="80px" style={{ margin: "20px" }} 
                        onClick = { () => props.setToggled(!props.toggled) }
                    /> 
                </div>

                {/* --------------------------- sidebar home button --------------------------- */}
                { renderLink("/User", FaHome, "Home") }

                {/* --------------------------- theme toggle button --------------------------- */}
                <NavButton darkMode = { darkMode } onClick = { () => props.setDarkMode(!darkMode) }> 
                    { darkMode ? <FaSun /> : <FaMoon /> } &nbsp; Theme &nbsp;
                </NavButton>
                
                {/* ----------------------- sidebar finals page button ------------------------ */}
                <NavButton darkMode = { darkMode } onClick = { () => updateFinalsDropDown(!finalsDropDown) }> 
                    <FaFlagCheckered /> &nbsp; Finals &nbsp; { finalsDropDown ? <FaArrowUp /> : <FaArrowDown /> }
                </NavButton>

                {/* ---------------------- sidebar finals drop down menu ---------------------- */}
                <DropDown darkMode = { darkMode } dropped = { finalsDropDown }>
                    { renderLink("/User/Finals", () => <></>, "Selector") }
                    { renderLink("/User/Finals/LastSession", () => <></>, "Previous") }
                    { renderLink("/User/Finals/TextBook", () => <></>, "Text Book") }
                    { renderLink("/User/Finals/LearningPoints", () => <></>, "Learning") }
                </DropDown>

                {/* -------------------- sidebar ECG and Anatomy Page buttons ------------------ */}
                { renderLink("/User/ECG", FaHeartbeat, "ECGs") }
                { renderLink("/User/Anatomy", FaBone, "Anatomy") }

                {
                    // Allow access to dev page if master user is logged in and 
                    // we're using the developemnt server

                    masterUser && SERVER_URL === "http://localhost:3001"
                        ?   renderLink("/User/Dev", FaSkullCrossbones, "Dev")
                        :   <></>
                }

                {/* --------------------------- Sidebar logout utton --------------------------- */}
                <Logout darkMode = { darkMode } setToken = { props.setToken } />

            </div>

        </Container>
    )
}

export default SidebarNav;

const Container = styled.div<{ toggled: boolean, darkMode: boolean }>`
    display: block;
    position: sticky;
    top: 0;
    align-self: flex-start;
    height: 100vh;
    text-align: center;
    width: ${ props => props.toggled ? "150px" : "0" };
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
    text-align: left;
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

const DropDown = styled.div<{ darkMode: boolean, dropped: boolean}>`
    display: block;
    background-color: ${ props => props.darkMode ? "black" : "white" };
    margin: 0;
    padding: 0;
    height: ${ props => props.dropped ? "175px" : "0" };
    overflow: hidden;
    transition: height 0.5s;
`