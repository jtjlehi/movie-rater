import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { HomePageComponent } from './home-page.component';
import { FriendsComponent } from './friends/friends.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HomePageComponent,
    FriendsComponent,
    WishListComponent,
    UpcomingComponent,
  ],
  exports: [
    HomePageComponent,
    FriendsComponent,
    WishListComponent,
    UpcomingComponent
  ]
})
export class HomePageModule { }
