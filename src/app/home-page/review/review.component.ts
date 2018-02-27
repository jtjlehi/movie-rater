import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ReviewsService } from '../services/reviews/reviews.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  private review = new FormControl();
  private rating = new FormControl();

  constructor(
    private dialogRef: MatDialogRef<ReviewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {movie_name: string, movie_id: string},
    private reviewService: ReviewsService
  ) { }

  ngOnInit() {
  }

}
