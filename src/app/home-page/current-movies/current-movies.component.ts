import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../Services/movies.service';
import {Movie} from '../../Services/movies.interface';
import { MovieObj } from '../movieObj.interface';

@Component({
  selector: 'app-current-movies',
  templateUrl: './current-movies.component.html',
  styleUrls: ['./current-movies.component.scss']
})
export class CurrentMoviesComponent implements OnInit {

  currentMovies: MovieObj[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getCurrentMovies().subscribe(movies => {
      
    });
  }
}
