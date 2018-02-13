import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-movies',
  templateUrl: './current-movies.component.html',
  styleUrls: ['./current-movies.component.scss']
})
export class CurrentMoviesComponent implements OnInit {

  constructor() { }
  ngOnInit() {
      this.currentMovie = this.currentMovies.getGolfData().subscribe(data => {
        this.currentMovie = data;
        this.cardCourses = this.currentMovie.courses;
      });

    }
}
