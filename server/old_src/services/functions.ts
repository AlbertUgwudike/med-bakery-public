import { OAuth2Client } from 'google-auth-library';
import { ObjectId } from 'mongodb';
import { LearningPoint } from '../models/learningpoint.model';
import { FinalsProduct } from '../models/products.model';
import { FinalsQuestion } from '../models/question.model';
import { collections } from "./database.service";


export const updateGlobalState = (rawQuestions: FinalsQuestion[], oldQuestions: FinalsQuestion[]): FinalsQuestion[] => {

    return rawQuestions.map((rawQuestion, idx) => {

        const surplusQuestion = idx >= oldQuestions.length;

        if (!surplusQuestion && rawQuestion.questionIdx != oldQuestions[idx].questionIdx) throw "indexing mismatch waaaah";

        // if there have been no updates to this question since last update ignore
        if (!surplusQuestion && rawQuestion.timeLastUpdated === oldQuestions[idx].timeLastUpdated) return oldQuestions[idx];

        // copy over fields containing global state
        return {
            ... rawQuestion,
            chat: surplusQuestion ? [] : oldQuestions[idx].chat,
            sections: rawQuestion.sections.map( (section, sidx) => {
                
                const surplusSection = surplusQuestion || sidx >= oldQuestions[idx].sections.length;

                return {
                    ... section,
                    percentages: surplusSection ? [0, 0, 0, 0, 0] : oldQuestions[idx].sections[sidx].percentages
                }
            })
        }
    })
}

export const gbToUs = (gbDate: string): string => {
    const firstSlashIdx = gbDate.indexOf('/');
    const secondSlashIdx = gbDate.indexOf('/', firstSlashIdx + 1);
    const day = gbDate.substring(0, firstSlashIdx);
    const month = gbDate.substring(firstSlashIdx + 1, secondSlashIdx);
    const year = gbDate.substring(secondSlashIdx + 1);
    return `${month}/${day}/${year}`
}

export const moreRecent = (dateOne: string, dateTwo: string): boolean => {
    return  Date.parse(gbToUs(dateOne)) > Date.parse(gbToUs(dateTwo));
}

const synchroniseECGTopics = (userID: ObjectId) => {
    // TODO
}

export const updateUserQuestionsState = (masterQuestions: FinalsQuestion[], userQuestions: FinalsQuestion[]): FinalsQuestion[] => {
    return masterQuestions.map( (masterQuestion, idx) => {

        const surplusQuestion = idx >= userQuestions.length;

        if (!surplusQuestion && masterQuestion.questionIdx != userQuestions[idx].questionIdx) throw "indexing mismatch waaaah";

        // if no updates since last time and is not surplus question then ignore
        if (!surplusQuestion && masterQuestion.timeLastUpdated === userQuestions[idx].timeLastUpdated) return userQuestions[idx];

        // copy over all user-modifiable fields
        return {
            ... masterQuestion,
            answered: surplusQuestion ? false : userQuestions[idx].answered,
            notes: surplusQuestion ? "" : userQuestions[idx].notes,
            timeLastAttempted: surplusQuestion ? 0 : userQuestions[idx].timeLastAttempted,
            sections: masterQuestion.sections.map( (section, sidx) => {

                const surplusSection = surplusQuestion || sidx >= userQuestions[idx].sections.length;

                return {
                    ... section,
                    selectedOption: surplusSection ? -1 : userQuestions[idx].sections[sidx].selectedOption
                }
            })
        }
    });
}

export const updateUserLearningPtsState = (masterLearningPoints: LearningPoint[], userLearningPoints: LearningPoint[]): LearningPoint[] => {
    return masterLearningPoints.map( (masterLearningPoint, idx) => {

        const surplusQuestion = idx >= userLearningPoints.length;

        if (!surplusQuestion && masterLearningPoint.learningPointIdx != userLearningPoints[idx].learningPointIdx) throw "indexing mismatch waaaah";

        // if no updates since last time and is not surplus question then ignore
        if (!surplusQuestion && masterLearningPoint.timeLastUpdated === userLearningPoints[idx].timeLastUpdated) return userLearningPoints[idx];

        // copy over all user-modifiable fields
        return {
            ... masterLearningPoint,
            correctAttempts: surplusQuestion ? 0 : userLearningPoints[idx].correctAttempts,
            totalAttempts: surplusQuestion ? 0 : userLearningPoints[idx].totalAttempts
        }
    });
}


const includesID = (IDList: ObjectId[], ID: ObjectId): boolean => {
    if (IDList.length === 0) return false;
    return IDList[0].equals(ID) || includesID(IDList.slice(1), ID);
}

export const getEmailFromToken = async (tokenId: string) => {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    try {
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID
        }).catch(console.log);

        if (!ticket) { return "" }
        return ticket.getPayload().email;
    }

    catch (error) { console.log(error) }
}

type Category = {
    categoryTitle: string,
    totalQuestionCount: number,
    answeredQuestionsCount: number,
    correctlyAnsweredCount: number,
    subcategories: Category[],
    questions: FinalsQuestion[],
    selected: boolean
}

export const categoryWithTitle = (title: string): Category => {
    return {
        categoryTitle: title,
        totalQuestionCount: 0,
        answeredQuestionsCount: 0,
        correctlyAnsweredCount: 0,
        subcategories: [],
        questions: [],
        selected: false
    }
}

const updateCounts = (root: Category, question: FinalsQuestion): Category => {
    return {
        ...root,
        totalQuestionCount: root.totalQuestionCount += 1,
        answeredQuestionsCount: root.answeredQuestionsCount += question.answered ? 1 : 0,
        correctlyAnsweredCount: root.correctlyAnsweredCount += question.sections.reduce((acc, a) => {
            return acc + (a.correctOption === a.selectedOption ? (1 / question.sections.length) : 0);
        }, 0)
    }
}

export const createMasterCategory = (_root: Category, question: FinalsQuestion, depth: number): Category => {
    const root = updateCounts(_root, question);

    if (question.categoryPath.length === depth) {
        return { ...root, questions: root.questions.concat([question]) }
    }

    const nextCategory = question.categoryPath[depth];
    if (root.subcategories.map(sc => sc.categoryTitle).includes(nextCategory)) {
        return {
            ... root,
            subcategories: root.subcategories.map(sc => {
                return sc.categoryTitle === nextCategory ? createMasterCategory(sc, question, depth + 1) : sc
            })
        }
    }

    return {
        ...root,
        subcategories: root.subcategories.concat([
            createMasterCategory( categoryWithTitle(nextCategory), question, depth + 1 )
        ])
    }
}

type LearningPointCategory = {
    title: string;
    learningPoints: LearningPoint[];
    selected: boolean;
}

export const createLearningPointList = (learningPoints: LearningPoint[]): LearningPointCategory[] => {
    return learningPoints.reduce( (categoryList, learningPoint) => {

        if ( categoryList.map(c => c.title).includes(learningPoint.categories[0]) ) {
            return categoryList.map(c => c.title === learningPoint.categories[0] 
                ? { ...c, learningPoints: c.learningPoints.concat([learningPoint])} 
                : c
            )
        }

        return categoryList.concat([{ title: learningPoint.categories[0], learningPoints: [], selected: false }]);

    }, [] as LearningPointCategory[] )
}