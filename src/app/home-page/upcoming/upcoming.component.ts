import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../Services/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.getUpcomingMovies().subscribe((movies) => {
      console.log(movies);
    });
  }

}
