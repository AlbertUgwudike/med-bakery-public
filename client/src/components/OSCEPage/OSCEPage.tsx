import { useContext, useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import OSCESelector from "./OSCESelector";
import StationPage from "./StationPage";
import MetaContext from "../../MetaContext";
import { NullStation } from "./DemoStations/NullStation";
import axios from "../../myaxios";
import { AnsweredStationDetails, Question, StationSummary } from "./types";
import {
    binaryToCode,
    downloadAssets,
    extractReponseAudio,
    populateMarkScheme,
    populateResponseAudios,
    useStations,
    useUserDetails,
} from "./hooks";
import LoadingOverlay from "./LoadingOverlay";
import Navigator from "../Navigator";
import SubscribeModal from "../SubscribePage/SubscribeModal";

const OSCEPage = () => {
    const { token, SERVER_URL } = useContext(MetaContext);
    const [station, updateStation] = useState(NullStation);
    const [reviewMode, updateReviewMode] = useState(false);
    const [loading, updateLoading] = useState(false);
    const [userDetailsOsce, userLoading] = useUserDetails(SERVER_URL, token);
    const [stationSummarires, stationeSummariesLoading] = useStations(SERVER_URL, token);
    const [subscribeModalOpen, updateSubscribeOpen] = useState(false);

    const selectStation = async (id: string, options: { review: boolean; marks: (0 | 1)[] }) => {
        updateLoading(true);
        updateReviewMode(options.review);

        try {
            const axres = await axios.post(SERVER_URL + "/osce/get_station", { token, id });

            if (!axres.data.success) {
                throw "selecteStation (OSCEPage): Station retrieval failed!";
            }

            if (options.review) {
                const matches = userDetailsOsce.answeredStations.filter(
                    s => s.id === axres.data.station.id
                );
                const rawResponseAudios =
                    matches.length === 0
                        ? Array(axres.data.station.questions.length).fill("")
                        : matches[0].responseAudios;

                const stationWithMarks = populateMarkScheme(axres.data.station, options.marks);
                const stationWithResponses = populateResponseAudios(
                    stationWithMarks,
                    rawResponseAudios
                );
                const localContentStation = await downloadAssets(stationWithResponses, SERVER_URL);
                updateStation(localContentStation);
            } else {
                const localContentStation = await downloadAssets(axres.data.station, SERVER_URL);
                updateStation(localContentStation);
            }
        } catch (e) {
            console.error(e);
        }
        updateLoading(false);
    };

    const handleExit = async (questions: Question[], tok: string) => {
        updateLoading(true);

        const points = questions
            .map(q => q.markScheme.map(ms => ms.points.map(p => (p.selected ? 1 : 0))))
            .flat(2);
        const markCode = binaryToCode([1 as 1 | 0].concat(points));

        if (!reviewMode) {
            const responseAudios = await extractReponseAudio(questions);
            await axios.post(SERVER_URL + "/osce/update_stations", {
                token: tok,
                markCode,
                id: station.id,
                responseAudios,
            });
        }

        updateStation(NullStation);
        window.location.href = "/OSCE";

        updateLoading(false);
    };

    return (
        <>
            {subscribeModalOpen && <SubscribeModal close={() => updateSubscribeOpen(false)} />}
            <Switch>
                {loading && <LoadingOverlay />}

                <Route exact path="/OSCE">
                    <Navigator selection={"OSCE"} />
                    <OSCESelector
                        openSubscribeModal={() => updateSubscribeOpen(true)}
                        stationSummarires={stationSummarires}
                        answeredStations={userDetailsOsce.answeredStations}
                        selectStation={selectStation}
                        station={station}
                        purchasedOsce={userDetailsOsce.purchasedOsce}
                        stationSummariesLoading={stationeSummariesLoading || userLoading}
                    />
                </Route>

                <Route path="/OSCE/Station">
                    <StationPage
                        handleExit={handleExit}
                        station={station}
                        updateStation={updateStation}
                        answeredStations={userDetailsOsce.answeredStations}
                        reviewMode={reviewMode}
                    />
                </Route>
            </Switch>
        </>
    );
};

export default OSCEPage;
