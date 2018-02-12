import { AngularFirestoreCollection } from 'angularfire2/firestore';

export interface User {
    uid: string;
    name: string;
    email: string;
    friends: Array<string>;
    wishList: Array<string>;
}
