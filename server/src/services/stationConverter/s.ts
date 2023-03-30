export default {
    id: "AdenocarcinomaStation",
    title: "CT Lung",

    timePermitted: 1000,
    timeRemaining: 1000,

    brief: {
        timePermitted: 60,
        timeRemaining: 60,
        prompt: `
            <div>
                <p>Welcome to the Chest X-Ray interpretation demo!</p>

                <p>Your task is to:</p>

                <p>
                    <div>1. Interpret the data presented to you</div>
                    <div>2. Formulate a working diagnosis</div>
                    <div>3. Answer the associated questions</div>
                </p>
            </div>`,
    },

    questions: [
        {
            question: "Point out the most obvious abnormality on the CT scan.",
            questionAudio: "abnormalityQuestion.mp3",
            img: "lungcancer.png",
            responseAudio: "",
            exemplarAudio: "abnormality.mp3",
            markScheme: [
                {
                    title: "Interpretation",
                    points: [
                        {
                            point: "Confirms patient details ",
                            selected: false,
                            pointId: 0,
                        },
                        {
                            point: "Spiculated nodule ",
                            selected: false,
                            pointId: 1,
                        },
                        {
                            point: "Located in the right upper lobe ",
                            selected: false,
                            pointId: 2,
                        },
                    ],
                },
            ],
        },
        {
            question: "What is the most likely histological finding of this abnormality? ",
            questionAudio: "histoCancerQuestion.mp3",
            img: "lungcancer.png",
            responseAudio: "",
            exemplarAudio: "histoCancer.mp3",
            markScheme: [
                {
                    title: "Diagnosis",
                    points: [
                        {
                            point: "Adenocarcinoma",
                            selected: false,
                            pointId: 0,
                        },
                    ],
                },
            ],
        },
    ],
};
