import { applyProps } from '@react-three/fiber';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useWindowSize } from '../../functions';
import MetaContext from '../../MetaContext';

type FinalsPageProps = { }

type Tab = {
    label: string;
    abbreviatedLabel: string;
    path: string;
    selected: boolean;
}

const FinalsSelector = (props: FinalsPageProps) => {

    const { darkMode } = useContext(MetaContext);
    const [width, _] = useWindowSize();

    const [tabs, updateTabs] = useState([
        { label: "New Session", abbreviatedLabel: "New", path: "/User/Finals", selected: true },
        { label: "Previous Sessions", abbreviatedLabel: "Prev" , path: "/User/Finals/LastSession", selected: false },
        { label: "Learning Points", abbreviatedLabel: "Learning Pts" , path: "/User/Finals/LearningPoints", selected: false },
        { label: "TextBook", abbreviatedLabel: "TextBook" , path: "/User/Finals/TextBook", selected: false }
    ] as Tab[]);

    const narrowWindow = width < 700;

    const handleTabSelection = (idx: number) => {
        updateTabs(tabs.map((tab, tidx) => { return { ...tab, selected: idx === tidx } }));
    }

    return (
        <div style = {{ textAlign: "center", borderBottom: "1px solid grey", marginBottom: "30px" }}>

            { 
                tabs.map((tab, idx)=> { 
                    return (
                        <Link to = { tab.path }>
                            <Button selected = { tab.selected } darkMode = { darkMode } onClick = { () => handleTabSelection(idx) } narrow = { narrowWindow }>                           
                                { narrowWindow ? tab.abbreviatedLabel : tab.label }
                            </Button>
                        </Link>
                    )
                })
            }

        </div>
    );
}

export default FinalsSelector;

const Button = styled.button<{ selected: boolean, darkMode: boolean, narrow: boolean }>`
    background-color: transparent;
    font-size: ${ props => props.narrow ? "12px" : (props.selected ? "20px" : "15px") };
    color: ${ props => props.selected ? (props.darkMode ? "white" : "black") : "grey" };
    margin-bottom: -1px;
    border-style: solid;
    border-width: 1px;
    border-color: ${ props => props.selected ? ("grey grey " + (props.darkMode ? "#100A28" : "white")) : "transparent" };
`