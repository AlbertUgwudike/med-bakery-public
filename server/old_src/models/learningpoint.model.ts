export type LearningPoint = {
    learningPointIdx: number;
    learningPoint: string;
    timeLastUpdated: number;
    categories: string[];
    correctAttempts: number;
    totalAttempts: number;
}