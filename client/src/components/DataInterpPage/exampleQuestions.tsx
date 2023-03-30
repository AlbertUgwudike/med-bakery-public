import { DataInterpQuestion } from "./types";

export const questions: DataInterpQuestion[] = [
    {
        id: 0,
        title: "Basics",
        task: "Please intepret the CXR",
        category: "Chest X-rays",
        finding: "Basics",
        description:
            "You need to look systematically at the CXR. ABCDE is a useful pneumonic to use",
        image: "CXR.jpeg",
        sections: [
            {
                title: "Deviated Trachea",
                tab_label: "Airway",
                image: "CXR_trachea.jpeg",
                descirption: "A deviated trachea can indicate .... etc",
            },
            {
                title: "Lung fields",
                tab_label: "Breathing",
                image: "CXR_field.jpeg",
                descirption: "Shadowing in right middle lobe suggests .... etc",
            },
            {
                title: "Enlarged heart",
                tab_label: "Circulation",
                image: "CXR_heart.jpeg",
                descirption: "Increased cardiothoracic ratio is seen in .... etc",
            },
            {
                title: "Diaphragm",
                tab_label: "Diaphragm",
                image: "CXR_diaphragm.jpeg",
                descirption: "blunt costrophrenic angles may suggest .... etc",
            },
            {
                title: "ECG leads",
                tab_label: "Else",
                image: "CXR_leads.jpeg",
                descirption: "Extra features hint at level of morbidity .... etc",
            },
        ],
    },
    {
        id: 0,
        title: "Pneumothorax",
        task: "Please intepret the CXR",
        category: "Chest X-rays",
        finding: "Tracheal Deviation",
        description: "Some description of pneumothorax",
        image: "CXR.jpeg",
        sections: [
            {
                title: "Deviated Trachea",
                tab_label: "A",
                image: "CXR_trachea.jpeg",
                descirption: "A deviated trachea can indicate .... etc",
            },
        ],
    },
    {
        id: 0,
        title: "Pleural Effusion",
        task: "Please intepret the CXR",
        category: "Chest X-rays",
        finding: "Tracheal Deviation",
        description: "Some description of pneumothorax",
        image: "CXR.jpeg",
        sections: [
            {
                title: "Deviated Trachea",
                tab_label: "A",
                image: "CXR_trachea.jpeg",
                descirption: "A deviated trachea can indicate .... etc",
            },
        ],
    },
    {
        id: 0,
        title: "Mass Effect",
        task: "Please intepret the CXR",
        category: "Chest X-rays",
        finding: "Tracheal Deviation",
        description: "Some description of pneumothorax",
        image: "CXR.jpeg",
        sections: [
            {
                title: "Deviated Trachea",
                tab_label: "A",
                image: "CXR_trachea.jpeg",
                descirption: "A deviated trachea can indicate .... etc",
            },
        ],
    },
    {
        id: 0,
        title: "Pneumonia",
        task: "Please intepret the CXR",
        category: "Chest X-rays",
        finding: "Lung White out",
        description: "Some description of pneumothorax",
        image: "CXR.jpeg",
        sections: [
            {
                title: "Deviated Trachea",
                tab_label: "A",
                image: "CXR_trachea.jpeg",
                descirption: "A deviated trachea can indicate .... etc",
            },
        ],
    },
    {
        id: 0,
        title: "Atrial Fibrillation",
        task: "Please intepret the ECG",
        category: "ECG",
        finding: "Irregular Rhythm",
        description: "Some description of AF",
        image: "CXR.jpeg",
        sections: [
            {
                title: "Deviated Trachea",
                tab_label: "A",
                image: "CXR_trachea.jpeg",
                descirption: "A deviated trachea can indicate .... etc",
            },
        ],
    },
];

export const NullQuestion: DataInterpQuestion = {
    id: -1,
    title: "",
    task: "NULL question",
    category: "",
    finding: "",
    description: "",
    image: "",
    sections: [],
};
