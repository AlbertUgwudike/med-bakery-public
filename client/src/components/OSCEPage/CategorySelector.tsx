import React, { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import MetaContext from "../../MetaContext";
import { StationSummary } from "./types";

type CategorySelectorProps = {
    updateCategory: Dispatch<SetStateAction<string>>;
    stationSummaries: StationSummary[];
    category: string;
};

const CategorySelector = (props: CategorySelectorProps) => {
    const { narrowWindow } = useContext(MetaContext);

    return narrowWindow ? (
        <div>
            <Select onChange={e => props.updateCategory(e.target.value)}>
                {["All"]
                    .concat([...new Set(props.stationSummaries.map(ss => ss.category))])
                    .map((c, i) => (
                        <option key={i}>{c}</option>
                    ))}
            </Select>
        </div>
    ) : (
        <SideSelectorBar>
            {["All", ...new Set(props.stationSummaries.map(ss => ss.category))].map((c, i) => (
                <Category
                    selected={c === props.category}
                    onClick={() => props.updateCategory(c === props.category ? "All" : c)}
                    key={i}
                >
                    {c}
                </Category>
            ))}
        </SideSelectorBar>
    );
};

export default CategorySelector;

const Select = styled.select`
    margin-bottom: 20px;
    background-color: #042c54;
    border-radius: 5px;
    color: white;
    border-style: none;
    padding: 5px;
    text-align: center;
    width: 150px;
`;

const Category = styled.div<{ selected: boolean }>`
    margin-bottom: 20px;
    background-color: ${props => (props.selected ? "#042c54" : "transparent")};
    border-radius: 5px;
    color: ${props => (props.selected ? "white" : "#81AFDD")};
    border-style: none;
    padding: 5px 5px 5px 20px;
    cursor: pointer;
    width: 150px;
`;

const SideSelectorBar = styled.div`
    margin-right: 40px;
    padding-right: 20px;
    border-radius: 0;
`;
