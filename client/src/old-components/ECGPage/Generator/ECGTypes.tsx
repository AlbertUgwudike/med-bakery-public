const sampleCount = 5000;
const [quaterSC, halfSC, threeQuaterSC] = [0.25, 0.5, 0.75].map(f => Math.floor(sampleCount * f))
const canvasHeight = 350;
const canvasWidth = 1000;
const isoelectrics = [50, 125, 200, 275];
const labelX = [10, 260, 510, 760];
const labelY = isoelectrics.map(iso => iso - 15);

// This takes ages if you try to do it with every render
const determineNoise = (arr: Signal, _: number, idx: number): Signal => {
    if (idx === 0) return [[0, false]];
    const prevNoise = arr[idx - 1][0];
    const nextNoise = prevNoise + 0.4 * (Math.random() - 0.5) - (Math.random() * 0.0099 + 0.001) * prevNoise;
    return arr.concat([[nextNoise, false]]);
}

const noisySignal = Array(sampleCount).fill(0).reduce(determineNoise, []) as Signal;

interface Constants {
    sampleCount: number;
    canvasHeight: number;
    canvasWidth: number;
    scaleFactor: number;
    isoelectrics: number[]
    leadConstants: LeadConstant[];
    rhythmOptions: RhythmOption[];
    rateOptions: RateOption[];
    axisOptions: AxisOption[];
    diagnosisOptions: DiagnosisOption[];
    signalStructure: Lead[][];
    noisySignal: Signal;
}

export const constants: Constants = {
    sampleCount: sampleCount,
    canvasHeight: canvasHeight,
    canvasWidth: canvasWidth,
    scaleFactor: canvasWidth / sampleCount,
    isoelectrics: isoelectrics,
    noisySignal: noisySignal,
    leadConstants: [
        { lead: "I",      startIdx: 0,             sampleCount: quaterSC, row: 0, phase: 0,    labelPos: { x: labelX[0], y: labelY[0] } },
        { lead: "II",     startIdx: 0,             sampleCount: quaterSC, row: 1, phase: 60,   labelPos: { x: labelX[0], y: labelY[1] } },
        { lead: "III",    startIdx: 0,             sampleCount: quaterSC, row: 2, phase: 120,  labelPos: { x: labelX[0], y: labelY[2] } },
        { lead: "aVR",    startIdx: quaterSC,      sampleCount: quaterSC, row: 0, phase: -150, labelPos: { x: labelX[1], y: labelY[0] } },
        { lead: "aVL",    startIdx: quaterSC,      sampleCount: quaterSC, row: 1, phase: -30,  labelPos: { x: labelX[1], y: labelY[1] } },
        { lead: "aVF",    startIdx: quaterSC,      sampleCount: quaterSC, row: 2, phase: 90,   labelPos: { x: labelX[1], y: labelY[2] } },
        { lead: "V1",     startIdx: halfSC,        sampleCount: quaterSC, row: 0, phase: 0,    labelPos: { x: labelX[2], y: labelY[0] } },
        { lead: "V2",     startIdx: halfSC,        sampleCount: quaterSC, row: 1, phase: 24,   labelPos: { x: labelX[2], y: labelY[1] } },
        { lead: "V3",     startIdx: halfSC,        sampleCount: quaterSC, row: 2, phase: 48,   labelPos: { x: labelX[2], y: labelY[2] } },
        { lead: "V4",     startIdx: threeQuaterSC, sampleCount: quaterSC, row: 0, phase: 72,   labelPos: { x: labelX[3], y: labelY[0] } },
        { lead: "V5",     startIdx: threeQuaterSC, sampleCount: quaterSC, row: 1, phase: 96,   labelPos: { x: labelX[3], y: labelY[1] } },
        { lead: "V6",     startIdx: threeQuaterSC, sampleCount: quaterSC, row: 2, phase: 120,  labelPos: { x: labelX[3], y: labelY[2] } },
        { lead: "Rhythm", startIdx: 0,             sampleCount: sampleCount, row: 3, phase: 60,labelPos: { x: labelX[0], y: labelY[3] } },
    ],

    rhythmOptions: ["Regular", "Irregular"],
    rateOptions: ["Tachycardic", "Bradycardic", "Normal"],
    axisOptions: ["Left Axis Deviation", "Right Axis Deviation", "Normal"],
    diagnosisOptions: [
        "Inferior STEMI", "Anterior STEMI", "Lateral STEMI", "Septal STEMI", 
        "Ventricular Fibrillation", "Ventricular Tachycardia", "Atrial Flutter",
        "Atrial Fibrillation", "Moibtz I Second Degree Heart Block",
        "Sinus Bradycardia", "Sinus Tachycardia"
    ],

    signalStructure: [
        [ "I",   "aVR", "V1", "V4" ],
        [ "II",  "aVL", "V2", "V5" ],
        [ "III", "aVF", "V3", "V6" ],
        [        "Rhythm"          ]
    ]
}


type TopicName = "ACS" | "Arrhythmias" | "Rate"

export type EcgTopic = {
    "name": TopicName;
    "selected": boolean;
    "attempts": number;
    "correct": number;
}

export interface FirmDiagnosis extends Diagnosis {
    rate: number;
    axis: number;
}

export type Diagnosis = {
    topics: TopicName[];
    diagnosis: DiagnosisOption;
    explanation: string;
    
    rate: "default" | number; //determines numer of events
    axis: "default" | number; // to be applied at the end maybe?
    rhythm: "Irregular" | "Regular";

    // to be applied "globally"
    changes: Change[]
}

export type Change = {
    information: {
        waveName: WaveName;
        description: string;
    }[];
    predicates: Predicate[];
    parameters: {
        start: number; 
        waves: WaveParameters;
    };
}

export type EcgEvent = {
    information: { description: string, waveName: WaveName }[]
    parameters: {
        start: number; 
        waves: WaveParameters;
    };
}

export type Lead = "I" | "II" | "III" | "aVF" | "aVL" | "aVR" | "V1" | "V2" | "V3" | "V4" | "V5" | "V6" | "Rhythm";

export type StartRepeat = { kind: "startRepeat", start: number, repeat: number };
export type Predicate = StartRepeat | { kind: "lead", leads: Lead[] } | { kind: "all" } | { kind: "index", index: number };

export type SettingName = "mag" | "radius" | "kurtosis" | "upstroke"
export type WaveSettings = { [Property in SettingName]: number }
export type WaveSettingsEntry = [SettingName, number];

export type WaveName = "p" | "pr" | "r" | "t"
export type WaveParameters = { [Property in WaveName]: WaveSettings };
export type WaveParameterEntry = [WaveName, WaveSettings];

export type LeadConstant = { lead: Lead, startIdx: number, sampleCount: number, row: number, phase: number, labelPos: { x: number, y: number } };
export interface LeadDetail extends LeadConstant { events: EcgEvent[], axisFactor: number };

export type PointOfInterest = { infoPos: { x: number, y: number }, description: string }

type RhythmOption = "Regular" | "Irregular";
type RateOption = "Tachycardic" | "Bradycardic" | "Normal";
type AxisOption = "Left Axis Deviation" | "Right Axis Deviation" | "Normal";
type DiagnosisOption = (
    "Inferior STEMI" | "Anterior STEMI" | "Lateral STEMI" | "Septal STEMI" | 
    "Ventricular Fibrillation" | "Ventricular Tachycardia" | "Atrial Flutter" |
    "Atrial Fibrillation" | "Moibtz I Second Degree Heart Block" |
    "Sinus Bradycardia" | "Sinus Tachycardia"
)

export type Signal = [number, boolean][];
export type FourSignal = Signal[];

export type EcgQuestion = {
    signal: FourSignal;
    pointsOfInterest: PointOfInterest[];
    answered: boolean;
    explanation: string;
    sections: EcgQuestionSections
}

export type EcgQuestionSections = [
    { label: "Rate", correct: RateOption, selected: RateOption | "", options: RateOption[] },
    { label: "Rhythm", correct: RhythmOption, selected: RhythmOption | "", options: RhythmOption[] },
    { label: "Axis", correct: AxisOption, selected: AxisOption | "", options: AxisOption[] },
    { label: "Diagnosis", correct: DiagnosisOption, selected: DiagnosisOption | "", options: DiagnosisOption[] }
]