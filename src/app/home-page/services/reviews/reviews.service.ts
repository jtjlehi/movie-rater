import { Injectable } from '@angular/core';
import { Review } from './reivew.interface';

@Injectable()
export class ReviewsService {

  constructor() { }

  addReview(review: Review): void {
    throw new Error('ReviewService.addReview() not implemented');
  }

}
