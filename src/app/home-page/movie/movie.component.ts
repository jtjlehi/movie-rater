import { Component, OnInit, Input } from '@angular/core';
import { MovieObj } from '../movieObj.interface';
import { WishlistService } from '../services/wishlist.service';
import { FirebaseService } from './firebase.service';
import { AuthService } from '../../core/auth.service';

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
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    console.log(this.movie);
    this.firebaseService.addMovies(this.movie);
    console.log('local movies: ', this.firebaseService.localMovies);
  }

  addMovieToWishlist() {
    this.wishlistService.addMovie(this.movie);
  }
  removeMovieFromWishlist() {
    this.wishlistService.removeMovie(this.movie.fireId);
  }

}
