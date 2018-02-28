import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReviewsService } from '../services/reviews/reviews.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NumberInputValidator } from './rating.validation';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  private review = new FormControl('', Validators.required);
  private rating = new FormControl('', [NumberInputValidator.checkLimit(0, 10), Validators.required]);

  constructor(
    private dialogRef: MatDialogRef<ReviewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {movie_name: string, movie_id: string},
    private reviewService: ReviewsService
  ) { }

  ngOnInit() {
  }

  private get valid(): boolean {
    return this.review.valid && this.rating.valid;
  }

  private submitReview() {
    this.reviewService.createReview({
      movie_name: this.data.movie_name,
      movie_id: this.data.movie_id,
      rating: this.rating.value,
      review: this.review.value
    });
  }

}
