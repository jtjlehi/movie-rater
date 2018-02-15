///<reference path="../../../node_modules/rxjs/operators/catchError.d.ts"/>
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import {Movie} from '../Services/movies.data';


@Injectable()
export class MovieService {

  private movieUrl: string = 'https://api.themoviedb.org/3/movie/';
  private apiKey: string = 'f1dc689823def4f561ce96b21153f793';
  private Movies: string;

  constructor(private httpClient: HttpClient) { }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.httpClient
    // tslint:disable-next-line: no-any
      .get<any>(`${this.movieUrl}upcoming?api_key=${this.apiKey}`)
      .pipe(
        map(response => response.results),
        catchError(this.handleError));
  }
  getCurrentMovies(): Observable<Movie[]> {
    return this.httpClient
    // tslint:disable-next-line: no-any
      .get<any>(`${this.movieUrl}now_playing?api_key=${this.apiKey}`)
      .pipe(
        map(response => response.results),
        catchError(this.handleError));
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
