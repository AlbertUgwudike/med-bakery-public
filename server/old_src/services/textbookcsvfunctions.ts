import fs from 'fs';
import csv from 'csv-parser';
import { ObjectId } from 'mongodb';
import { TextBookTopicSection, TextBookTopic } from '../models/textbooktopic.model';

type Row = {
    learningPointNumbers: string;
    topicNumber: string;
    categoryPath: string;
    content: string;
    sectionTitle: string;
}

const createSection = (row: Row): TextBookTopicSection => {
    return {
        sectionTitle: row.sectionTitle,
        content: row.content
    }
}

export const parseTextBookCsv = (): Promise<TextBookTopic[]> => {
    return new Promise( (resolve, reject) => {
        const rows: Row[] = [];

        fs.createReadStream(__dirname + '/../questionData/textbook.csv')
            .pipe(csv())
            .on('data', (data) => rows.push(data))
            .on('end', () => {
                const questions: TextBookTopic[] = rows.reduce( (topicList: TextBookTopic[], row) => {

                    const lastIdx = topicList.length - 1;

                    if (topicList.length === 0 || parseInt(row.topicNumber) - 1 !== topicList[lastIdx].topicIdx) topicList.push({
                        _id: new ObjectId,
                        categoryPath: row.categoryPath.split(",").map(c => c.trim()),
                        topicIdx: parseInt(row.topicNumber) - 1,
                        sections: [],
                        topicTitle: row.sectionTitle, /* a bit weird but should work */
                        learningPointIdx: row.learningPointNumbers.split(",").map(i => parseInt(i.trim()))
                    });
                    
                    else topicList[lastIdx].sections.push(createSection(row));

                    return topicList;

                }, [])

                resolve(questions)
            });
    })
}
