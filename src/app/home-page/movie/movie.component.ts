import { Component, OnInit, Input } from '@angular/core';
import { MovieObj } from '../movieObj.interface';
import { WishlistService } from '../services/wishlist.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: MovieObj;
  @Input() inWishlist: boolean;
  @Input() width: string;

  constructor(
    private wishlistService: WishlistService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addMovieToWishlist() {
    this.wishlistService.addMovie(this.movie);
  }
  removeMovieFromWishlist() {
    this.wishlistService.removeMovie(this.movie.fireId);
  }
  openReviewDialog() {
    const dialogRef: MatDialogRef<ReviewComponent, object> = this.dialog.open(ReviewComponent, {
      data: {
        movie_name: this.movie.title,
        movie_id: this.movie.fireId
      }
    });
  }

}
