import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { MovieObj } from '../movieObj.interface';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishlist: MovieObj[];

  constructor(
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.wishlistService.displayWishList().subscribe(wishlist => {
      this.wishlist = wishlist;
    });
  }

}
