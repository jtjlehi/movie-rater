import { Injectable } from '@angular/core';
import { Review } from './review.interface';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { AuthService } from '../../../core/auth.service';
import { User } from '../../../core/interfaces/user.interface';

@Injectable()
export class ReviewsService {

  uid: string;
  userDoc: AngularFirestoreDocument<User>;

  constructor(
    private afs: AngularFirestore,
    private authService: AuthService
  ) {
    // subscribes to the users data as defined by the auth service
    authService.userObservable.subscribe(user => {
      if (!this.isUser) {
        this.uid = user.uid;
        this.setUserDoc();
      }
    });
  }

  public addReview(review: Review): void {
    throw new Error('ReviewService.addReview() not implemented');
  }

  // this sets the userDoc property
  private setUserDoc() {
    if (this.isUser) {
      this.userDoc = this.afs.doc<User>(`users/${this.uid}`);
    }
  }

  // checks if they are a user
  private get isUser(): boolean {
    return this.uid !== '';
  }

}
