import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { MovieObj } from '../movieObj.interface';
import 'rxjs/add/operator/toPromise';
import * as _ from 'lodash';

@Injectable()
export class FirebaseService {

  public localMovies: MovieObj[] = [];

  constructor(
    private afs: AngularFirestore
  ) {
  }

  public addMovies(movie: MovieObj) {
    this.addLocalMovie(movie);
    this.addNewMovies();
  }

  private addNewMovies(): void {
    this.getStoredMovies()
    .then(newMovies => {
      console.log('new movies');
      newMovies.forEach(movie => {
        this.afs.collection<MovieObj>('movies').add(movie);
      });
    });
  }

  private getNewMovies(): Promise<MovieObj[]> {
    console.log('get newMovies fired');
    return this.getStoredMovies()
    .then(storedMovies => {
      console.log('stored movies: ', storedMovies);
      return _.differenceBy(this.localMovies, storedMovies, 'title');
    });
  }

  private getStoredMovies(): Promise<MovieObj[]> {
    return this.afs.collection<MovieObj>('movies').valueChanges().toPromise()
    .then(storedMovies => {
      console.log('storedMovies: ', storedMovies);
      return _.differenceBy(this.localMovies, storedMovies, 'title');
    });
  }

  public addLocalMovie(addedMovie: MovieObj) {
    this.localMovies = _
      .chain(this.localMovies)
      .concat(addedMovie)
      .uniqBy('title')
      .value();
  }

}
