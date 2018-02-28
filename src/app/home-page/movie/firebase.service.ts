import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MovieObj } from '../movieObj.interface';
import * as _ from 'lodash';

@Injectable()
export class FirebaseService {

  private localMovies: MovieObj[] = [];
  private storedMovies: MovieObj[];

  constructor(
    private afs: AngularFirestore
  ) {
    afs.collection<MovieObj>('movies').valueChanges().subscribe(storedMovies => {
      this.storedMovies = storedMovies;
    });
  }

  public addMovie(movie: MovieObj) {
    this.afs.collection<MovieObj>('movies').doc<MovieObj>(movie.fireId).set(movie);
  }

  private get newMovies(): MovieObj[] {
    return _.differenceBy(this.localMovies, this.storedMovies, 'fireId');
  }

  public addLocalMovies(addedMovies: MovieObj[]) {
    this.localMovies = _.concat(this.localMovies, addedMovies);
  }

}
