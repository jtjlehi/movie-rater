import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ReviewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: {movie_name: string, movie_id: string}
  ) { }

  ngOnInit() {
  }

}
