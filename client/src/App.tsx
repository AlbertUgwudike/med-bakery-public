import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useToken, useWindowSize } from "./functions";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import MetaContext from "./MetaContext";
import OSCEPage from "./components/OSCEPage/OSCEPage";
import ExpiryLoginPage from "./components/ExpiryLoginPage/ExpiryLoginPage";
import SubscribePage from "./components/SubscribePage/SubscribePage";
import UserPage from "./components/UserPage/UserPage";
import Data from "./components/Data Interp/Data";
import DataInterpPage from "./components/DataInterpPage/DataInterpPage";

const App = () => {
    const { token, setToken } = useToken();
    const [darkMode, setDarkMode] = useState(true); //initialise darkMode
    const [w, _] = useWindowSize();

    const narrowWindow = w < 650;

    // if we're on local host (development) then change url accordingly
    let SERVER_URL = "";
    let CLIENT_URL = "";

    if (window.location.href.startsWith("http://localhost:3000/")) {
        SERVER_URL = "http://localhost:3001";
        CLIENT_URL = "http://localhost:3000";
    }

    if (window.location.href.startsWith("https://medbakery.co.uk")) {
        SERVER_URL = "https://medbakery.co.uk";
        CLIENT_URL = "https://medbakery.co.uk";
    }

    const history = createBrowserHistory();

    let prevPath: any = null;

    // listen and notify Segment of client-side page updates
    history.listen(location => {
        if (location.pathname !== prevPath) {
            prevPath = location.pathname;
            window.analytics.page();
        }
    });

    return (
        <Container darkMode={darkMode}>
            <Router>
                <Switch>
                    <MetaContext.Provider
                        value={{ darkMode, SERVER_URL, CLIENT_URL, token, setToken, narrowWindow }}
                    >
                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        <Route exact path="/User">
                            <UserPage />
                        </Route>

                        <Route path="/OSCE">
                            <OSCEPage />
                        </Route>

                        <Route path="/DataInterpretation">
                            <DataInterpPage />
                        </Route>

                        <Route path="/Subscribe">
                            <SubscribePage />
                        </Route>

                        <Route path="/ExpiryLogin">
                            <ExpiryLoginPage />
                        </Route>
                    </MetaContext.Provider>
                </Switch>
            </Router>
        </Container>
    );
};

export default App;

const Container = styled.div<{ darkMode: boolean }>`
    color: ${props => (props.darkMode ? "white" : "black")};
    fill: ${props => (props.darkMode ? "#0072CE" : "#C02222")};
    font-family: Proxima;
`;

const Background = styled.div<{ darkMode: boolean; backlogodark: string; backlogolight: string }>`
    background-color: ${props => (props.darkMode ? "#272727" : "#ffffff")};
    background-image: url(${props => (props.darkMode ? props.backlogodark : props.backlogolight)});
    background-size: 9%;
    background-attachment: fixed;
    position: fixed;
    filter: blur(0px);
    color: ${props => (props.darkMode ? "white" : "black")};
    fill: ${props => (props.darkMode ? "#0072CE" : "#C02222")};
    font-family: Proxima;
    height: 100vh;
    width: 100%;
    z-index: -1;
`;
