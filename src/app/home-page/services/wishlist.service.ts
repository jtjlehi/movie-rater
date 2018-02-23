import { Injectable } from '@angular/core';

import { MovieObj } from '../movieObj.interface';
import { AuthService } from '../../core/auth.service';
import { User } from '../../core/interfaces/user.interface';

import { 
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection 
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Query, QuerySnapshot } from '@firebase/firestore-types';

@Injectable()
export class WishlistService {

  uid: string = '';
  private userDoc: AngularFirestoreDocument<User> = null;
  wishlistObservable: Subject<MovieObj[]>;
  private query: Query;

  constructor(
    private authService: AuthService,
    private afs: AngularFirestore
  ) {
    // sets the wishlistObservable at the very beginning 
    this.wishlistObservable = new Subject();
    // subscribes to the users data as defined by the auth service
    authService.userObservable.subscribe(user => {
      if (!this.isUser) {
        this.uid = user.uid;
        this.setUserDoc();
        this.setWishlistObservable();
      }
    });
  }

  // checks if they are a user
  private get isUser(): boolean {
    return this.uid !== '';
  }

  // adds the item to firebase
  public addMovie(movie: MovieObj): Promise<string> {
    return this.queryWishlistCollection(movie.title).then(movieExists => {
      console.log(movieExists);
      if (this.isUser && !movieExists) {
        this.userDoc.collection('wishlist').add(movie);
        return 'movie added';
      } else if (!this.isUser) {
        throw new Error('not a user');
      } else {
        throw new Error('movie exists');
      }
    });
  }

  public queryWishlistCollection(title: string): Promise<boolean> {
    const queriedWishlist = this.userDoc.collection('wishlist', ref => {
      this.query = ref.where('title', '==', title);
      return ref.where('title', '==', title);
    });
    return this.query.get().then(querySnapshot => {
      return !querySnapshot.empty;
    });
  }

  public removeMovie(movieId) {
    if (this.isUser) {

    } else {
      
    }
    throw new Error('WishlistService.removeMovie() not implemented');
  }

  // displays the users wishlist
  public displayWishList(): Subject<MovieObj[]> {
    return this.wishlistObservable;
  }

  // sets an observable that displayWishList() returns
  private setWishlistObservable() {
    this.userDoc.collection<MovieObj>('wishlist').valueChanges().subscribe(wishlist => {
      this.wishlistObservable.next(wishlist);
    });
  }

  // this sets the userDoc property
  private setUserDoc() {
    if (this.isUser) {
      this.userDoc = this.afs.doc<User>(`users/${this.uid}`);
    }
  }

}
