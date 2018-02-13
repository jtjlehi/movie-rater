///<reference path="../../../node_modules/rxjs/operators/catchError.d.ts"/>
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import {Movie} from '../Services/movies.data';


@Injectable()
export class MovieService {

  public movieUrl: string = 'http://www.omdbapi.com/?s=happy&apikey=afa663eb';
  private Movies: string;

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient
      .get<Movie[]>(this.movieUrl)
      .pipe(catchError(this.handleError));
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.httpClient
      .get<Movie[]>(this.movieUrl)
      .pipe(
        map((movies: Movie[]) => movies.find(movie => movie.imdbID === movieId)),
        catchError(this.handleError)
    );
  }

  handleError(error) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}
