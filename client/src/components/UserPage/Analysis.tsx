import axios from "../../myaxios";
import { useContext, useEffect, useState } from "react";
import MetaContext from "../../MetaContext";
import { useStations } from "../OSCEPage/hooks";
import { AnsweredStationDetails } from "../OSCEPage/types";
import styled from "styled-components";

type AnalysisProps = {
    answeredOsceDetails: AnsweredStationDetails[];
};
const Analysis = (props: AnalysisProps) => {
    const { SERVER_URL } = useContext(MetaContext);
    const [categoryCount, updateCategoryCount] = useState<{ category: string; count: number }[]>(
        []
    );

    const getCategories = async () => {
        try {
            const ccount = (await axios.get(SERVER_URL + "/osce/category_count")).data
                .categoryCount as { category: string; count: number }[];
            updateCategoryCount(ccount);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            {categoryCount.map(({ category, count }) => {
                return (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ width: "100px", overflow: "hidden" }}>{category}</div>
                        <OuterBar>
                            <InnerBar style={{ width: "`${50}%`" }} />
                        </OuterBar>
                    </div>
                );
            })}
        </div>
    );
};

export default Analysis;

const OuterBar = styled.div`
    height: 10px;
    width: 100%;
    background-color: white;
`;

const InnerBar = styled.div`
    height: 10px;
    background-color: orange;
`;
