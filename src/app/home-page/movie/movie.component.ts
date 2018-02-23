import { Component, OnInit, Input } from '@angular/core';
import { MovieObj } from '../movieObj.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: MovieObj;
  @Input() width: string;

  constructor() { }

  ngOnInit() {
  }

}
