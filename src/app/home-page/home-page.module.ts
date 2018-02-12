import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { HomePageComponent } from './home-page.component';
import { FriendsComponent } from './friends/friends.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CurrentMoviesComponent } from './current-movies/current-movies.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    CurrentMoviesComponent,
    HomePageComponent,
    FriendsComponent,
    WishListComponent,
    UpcomingComponent,
  ],
  exports: [
    CurrentMoviesComponent,
    HomePageComponent,
    FriendsComponent,
    WishListComponent,
    UpcomingComponent
  ]
})
export class HomePageModule { }
