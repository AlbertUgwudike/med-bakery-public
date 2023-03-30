import { retrieveDiagnoses } from "./ECGDiagnoses";
import { EcgEvent, EcgTopic, Lead, Predicate, WaveParameters, WaveParameterEntry, EcgQuestion, constants, LeadDetail, LeadConstant, Change, FirmDiagnosis, WaveSettingsEntry, SettingName } from "./ECGTypes";
import { qualifyAxis, randomVal, qualifyHR, copy, reduceObj } from "../Functions/utility";
import getPointsOfInterest from "../Functions/getPointsOfInterest";
import generateSignal from "../Functions/renderLead";

//    Steps to ecg generation
//
// 1. Diagnosis is retrieved from predefine list (./ECGDiagnoses) with
//    specific topcis used for filtering.
//
// 2. The data within the diagnosis is used to convert lead constants to
//    lead details (add EcgEvents and axis factors). An EcgEven is simply
//    a complete set of 'pqrst' wave parameters with metadata concerning 
//    pathology.
//
// 3. The process of event creation (createEvent) entails iterating through
//    the waveform changes stipulated by the diagnosis and accumlating them
//    with the initial waveform parameters (addWaves).
//
// 4. We aslo accumulate metadata concerning pathological wavechanges (e.g
//    st-elevation, pr prolongation) in the 'information' section of the
//    event. We use predicates to determine which events to add to.
//
// 5. Once detail generation is complete (events and axisFactors added),
//    they may be used to generate the actual ECG signal as well as 
//    determine the locations of Points of interest (ECG events with  
//    pathological metadata)


export const generateECG = (topics: EcgTopic[]): EcgQuestion => {

    const diagnosis = retrieveDiagnoses(topics);
    const leadDetails = generateLeadDetails(diagnosis);
    const { rateOptions, rhythmOptions, axisOptions, diagnosisOptions } = constants;

    return {
        signal: generateSignal(leadDetails),
        pointsOfInterest: getPointsOfInterest(leadDetails),
        explanation: diagnosis.explanation,
        answered: false,
        sections: [
            { label: "Rate",      correct: qualifyHR(diagnosis.rate),   selected: "", options: rateOptions },
            { label: "Rhythm",    correct: diagnosis.rhythm,            selected: "", options: rhythmOptions },
            { label: "Axis",      correct: qualifyAxis(diagnosis.axis), selected: "", options: axisOptions },
            { label: "Diagnosis", correct: diagnosis.diagnosis,         selected: "", options: diagnosisOptions }
        ]
    }
}

const generateLeadDetails = (diagnosis: FirmDiagnosis): LeadDetail[] => {

    // these are the 'baseline' parameters to which changes (within diagnois) will be added
    const initialParameters = {
        p:  { radius: randomVal(20, 50), mag: randomVal(2, 10),  upstroke: 0.1, kurtosis: 0.1 },
        pr: { radius: randomVal(1, 3),   mag: 0,                 upstroke: 0.1, kurtosis: 0.1 },
        r:  { radius: randomVal(5, 10),  mag: randomVal(20, 50), upstroke: 0.1, kurtosis: 0.1 },
        t:  { radius: randomVal(30, 80), mag: randomVal(5, 15),  upstroke: 0.1, kurtosis: 0.06 }
    };

    const createEvent = (lead: Lead, eventIdx: number): EcgEvent => {

        // check if lead and eventIdx match with the given predicate
        const matchPredicate = (predicate: Predicate) => [
            predicate.kind === "startRepeat" && ((eventIdx - predicate.start) % predicate.repeat) === 0,
            predicate.kind === "lead"        && predicate.leads.includes(lead),
            predicate.kind === "index"       && eventIdx === predicate.index,
            predicate.kind === "all"  
        ].some(p => p);

        // add changes from diagnosis (start, waveform changes and pathology info) 
        // if predicate matches
        const addChanges = (event: EcgEvent, change: Change) => {
            if (!change.predicates.map(matchPredicate).every(p => p)) return event;
            const information = event.information.concat(change.information);
            const start = event.parameters.start + change.parameters.start;
            const waves = reduceObj(addWaves, event.parameters.waves, change.parameters.waves);
            return { information, parameters: { start, waves } }
        }

        // determine where the event begins (out of 5000) and copy inital parameters
        const start = eventIdx * constants.sampleCount / Math.floor(diagnosis.rate / 6);
        const event: EcgEvent = { information: [], parameters: { start, waves: copy(initialParameters) } };

        return diagnosis.changes.reduce(addChanges, event);
    }

    // add events and axis factors to each lead
    const constantToDetail = (leadConstant: LeadConstant): LeadDetail => {
        const eventCount = Math.floor(diagnosis.rate / 6);  // each ECG strip is 10s long
        const events = Array(eventCount).fill(leadConstant.lead).map(createEvent);
        const axisFactor = Math.cos( (leadConstant.phase - 80) * (22 / 7) / 180 )
        return {  ...leadConstant, events, axisFactor }
    }

    return constants.leadConstants.map(constantToDetail);
}

const addWaves = (waves: WaveParameters, [waveLetter, settings]: WaveParameterEntry): WaveParameters => {
    for (const [setting, value] of Object.entries(settings)) {
        waves[waveLetter][setting as SettingName] *= value
    }
    return waves;
}