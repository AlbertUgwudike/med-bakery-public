import fs from 'fs';
import csv from 'csv-parser';
import { FinalsQuestion } from '../models/question.model';
import { Section } from '../models/question.model';
import { ObjectId } from 'mongodb';
import { gbToUs } from './functions';

type Row = {
    questionNumber: string;
    dateModified: string;
    categoryPath: string;
    learningPointNumbers: string;
    sectionLetter: string;
    stem: string;
    question: string;
    option1: string; option2: string; option3: string; option4: string; option5: string;
    explanation1: string; explanation2: string; explanation3: string; explanation4: string; explanation5: string;
    correctOption: string;
    type: any;
}

const createSection = (row: Row): Section => {
    return {
        stem: row.stem,
        question: row.question,
        options: [row.option1, row.option2, row.option3, row.option4, row.option5],
        explanations: [row.explanation1, row.explanation2, row.explanation3, row.explanation4, row.explanation5],
        correctOption: parseInt(row.correctOption) - 1, // This is where we resolve the indexing issue
        selectedOption: -1,
        percentages: [0, 0, 0, 0, 0],
        learningPointIdxs: row.learningPointNumbers.split(",").map(i => parseInt(i.trim()) - 1)
    }
}

export const parseFinalsCsv = (): Promise<FinalsQuestion[]> => {
    return new Promise( (resolve, reject) => {
        const rows: Row[] = [];

        fs.createReadStream(__dirname + '/../questionData/questions.csv')
            .pipe(csv())
            .on('data', (data) => rows.push(data))
            .on('end', () => {
                const questions: FinalsQuestion[] = rows.reduce( (questionList: FinalsQuestion[], row) => {

                    const lastIdx = questionList.length - 1;

                    /* 
                       This works becasue after we've pushed the first row to question list
                       lastIdx now matches the current row's questionIdx untill we hit the next question.
                       Actually pretty clever haha
                    */

                    if (questionList.length === 0 || parseInt(row.questionNumber) - 1 !== questionList[lastIdx].questionIdx) {
                        questionList.push({
                            _id: new ObjectId,
                            categoryPath: row.categoryPath.split(",").map(c => c.trim()),
                            questionIdx: parseInt(row.questionNumber) - 1,
                            sections: [createSection(row)],
                            answered: false,
                            chat: [],
                            notes: "",
                            timeLastAttempted: 0,
                            timeLastUpdated: Date.parse(gbToUs(row.dateModified)),
                            type: row.type
                        });
                    }
                    
                    else questionList[lastIdx].sections.push(createSection(row));

                    return questionList;

                }, [])

                resolve(questions)
            });
    })
}
