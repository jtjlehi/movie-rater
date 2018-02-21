import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../Services/movies.service';
import {Movie} from '../../Services/movies.interface';
import { MovieObj } from '../movieObj.interface';
import * as _ from 'lodash';
import { Configuration } from '../../Services/configuration.interface';
import { ImgService } from '../../img.service';

@Component({
  selector: 'app-current-movies',
  templateUrl: './current-movies.component.html',
  styleUrls: ['./current-movies.component.scss']
})
export class CurrentMoviesComponent implements OnInit {

  imgUrls: string[];
  currentMovies: MovieObj[];

  constructor(
    private movieService: MovieService,
    private imgService: ImgService
  ) {
  }

  ngOnInit() {
    this.imgService.getImgUrls().then(urls => {
      console.log('imgUrls: ', urls);
      this.imgUrls = urls;
    });
    this.movieService.getCurrentMovies().subscribe(movies => {
      console.log('current movies: ', movies);
      const returnMovie = _.chain(movies)
        .map((movie) => {
          return {
            title: movie.title,
            description: movie.overview,
            image: {
              url: this.imgUrls[(this.imgUrls.length - 1)] + movie.poster_path,
              poster_ref: movie.poster_path,
              description: `movie poster for ${movie.title}`
            },
            public_rating: movie.vote_average
          }
        }).value();
      console.log('changed movie: ', returnMovie);
      this.currentMovies = returnMovie;
    });
  }
}
