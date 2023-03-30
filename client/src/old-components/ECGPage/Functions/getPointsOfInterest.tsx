import { WaveName, PointOfInterest, constants, LeadDetail, EcgEvent, WaveParameters } from "../Generator/ECGTypes";

// extracts a list of points of interest (x, y coordinates on trace with associated
// diagnostic information) 
const getPointsOfInterest = (leadDetails: LeadDetail[]): PointOfInterest[] => {
    return leadDetails.map(detailToPOIs).flat(2)
}

// map individual leadDetail object (contianing list of ECG events) to a 
// 'list of lists' of POIs. There is a list of POIs for each event
const detailToPOIs = (leadDetail: LeadDetail): PointOfInterest[][] => {

    // maps each event (contianing information about  pathologcial waves) to POI[]
    const eventToPOIs = (event: EcgEvent): PointOfInterest[] => {
        return event.information.reduce((POIs, info) => {

            const waveCenter = determinePosition(info.waveName, event.parameters);
            const x = waveCenter * constants.scaleFactor;
            const y = constants.isoelectrics[leadDetail.row] - 30;
            const inbounds = waveCenter > leadDetail.startIdx && waveCenter < leadDetail.startIdx + leadDetail.sampleCount;
            return inbounds ? POIs.concat([{ infoPos: { x, y }, description: info.description }]) : POIs;

        }, [] as PointOfInterest[]);
    }

    return leadDetail.events.map(eventToPOIs)
}

// determine the x-position of a wave given the pqrst parameters
const determinePosition = (waveName: WaveName, parameters: { start: number; waves: WaveParameters; }): number => {
    let acc = 0
    for (const [name, { radius }] of Object.entries(parameters.waves)) {
        acc += name === waveName ? radius : 2 * radius;
        if (name === waveName) break;
    }
    return parameters.start + acc - 25;
}


export default getPointsOfInterest;