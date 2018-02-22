import { Injectable } from '@angular/core';
import { MovieObj } from '../movieObj.interface';

@Injectable()
export class WishlistService {

  userId: string;

  constructor() { }

  // adds the item to firebase
  public addMovie(movie: MovieObj) {
    throw new Error('WishlistService.addMovie() not implemented');
    // TODO: check if item already exists in firebase
  }

  public removeMovie(movieId) {
    throw new Error('WishlistService.removeMovie() not implemented');
  }

  // displays the users wishlist
  public displayWishList() {
    throw new Error('WishlistService.displayWishList() not implemented');
  }

}
