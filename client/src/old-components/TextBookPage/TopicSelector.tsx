import { Link } from "react-router-dom";
import { TextBookTopic } from "../../types";
import styled from "styled-components";
import { Container } from "../General/Container";
import BackButton from "../General/BackButton";
import { Title } from "../General/Title";
import { Subtitle } from "../General/Subtitle";
import { useContext } from "react";
import MetaContext from "../../MetaContext";

type TopicSelectorProps = {
    topics: TextBookTopic[];
    updateCurrentTopic: React.Dispatch<React.SetStateAction<TextBookTopic>>;
}

const TopicSelector = (props: TopicSelectorProps) => {

    const { darkMode } = useContext(MetaContext);

    const renderSelector = (topic: TextBookTopic) => {
        return (
            <Link to = "/User/Finals/TextBook/Subject" >
                <Button darkMode = { darkMode } onClick = { () => props.updateCurrentTopic(topic) }>
                    { topic.topicTitle }
                </Button>
            </Link>
        )
    }

    return (
        <>
            <Title darkMode = { darkMode }>
                <span style = {{ color: (darkMode ? "#FAD000" : "#7babff") }}> Finals </span> Questions
            </Title>

            <Subtitle darkMode = { darkMode }>Choose Your Subject</Subtitle>

            <div style = {{ textAlign: "center" }} > { props.topics.map(renderSelector) } </div>
        </>
    )
}

export default TopicSelector;

const Button = styled.button<{ darkMode: boolean }>`
    display: block;
    width: 100%;
    max-width: 500px;
    border-style: none;
    border-radius: 10px;
    text-align: left;
    padding: 5px;
    padding-left: 40px;
    margin: 10px auto;
    color: ${ props => props.darkMode ? "white" : "black" };
    background-color: ${ props => props.darkMode ? "#9546f05e" : "#b1def599"  };
    &:hover {
        background-color: ${ props => props.darkMode ? "rgba(119, 53, 253, 0.5)" : "#FBE9EE" }; 
    }
`