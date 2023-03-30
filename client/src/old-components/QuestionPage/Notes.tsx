import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { Panel } from '../General/Panel';
import MetaContext from '../../MetaContext';

const Notes = (props: { questionIdx: number }) => {

    const { darkMode, SERVER_URL, token } = useContext(MetaContext);
    const [notes, updateNotes] = useState("");
    const [editMode, updateEditMode] = useState(false);

    useEffect( () => {

        // incase we're on the default question
        if (props.questionIdx !== -1) {
            axios.post(SERVER_URL + "/questions/getnotes", { token, questionIdx: props.questionIdx })
             .then(res => updateNotes(res.data))
        }

    }, [props.questionIdx] )

    const handleEdit: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        updateNotes(e.target.value);
    }

    const submitNotes = () => {
        axios.post(SERVER_URL + "/questions/updatenotes", { token, questionIdx: props.questionIdx, notes: notes });
        updateEditMode(false);
    }

    return (
        <Panel darkMode = { darkMode } style = {{ height: "max-content" }}>

            <div style = {{ display: "flex", alignItems: "center", marginBottom: "20px" }}>

                <div style = {{ font: "30px Champion" }}>Notes</div>

                {
                    editMode 
                        ?   <Button onClick = { submitNotes } > Save </Button>
                        :   <Button onClick = { () => updateEditMode(true)}> Edit </Button>
                }

            </div>

            { 
                editMode 
                    ? <TextArea darkMode = { darkMode } value = { notes } onChange = { handleEdit } />
                    : <TextArea darkMode = { darkMode } value = { notes } readOnly onClick = { () => updateEditMode(true) } />
            }

        </Panel>
    );
}

export default Notes;

const Button = styled.button`
    border-radius: 5px;
    border-style: none;
    background-color: #505050;
    margin-left: 25px;
    width: 100px;
    height: 30px;
    color: white;
`

const TextArea = styled.textarea<{ darkMode: boolean }>`
    width: 100%;
    height: 100px;
    padding: 20px;
    border: 1px solid #80808033;
    border-radius: 5px;
    background-color: transparent;
    color: ${ props => props.darkMode ? "white" : "black" };
`
