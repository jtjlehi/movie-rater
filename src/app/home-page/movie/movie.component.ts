import { Component, OnInit, Input } from '@angular/core';
import { MovieObj } from '../movieObj.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: MovieObj;
  @Input() inWishList: boolean;
  @Input() width: string;

  constructor(private wishListService: WishListService) { }

  ngOnInit() {
  }

  addMovieToWishList(){
    this.wishListService.addMovie(this.movie);
  }
}
