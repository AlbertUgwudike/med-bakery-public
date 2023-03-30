import { useContext } from 'react';
import styled from 'styled-components';
import MetaContext from '../../MetaContext';

type OptionSection = { label: string, selected: string, correct: string, options: string[] };

type ECGOptionProps = {
    handleOptionChange: (label: string, selected: string) => void;
    section: OptionSection;
}

const ECGAnsweredOptions = (props: ECGOptionProps) => {
    const { darkMode } = useContext(MetaContext);

    return (
        <Panel darkMode = { darkMode }>
            <Title darkMode = { darkMode }>{ props.section.label }</Title>
            <div style = {{ height: "150px", overflow: "scroll" }}>
            { 
                props.section.options.map(option => {

                    let backgroundColor = darkMode ? "grey" : "#FBE9EE";
                    if (option === props.section.correct) backgroundColor = "#1C725C";
                    else if (option === props.section.selected) backgroundColor = "#A94D53";

                    return(
                        <Option 
                            style = {{ backgroundColor, color: !["grey", "#FBE9EE"].includes(backgroundColor) ? "white" : "black" }} 
                        >
                            { option }
                        </Option>
                    )
                }) 
            }
            </div>
        </Panel>
    );
}

export default ECGAnsweredOptions;

const Panel = styled.div<{ darkMode: boolean }>`
    display: inline-block;
    background-color: ${ props => props.darkMode ? "#1f1f1f" : "#f6f5f0" };
    border: 2.5px solid ${ props => props.darkMode ? "#838383" : "white" };
    box-shadow: ${ props => props.darkMode ? "0px 0px 10px black" : "0px 0px 5px gray" };
    border-radius: 5px;
    padding: 10px; 
    margin: 10px;
    width: 250px;
    height: 250px;
`

const Title = styled.div<{ darkMode: boolean }>`
    font: 30px Champion;
    text-align: center;
    padding: 20px;
`

const Option = styled.div`
    border-style: none;
    border-radius: 5px;
    margin: 10px 0px;
    width: 100%;
`