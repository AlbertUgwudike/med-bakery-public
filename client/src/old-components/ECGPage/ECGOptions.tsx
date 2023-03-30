import { useContext } from 'react';
import styled from 'styled-components';
import MetaContext from '../../MetaContext';

type OptionSection = { label: string, selected: string, correct: string, options: string[] };

type ECGOptionProps = {
    handleOptionChange: (label: string, selected: string) => void;
    section: OptionSection;
}

const ECGOptions = (props: ECGOptionProps) => {

    const { darkMode } = useContext(MetaContext);

    return (
        <Panel darkMode = { darkMode }>
            <Title darkMode = { darkMode }>{ props.section.label }</Title>
            <div style = {{ height: "150px", overflow: "scroll" }}>
            { 
                props.section.options.map(option => 
                    <Option 
                        darkMode = { darkMode }
                        selected = { props.section.selected === option } 
                        onClick = { () => props.handleOptionChange(props.section.label, option) } 
                    >
                        { option }
                    </Option>
                ) 
            }
            </div>
        </Panel>
    );
}

export default ECGOptions;

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

const Option = styled.button<{ darkMode: boolean, selected: boolean }>`
    display: block;
    border-style: none;
    border-radius: 5px;
    margin: 10px 0px;
    width: 100%;
    background-color:  ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : (props.darkMode ? "grey" : "#FBE9EE") };
    color: ${ props => props.selected ? "white" : "black" };
    &:hover {
        background-color: ${ props => props.selected ? "#1C725C" : "#7735FD" };
        color: white;
    }
`