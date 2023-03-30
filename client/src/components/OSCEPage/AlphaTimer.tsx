import { Dispatch, SetStateAction, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Timer } from "./Common";
import { useLoopTime, convertToString } from "./hooks";
import { Station } from "./types";

type TimerApparatusProps = {
    brief?: boolean;
    startTime: number;
    nextFunc: () => void;
    updateStation: Dispatch<SetStateAction<Station>>;
};

const TimerApparatus = (props: TimerApparatusProps) => {
    const secondTicker = useLoopTime(props.startTime - 1);

    // this here dohickey saves the current timer value when compnenets unmounts, we use
    // the brief prop boolean flag to indicate different timings for brief vs section
    useEffect(
        () => () => {
            props.updateStation(station => ({
                ...station,
                timePermitted: props.brief ? station.timePermitted : secondTicker,
            }));
        },
        []
    );

    if (secondTicker <= 0) props.nextFunc();

    return <Timer> {convertToString(secondTicker)}</Timer>;
};

export default TimerApparatus;
