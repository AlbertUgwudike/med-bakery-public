export type DataInterpQuestion = {
    id: string;
    title: string;
    task: string;
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