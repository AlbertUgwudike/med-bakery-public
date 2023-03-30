export type DataInterpQuestion = {
    file: any;
    id: number;
    title: string;
    task: string;
    exemplar: string;
    category: string;
    finding: string;
    description: string;
    image: string;
    sections: {
        title: string;
        tab_label: string;
        image: string;
        descirption: string;
    }[];
};

export type Category = {
    categoryTitle: string;
    findings: {
        findingTitle: string;
        questions: {
            questionTitle: string;
            questionId: number;
        }[];
    }[];
};
