import { Injectable } from '@angular/core';

import { MovieObj } from '../movieObj.interface';
import { AuthService } from '../../core/auth.service';
import { User } from '../../core/interfaces/user.interface';

import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class WishlistService {

  uid: string = '';
  private userDoc: AngularFirestoreDocument<User> = null;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) {
    authService.userObservable.subscribe(user => {
      if (!this.isUser) {
        this.uid = user.uid;
        this.setUserDoc();
      }
    });
  }

  // checks if they are a user
  private get isUser(): boolean {
    return this.uid !== '';
  }

  // adds the item to firebase
  public addMovie(movie: MovieObj) {
    if (this.isUser) {

    } else {

    }
    throw new Error('WishlistService.addMovie() not implemented');
    // TODO: check if item already exists in firebase
  }

  public removeMovie(movieId) {
    if (this.isUser) {

    } else {
      
    }
    throw new Error('WishlistService.removeMovie() not implemented');
  }

  // displays the users wishlist
  public displayWishList() {
    if (this.isUser) {

    } else {
      
    }
    throw new Error('WishlistService.displayWishList() not implemented');
  }

  // this sets the userDoc property
  private setUserDoc() {
    if (this.isUser) {
      this.userDoc = this.afs.doc<User>(`users/${this.uid}`);
    }
  }

}
