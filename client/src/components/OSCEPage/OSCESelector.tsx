import { AnsweredStationDetails, StationSummary, Station } from "./types";
import StationSummaryCard from "./StationSummaryCard";
import Navigator from "../Navigator";
import styled, { keyframes } from "styled-components";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import MetaContext from "../../MetaContext";
import CategorySelector from "./CategorySelector";
import { FaSpinner } from "react-icons/fa";
import SubscribePanel from "./SubscribePanel";
import FilterSelector, { Filter } from "./FilterSelector";
import LoadingScreen from "./LoadingScreen";

type OSCESelectorProps = {
    stationSummarires: StationSummary[];
    selectStation: (id: string, options: { review: boolean; marks: (0 | 1)[] }) => void;
    station: Station;
    answeredStations: AnsweredStationDetails[];
    purchasedOsce: boolean;
    stationSummariesLoading: boolean;
    openSubscribeModal: () => void;
};

const OSCESelector = (props: OSCESelectorProps) => {
    const { token, narrowWindow } = useContext(MetaContext);
    const [category, updateCategory] = useState("All");
    const [filter, updateFilter] = useState<Filter>("No Filter");

    return (
        <div>
            {props.stationSummariesLoading ? (
                <LoadingScreen message="Loading Stations" />
            ) : (
                <div
                    style={{
                        background: "#031B34",
                        margin: "5%",
                        padding: "5%",
                        display: narrowWindow ? "block" : "flex",
                    }}
                >

                    <CategorySelector
                        updateCategory={updateCategory}
                        stationSummaries={props.stationSummarires}
                        category={category}
                    />
                    
                    <div>
                        <FilterSelector
                            stationSummaries={props.stationSummarires}
                            updateFilter={updateFilter}
                            filter={filter}
                        />

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                            }}
                        >
                            {props.stationSummarires
                                .filter(ss => ss.category === category || category === "All")
                                .filter(ss => {
                                    if (filter === "Attempted")
                                        return props.answeredStations
                                            .map(as => as.id)
                                            .includes(ss.id);
                                    if (filter === "Free") return ss.isDemoStation;
                                    if (filter === "Premium") return !ss.isDemoStation;
                                    return true; // filter === "All"
                                })
                                .map(ss => (
                                    <StationSummaryCard
                                        openSubscribeModal={props.openSubscribeModal}
                                        selectStation={props.selectStation}
                                        answeredStations={props.answeredStations}
                                        summary={ss}
                                        available={
                                            (token !== "" && props.purchasedOsce) ||
                                            ss.isDemoStation
                                        }
                                        key={ss.id}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OSCESelector;

const StartOrReview = styled.button`
    text-align: center;
    margin: 5px 10px 5px 0;
    border-radius: 5px;
    padding: 0 10px;
    height: 30px;
    border: 1px solid grey;
    color: #fad000;
    background-color: transparent;
`;
