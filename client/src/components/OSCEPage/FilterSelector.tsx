import React, { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import MetaContext from "../../MetaContext";
import { StationSummary } from "./types";

type FilterSelectorProps = {
    updateFilter: Dispatch<SetStateAction<Filter>>;
    stationSummaries: StationSummary[];
    filter: Filter;
};

export type Filter = "No Filter" | "Attempted" | "Free" | "Premium";

const FilterSelector = (props: FilterSelectorProps) => {
    const { narrowWindow } = useContext(MetaContext);

    return narrowWindow ? (
        <div>
            <Select onChange={e => props.updateFilter(e.target.value as Filter)}>
                {["No Filter", "Attempted", "Free", "Premium"].map((c, i) => (
                    <option key={i}>{c}</option>
                ))}
            </Select>
        </div>
    ) : (
        <FilterSelectorBar>
            {(["No Filter", "Attempted", "Free", "Premium"] as Filter[]).map((f, i) => (
                <Category
                    selected={f === props.filter}
                    onClick={() => props.updateFilter(f === props.filter ? "No Filter" : f)}
                    key={i}
                >
                    {f}
                </Category>
            ))}
        </FilterSelectorBar>
    );
};

export default FilterSelector;

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
    margin-left: 20px;
    background-color: ${props => (props.selected ? "#042c54" : "transparent")};
    border-radius: 5px;
    color: ${props => (props.selected ? "white" : "#81AFDD")};
    border-style: none;
    padding: 5px;
    cursor: pointer;
`;

const FilterSelectorBar = styled.div`
    display: flex;
    margin-bottom: 20px;
    margin-left: -20px;
    padding-bottom: 10px;
    border-radius: 0;
`;
