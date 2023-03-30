import { useContext } from 'react';
import styled from 'styled-components'
import MetaContext from '../../MetaContext';
import { MasterCategory } from '../../types';

type CategoryProps = { 
    category: MasterCategory, 
    handleSelection: (path: string[], value: boolean) => void;
    workingPath: string[];
    depth: number;
}

const Category = (props: CategoryProps) => {

    const { darkMode } = useContext(MetaContext);

    const workingPath = props.workingPath.concat([props.category.categoryTitle])
    const percentage = Math.round(100 * props.category.answeredQuestionsCount / props.category.totalQuestionCount)

    return (
        <Container darkMode = { darkMode } style = {{ marginLeft: `${ props.depth * 25  }px` }}>

            <OuterDiv selected = { props.category.selected } darkMode = { darkMode } onClick = { () => props.handleSelection(workingPath, !props.category.selected) }>                    
                <Title>{ props.category.categoryTitle }</Title>
                <div style = {{ display: "inline-block", marginLeft: "10px", width: "max-content" }}>
                    <ScoreDiv darkMode = { darkMode }>Available: { props.category.totalQuestionCount }</ScoreDiv>
                    <ScoreDiv darkMode = { darkMode }>Answered: { props.category.answeredQuestionsCount }</ScoreDiv>
                </div>
                <OuterPill>
                    <InnerPill percentage = { percentage } />
                </OuterPill>
            </OuterDiv>

            { 
                props.category.subcategories.map(category => 
                    <Category 
                        category = { category }
                        workingPath = { workingPath }
                        depth = { props.depth + 1 }
                        handleSelection = { props.handleSelection }
                    />
                ) 
            }

        </Container>
    );
}

export default Category;

const Container = styled.div<{ darkMode: boolean }>`
    width: 93%;
    margin-bottom: 20px;
`


const OuterDiv = styled.button<{ selected: boolean, darkMode: boolean }>`
    background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : ( props.darkMode ? "#9546f05e" : "#b1def599" ) };
    color: ${ props => props.darkMode ? "white" : "black" };
    margin: 5px 10px 5px 10px;
    border-style: none;
    border-radius: 10px;
    width: 100%;
    padding:0.5%;
    text-align: left;
    &:hover {
        background-color: ${ props => props.selected ? (props.darkMode ? "#1C725C" : "#41BFA0") : (props.darkMode ? "#7735FD" : "#FBE9EE") };
    }
`

const Title = styled.div`
    margin: 1px 0px 2px 10px;
    font-size: 22px;
`

const ScoreDiv = styled.div<{ darkMode: boolean }>`
    font-size: 10px;
    margin: 5px;
` 

const OuterPill = styled.div`
    display: inline-block;
    width: 75%;
    height: 20px;
    background-color: white;
    border-radius: 5px;
    margin: 0 0 5px 10px;
`

const InnerPill = styled.div<{ percentage: number }>`
    width: ${ props => props.percentage }%;
    height: 20px;
    background-color: #FAD000;
    border-radius: 5px;
`
