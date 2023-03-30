import { ObjectId } from 'mongodb';
import { FinalsQuestion } from './question.model';
import { FinalsProduct, ECGProduct } from './products.model';

export type User = {
    _id: ObjectId;
    email: string;
    products: {
        Finals: FinalsProduct;
        ECGs: ECGProduct;
    }
}

// export const isUser = (user: any): user is User => {
//     if ((typeof user._id) !== (typeof ObjectId)) return false;
//     if ((typeof user.email) !== 'string') return false;
//     if (!user.products) return false;
//     if (!isFinalsProduct(user.products.FinalsProduct)) return false;



//     return (typeof false) === "boolean"
// }