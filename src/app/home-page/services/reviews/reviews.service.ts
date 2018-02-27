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
    this.afs.collection<Review>('reviews').doc<Review>(review.reviewId).set(review);
  }

  public createReview(
    reviewData: {
      movie_name: string,
      movie_id: string,
      rating: number,
      review: string
    }
  ): void {
    const review: Review = {
      movieName: reviewData.movie_name,
      movieId: reviewData.movie_id,
      rating: reviewData.rating,
      review_text: reviewData.review,
      reviewId: this.afs.createId(),
      userId: this.uid
    };
    this.addReview(review);
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
