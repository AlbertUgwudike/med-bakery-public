import { updateCategory, getPaths } from "../../functions";
import Category from "./Category";
import { MasterCategory } from "../../types";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useContext, useEffect, useState } from "react";
import { Title } from "../General/Title";
import { Subtitle } from "../General/Subtitle";
import MetaContext from "../../MetaContext";

type CategoryPageProps = {
    retriveQuestions: (paths: string[][]) => void;
    handleSessionTypeChange: React.ChangeEventHandler<HTMLSelectElement>;
    sessionType: string;
}

const CategoryPage = (props: CategoryPageProps) => {

    const { darkMode, SERVER_URL, token } = useContext(MetaContext);

    const [selectAll, updateSelectAll] = useState(false);
    const [masterCategory, updateMasterCategory] = useState({
        categoryTitle: "",
        totalQuestionCount: 0,
        answeredQuestionsCount: 0,
        correctlyAnsweredCount: 0,
        subcategories: [],
        selected: false
    } as MasterCategory);

    useEffect(() => {
        axios.post(SERVER_URL + "/questions/finals/categorylist", { token })
            .then(res => {
                updateMasterCategory(res.data)
                // console.log("msater category", res.data)
            });
    }, [])

    const handleSelection = (path: string[], value: boolean) => {
        updateSelectAll(false);
        updateMasterCategory(updateCategory(masterCategory, path, value));
    }

    // goes through master category and populates paths and totals
    const beginSession = () => {
        const paths = getPaths(masterCategory);
        props.retriveQuestions(paths);
    }

    const handleSelectAll = () => {
        updateSelectAll(!selectAll);
        updateMasterCategory({ ...masterCategory, subcategories: masterCategory.subcategories.map(sc => { return { ...sc, selected: !selectAll } }) })
    }

    return (
        <div style = {{ maxWidth: "800px", margin: "auto" }}>

            <Title darkMode = { darkMode }>
                <span style = {{ color: (darkMode ? "#FAD000" : "#7babff") }}> Finals </span> Questions
            </Title>

            <Subtitle darkMode = { darkMode }>
                Select Your Sauce!
            </Subtitle>

            <br></br>

            <div style = {{  }} >

                <Button darkMode = { darkMode } onClick = { handleSelectAll } selected = { selectAll }>
                    SelectAll 
                </Button>

                <Select darkMode = { darkMode } onChange = { props.handleSessionTypeChange } value = { props.sessionType }>  
                    <option disabled selected> Filter </option>       
                    <option>Unanswered Questions</option>
                    <option>All Questions</option>        
                </Select>

            </div>

            <CategoryList>
                {
                    masterCategory.subcategories.map(category => 
                        <Category 
                            category = { category }
                            handleSelection = { handleSelection }
                            workingPath = { [] }
                            depth = { 0 }
                        /> 
                    )
                }
            </CategoryList>

            <div style = {{ textAlign: "center" }}>
                <Link to = "/User/Finals/Session">
                    <StartButton onClick = { beginSession }>
                        Start Cooking
                    </StartButton>
                </Link>
            </div>

        </div>
    );
}

export default CategoryPage;

const Select = styled.select<{ darkMode: boolean }>`
    display: inline-block;
    border-radius: 20px;
    border: none;
    font-size: 10px;
    width: 100px;
    height: 15px;
    margin: 5px 10px;
    text-align: center;
    background-color: ${ props => props.darkMode ? "#9546f05e" : "#b1def599" };
    color: ${ props => props.darkMode ? "white" : "black" };
`

const Button = styled.button<{ darkMode: boolean, selected?: boolean }>`
    display: inline-block;
    border-radius: 20px;
    border: none;
    font-size: 10px;
    width: 100px;
    height: 15px;
    margin: 5px 10px;
    text-align: center;
    background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : ( props.darkMode ? "#9546f05e" : "#b1def599" ) };
    color: ${ props => props.darkMode ? "white" : "black" };
    &:hover {
        background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : (props.darkMode ? "#7735FD" : "#FBE9EE") };
    }
`

const CategoryList = styled.div`
    text-align: left;
    margin-top: 10px;
`

const StartButton = styled.button`
    border-radius: 10px;
    border: none;
    font-size: 15px;
    width: 150px;
    height: 30px;
    background-color: #FAD000;
    color: black;
    margin-top: 30px;
`