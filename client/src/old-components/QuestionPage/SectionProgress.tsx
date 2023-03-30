import { useContext } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled from 'styled-components';
import MetaContext from "../../MetaContext";

type SectionProgressProps = {
    updateSectionIdx: React.Dispatch<React.SetStateAction<number>>;
    canProgressSection: boolean;
    canRetreatSection: boolean;
    renderBackButton: boolean;
    saveAndProgress: () => void;
    canSaveAndProgress: boolean;
}

const SectionProgress = (props: SectionProgressProps) => {

    const { darkMode, SERVER_URL, token } = useContext(MetaContext);
    const forwardButtonFunc = props.canProgressSection ? () => props.updateSectionIdx(i => i + 1) : () => {};
    const backButtonFunc = props.canRetreatSection ? () => props.updateSectionIdx(i => i - 1) : () => {};


    return (
        <div style = {{ marginBottom: "10px", padding: "20px" }}>
            
            {
                props.renderBackButton 
                    ?   <SectionSwitcher darkMode = { darkMode } onClick = { backButtonFunc } >
                            <FaArrowLeft /> Previous Section 
                        </SectionSwitcher>
                    :   <></>
            }

            {
                props.canProgressSection
                    ?   <SectionSwitcher darkMode = { darkMode } onClick = { forwardButtonFunc } >
                            Continue <FaArrowRight />
                        </SectionSwitcher>
                    :   <></>
                    
            }

            {
                props.canSaveAndProgress 
                    ?   <SaveAndProgressButton 
                            darkMode = { true } 
                            onClick = { props.saveAndProgress }
                        > 
                            Next Question <FaArrowRight />
                        </SaveAndProgressButton>
                    :   <></>
            }
            

            <div style = {{ height: "50px" }}/>

        </div>
    )
}

export default SectionProgress;

const SectionSwitcher = styled.button<{ darkMode: boolean }>`
    border-style: none;
    background-color: ${ props => props.darkMode ? "rgb(27, 39, 94)" : "#F6F5F0" };
    color: ${ props => props.darkMode ? "white" : "black" };
    border-radius: 20px;
    width: 200px;
    float: right;
    &:hover {
        background-color: ${ props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE" }; 
    }
`

const SaveAndProgressButton = styled.button<{ darkMode: boolean }>`
    color: white;
    display: block;
    text-decoration: none;
    font-size: 18px;
    height: 30px;
    width:200px;
    border-radius: 10px;
    border-style: none;
    margin: 0px auto;
    background-color:  #7735FD;
    float: right;
`