import { Injectable } from '@angular/core';
import { Review } from './review.interface';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../core/auth.service';

@Injectable()
export class ReviewsService {

  constructor(
    afs: AngularFirestore,
    auth: AuthService
  ) { }

  addReview(review: Review): void {
    throw new Error('ReviewService.addReview() not implemented');
  }

}
