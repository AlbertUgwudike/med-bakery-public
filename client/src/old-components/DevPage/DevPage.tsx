import { Container } from "../General/Container";
import styled from 'styled-components';
import axios from "axios";
import BackButton from "../General/BackButton";
import { useContext, useState } from "react";
import { FaBaby, FaBreadSlice, FaCheck, FaCross } from "react-icons/fa";
import MetaContext from "../../MetaContext";

type StateKey = "uploadQuestionsAndPoints" | "updatetextbook" | "downloadUsers" | "downloadProducts" | "uploadProducts" | "uploadUsers" | "homepageQuestion";
type StateValue = "complete" | "pending" | "failed"
type StateType = { [Key in StateKey]: StateValue }

type ButtonInfo = { stateKey: StateKey, title: string }


const DevPage = () => {
    const { token, darkMode, SERVER_URL } = useContext(MetaContext);
    const [downloadState, updateDownloadState] = useState({
        uploadQuestionsAndPoints: "complete",
        updatetextbook: "complete",
        downloadUsers: "complete",
        downloadProducts: "complete",
        uploadProducts: "complete",
        uploadUsers: "complete",
        homepageQuestion: "complete"
    } as StateType)

    console.log(downloadState)

    const devFunc = (stateKey: StateKey) => {

        updateDownloadState({ ...downloadState, [stateKey]: "pending" })

        axios.post(SERVER_URL + "/dev/" + stateKey, { token })
             .then(res => {
                 if (res.data.success) updateDownloadState({ ...downloadState, [stateKey]: "complete" });
                 else {
                    updateDownloadState({ ...downloadState, [stateKey]: "failed" });
                    console.log(res.data.error)
                 }
             })
    }

    const buttons: ButtonInfo[] = [
        { stateKey: "updatetextbook", title: "UploadTextBook" },
        { stateKey: "uploadQuestionsAndPoints", title: "UploadQuestions" },
        { stateKey: "downloadUsers", title: "Download Users to Server" },
        { stateKey: "downloadProducts", title: "Download Products to Server" },
        { stateKey: "uploadProducts", title: "Upload Products from Server" },
        { stateKey: "uploadUsers", title: "Upload Users from Server" },
        { stateKey: "homepageQuestion", title: "Download Example Question" },
    ]

    return (
        <Container>

            <BackButton darkMode = { darkMode } path = "/User" label = "Home" />

            <div style = {{ padding: "100px 0px" }} >
            { 
                buttons.map(({ stateKey, title }) => 
                    <OptionButton darkMode = { darkMode } selected = { false } onClick = { () => devFunc(stateKey) }>
                        { title }
                        { downloadState[stateKey] === "complete" ? <FaCheck /> : (downloadState[stateKey] === "failed" ? <FaCross /> : <FaBreadSlice />) }
                    </OptionButton>
                ) 
            }
            </div>

        </Container>
    )
}

export default DevPage

const OptionButton = styled.button<{ darkMode: boolean, selected: boolean }>`
    display: flex;
    justify-content: space-between;
    width: 60%;
    min-width: 275px;
    background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : ( props.darkMode ? "#1B275E" : "#F6F5F0" ) };
    color: ${ props => props.darkMode ? "white" : "black" };
    margin: 10px auto 15px auto;
    padding: 10px 20px;
    font:  35px Proxima;
    text-align: left;
    border-radius: 10px;
    border-style: none;
    &:hover {
        background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : (props.darkMode ? "#7735FD" : "#FBE9EE") };
    }
`