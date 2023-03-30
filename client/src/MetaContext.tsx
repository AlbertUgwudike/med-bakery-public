import React from "react";
const MetaContext = React.createContext<{
    darkMode: boolean;
    narrowWindow: boolean;
    SERVER_URL: string;
    CLIENT_URL: string;
    token: string;
    setToken: (userToken: string) => void;
}>({
    darkMode: true,
    SERVER_URL: "",
    CLIENT_URL: "",
    token: "",
    setToken: u => {},
    narrowWindow: false,
});
export const ThingsProvider = MetaContext.Provider;
export default MetaContext;
