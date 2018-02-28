import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { MovieObj } from '../movieObj.interface';

@Injectable()
export class FirebaseService {

  constructor(
    private afs: AngularFirestore
  ) { }

  public addMovie(movie: MovieObj) {
    this.afs.collection<MovieObj>('movies').doc<MovieObj>(movie.fireId).set(movie);
  }

}
