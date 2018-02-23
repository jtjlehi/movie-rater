import { Component, OnInit, Input } from '@angular/core';
import { MovieObj } from '../movieObj.interface';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: MovieObj;

  constructor(
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
  }

  addMovieToWishlist() {
    this.wishlistService.addMovie(this.movie);
  }

}
