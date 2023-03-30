import { Login, Logout } from "../HomePage/LoginLogout";

const ExpiryLoginPage = () => {
    const successCallback = () => {
        window.location.href = "/";
    };

    return (
        <div style={{ textAlign: "center", marginTop: "200px" }}>
            <h3>Please sign in again to refresh your session</h3>
            <Login label="Login" successCallback={successCallback} />
        </div>
    );
};

export default ExpiryLoginPage;
