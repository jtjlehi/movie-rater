import { AngularFirestoreCollection } from 'angularfire2/firestore';

export interface User {
    uid: string;
    name: string;
    email: string;
    friendsUid: Array<string>;
    wishListId: Array<string>;
}
