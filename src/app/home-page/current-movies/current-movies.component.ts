import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../Services/movies.service';
import {Movie} from '../../Services/movies.data';

@Component({
  selector: 'app-current-movies',
  templateUrl: './current-movies.component.html',
  styleUrls: ['./current-movies.component.scss']
})
export class CurrentMoviesComponent implements OnInit {
  currentMovie: string;
  cardCourses: string;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getUpcomingMovies().subscribe((movies: Movie[]) => {
      console.log(movies);
    });
  }
}
