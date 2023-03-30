import { useContext, useState } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { TextBookTopic, TextBookTopicSection } from "../../types";
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import BackButton from "../General/BackButton";
import { Title } from "../General/Title";
import { Subtitle } from "../General/Subtitle";
import MetaContext from "../../MetaContext";

const Section = (props: {section: TextBookTopicSection }) => {

    const { darkMode } = useContext(MetaContext);
    const [contentExposed, updateContentExposed] = useState(false);

    return (
        <SectionDiv darkMode = { darkMode }>

            <Button darkMode = { darkMode } onClick = { () => updateContentExposed(!contentExposed) }>

                { props.section.sectionTitle }

                <div style = {{ display: "inline", float: "right" }}>
                    { contentExposed ? <FaArrowUp /> : <FaArrowDown /> }
                </div>

            </Button>

            <Explanation darkMode = { darkMode } expanded = { contentExposed }>
                <div style = {{ margin: "20px" }}> { ReactHtmlParser(props.section.content) } </div>
            </Explanation>

        </SectionDiv>
    )
}

const TopicPage = (props: { topic: TextBookTopic }) => {

    const { darkMode  } = useContext(MetaContext);

    return (
        <>
            <BackButton path = "/User/Finals/TextBook" label = "TextBook"/>

            <Title darkMode = { darkMode }>
                <span style = {{ color: (darkMode ? "#FAD000" : "#7babff") }}> Finals </span> Questions
            </Title>

            <Subtitle darkMode = { darkMode }>{ props.topic.topicTitle }</Subtitle>

            <br></br>

            { props.topic.sections.map(s => <Section section = {s} />) }

        </>
    )
}

export default TopicPage;

const Button = styled.button<{ darkMode: boolean }>`
    width: 100%;
    border-style: none;
    border-radius: 10px;
    background-color: transparent;
    color: ${ props => props.darkMode ? "white" : "black" };
    font-size: 30px;
    text-align: left;
    padding: 5px;
`

const SectionDiv = styled.div<{ darkMode: boolean }>`
    padding: 20px;
    max-width: 700px;
    border-radius: 10px;
    margin: 0 auto 20px auto;
    color: ${ props => props.darkMode ? "white" : "black" };
    background-color: ${ props => props.darkMode ? "#9546f05e" : "#b1def599"  };
    &:hover {
        background-color: ${ props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE" }; 
    }
`

const Explanation = styled.div<{ darkMode: boolean, expanded: boolean }>`
    color: ${ props => props.darkMode ? "white" : "black" };
    background-color: ${ props => props.darkMode ? "#0D163C" : "#E6E5E0" };
    border-radius: 10px;
    font-size: 15px;
    max-height: ${ props => props.expanded ? "500px" : "0" };
    transition: max-height 0.5s;
    overflow: scroll;
    text-align: left;
`