import loadinggif from "./media/loading.gif";

const LoadingOverlay = () => (
    <div
        style={{
            margin: "auto",
            textAlign: "center",
            padding: "100px 0",
            backgroundColor: "#131418",
            height: "100vh",
        }}
    >
        <h1>Pre-heating the oven</h1>
        <img src={loadinggif} style={{ width: "50%" }} />
    </div>
);

export default LoadingOverlay;
