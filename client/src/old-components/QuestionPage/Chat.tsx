import { useState, useEffect, useContext } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';
import { getEmailFromToken } from '../../functions';
import { FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { Panel } from '../General/Panel';
import MetaContext from '../../MetaContext';

const ChatModal = (props: { questionIdx: number }) => {

    const { darkMode, SERVER_URL, token } = useContext(MetaContext);
    const [chat, updateChat] = useState([] as { email: string, message: string }[]);
    const [email, updateEmail] = useState("");
    const [questionIdxToBeDeleted, updateIdxToBeDeleted] = useState(-1);
    const [userMessage, updateUserMessage] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);

    ReactModal.setAppElement('#root');

    useEffect(() => {
        getEmailFromToken(token).then(email => updateEmail(email!))
    }, [props.questionIdx]);

    useEffect( () => {

        if (props.questionIdx !== -1) {
            axios.post(SERVER_URL + "/questions/getchat", { token, questionIdx: props.questionIdx })
                .then(res => updateChat(res.data))
                .catch(console.log)
        }

    }, [props.questionIdx] )

    const handleDeleteRequest = (idx: number) => {
        setIsOpen(true);
        updateIdxToBeDeleted(idx);
    }

    const deleteSelectedQuestion = () => {
        if (questionIdxToBeDeleted === -1) return;
        const newChat = chat.filter((v, i) => questionIdxToBeDeleted !== i);
        updateChat(newChat);
        submitChat(newChat);
        updateIdxToBeDeleted(-1);
        setIsOpen(false);
    }

    const submitChat = (chat: { email: string, message: string }[]) => {
        axios.post(SERVER_URL + "/questions/updatechat", { token, questionIdx: props.questionIdx, chat: chat })
             .catch(console.log)

        updateUserMessage("");
        
    }

    const handleMessageEntry: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        updateUserMessage(e.target.value)
    }

    const handleSubmitMessage = () => {
        const newChat = [{ email, message: userMessage }].concat(chat)
        updateChat(newChat);
        submitChat(newChat);
        updateUserMessage("");
    }
    
    const renderMessage = (message: {email: string, message: string}, idx: number) => {
        return (
            <div>
                
                {
                    email === message.email
                        ?   <FaTrashAlt color="red" style = {{ marginRight: "10px" }} onClick = { () => handleDeleteRequest(idx) }/>
                        :   <></>
                }

                <span style = {{ marginRight: "10px", color: "#9EA2B1" }}>{ email === message.email ? "you" : "anon" }:</span>
                <span style = {{ color: darkMode ? "white" : "black" }}>{ message.message }</span>

            </div>
        )
    }

    return (
        <Panel darkMode = { darkMode }>

            <div style = {{ display: "flex", alignItems: "center", marginBottom: "20px" }}>

                <div style = {{ font: "30px Champion", marginRight: "20px", display: "inline-block" }}>Chat</div>

                <NewMessageInput 
                    darkMode = { darkMode }
                    value = { userMessage } 
                    onChange = { handleMessageEntry } 
                    placeholder = "What's on your mind..."
                />

                <NewMessageSubmit darkMode = { darkMode } onClick = { handleSubmitMessage }>Submit</NewMessageSubmit>

            </div>

            <ConfirmModal isOpen = {modalIsOpen} onRequestClose = { () => setIsOpen(false) } >
                <div style = {{ textAlign: "center" }}>

                    <div style = {{ color: "white" }}> Delete these messages? </div>

                    <Button onClick = { deleteSelectedQuestion }>Delete</Button>

                    <Button onClick = { () => setIsOpen(false) }>Cancel</Button>

                </div>
            </ConfirmModal>

            <ChatBox darkMode = { darkMode }>
                { chat.map(renderMessage) }
            </ChatBox>

        </Panel>
    );
}

export default ChatModal;

const NewMessageInput = styled.textarea<{ darkMode: boolean }>`
    display: inline-block;
    margin-right: 10px;
    padding-left: 10px;
    vertical-align: bottom;
    width: 70%;
    height: 25px;
    border: none;
    border-bottom: 1px solid grey;
    outline: none;
    background-color: transparent;
    color: ${ props => props.darkMode ? "white" : "black"}
`

const NewMessageSubmit = styled.button<{ darkMode: boolean }>`
    border-radius: 5px;
    border-style: none;
    background-color: #505050;
    margin-left: 25px;
    width: 100px;
    height: 30px;
    color: white;
`

const Button = styled.button`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-style: none;
    background-color: #3B2072;
    width: 100px;
    color: white;
    margin: 10px;
`

const ConfirmModal = styled(ReactModal)`
    background-color: rgb(27, 39, 94);
    margin: 100px auto;
    max-width: 500px;
    height: max-content;
    border-radius: 30px;
    padding: 20px;
    z-index: 1200;
`

const ChatBox = styled.div<{ darkMode: boolean }>`
    width: 100%;
    height: 200px;
    padding: 20px;
    border: 1px solid #80808033;
    border-radius: 5px;
    background-color: transparent;
    color: ${ props => props.darkMode ? "white" : "black" };
    overflow: scroll;
`