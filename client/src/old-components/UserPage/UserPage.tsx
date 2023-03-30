import SidebarNav from '../SidebarNav/SidebarNav';
import { Route, Switch, Redirect } from 'react-router-dom';
import ECGPage from '../ECGPage/ECGPage';
import ProductsPage from './ProductsPage';
import FinalsRouter from '../FinalsPage/FinalsRouter';
import DevPage from '../DevPage/DevPage';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { FaEquals } from 'react-icons/fa';
import { useWindowSize } from '../../functions';
import { Container } from '../General/Container';
import { AnatomyPage } from '../AnatomyPage/AnatomyPage';
import MetaContext from '../../MetaContext';

type UserPageProps = {
    setToken: (userToken: string) => void;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserPage = (props: UserPageProps) => {
    const { token } = useContext(MetaContext)
    const [width,  _] = useWindowSize();                     // custom hook enabling us to 
    const narrowWindow = width < 600;                        // determine the default status
    const [toggled, setToggled] = useState(!narrowWindow);   // of the menu bar

    // invalid token? logout
    if (!token) return <Redirect to = "/" />

    return (
        <div style = {{ marginTop: 0, display: 'flex', backgroundColor: "transparent" }} >

            <Open onClick = { () => setToggled(!toggled) }>
                <FaEquals />
            </Open>

            <SidebarNav 
                setToken = { props.setToken } 
                setDarkMode = { props.setDarkMode } 
                toggled = { toggled }
                setToggled = { setToggled }
                narrowWindow = { narrowWindow }
            />

            <Container>
                <Switch>
                    <Route exact path = "/User" component = { ProductsPage } />
                    <Route path = "/User/Finals" component = { FinalsRouter } />
                    <Route path = "/User/ECG" component = { ECGPage } />
                    <Route path = "/User/Anatomy" component = { AnatomyPage } />
                    <Route path = "/User/Dev" component = { DevPage } />
                </Switch>
            </Container>

        </div>
    );
}

export default UserPage;

const Open = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 10px;
    &:hover {
        cursor: pointer;
    }
`