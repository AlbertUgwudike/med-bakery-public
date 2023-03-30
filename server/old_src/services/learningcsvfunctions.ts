import fs from 'fs';
import csv from 'csv-parser';
import { gbToUs } from './functions';
import { LearningPoint } from '../models/learningpoint.model';

type Row = {
    learningPointNumber: string;
    dateModified: string;
    categories: string;
    learningPoint: string;
}

export const parseLearningCsv = (): Promise<LearningPoint[]> => {
    return new Promise( (resolve, reject) => {
        const rows: Row[] = [];

        fs.createReadStream(__dirname + '/../questionData/learningpoints.csv')
            .pipe(csv())
            .on('data', (data) => rows.push(data))
            .on('end', () => {

                resolve(rows.map(row => {
                    return {
                        learningPointIdx: parseInt(row.learningPointNumber) - 1,
                        learningPoint: row.learningPoint,
                        timeLastUpdated: Date.parse(gbToUs(row.dateModified)),
                        categories:  row.categories.split(",").map(c => c.trim()),
                        correctAttempts: 0,
                        totalAttempts: 0,
                    }
                }));

            });
    })
}
