import { ObjectId } from 'mongodb';
import { FinalsQuestion } from './question.model';
import { LearningPoint } from './learningpoint.model';
import { TextBookTopic } from './textbooktopic.model';

export type FinalsProduct = {
    name: string;
    description: string;
    previousSessions: FinalsQuestion[][];
    questions: FinalsQuestion[];
    learningPoints: LearningPoint[];
    textBook: TextBookTopic[];
}

export type ECGTopic = {
    name: string;
    selected: boolean;
    attempts: number;
    correct: boolean;
}

export type ECGProduct = {
    name: string;
    questions: [];
    topics: ECGTopic[]
}

export type Product = FinalsProduct | ECGProduct;