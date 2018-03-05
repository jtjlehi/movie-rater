import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { HomePageComponent } from './home-page.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { CurrentMoviesComponent } from './current-movies/current-movies.component';
import { CoreModule} from '../core/core.module';
import { MovieService} from '../Services/movies.service';
import { HttpClientModule} from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { ImgService } from './services/img.service';
import { WishlistService } from './services/wishlist.service';
import { MatTabsModule } from '@angular/material/tabs';
import { FriendCardComponent } from './friend-card/friend-card.component';
import { MoviesTabComponent } from './movies-tab/movies-tab.component';
import { ProfileTabComponent } from './profile-tab/profile-tab.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
  ],
  declarations: [
    CurrentMoviesComponent,
    HomePageComponent,
    WishListComponent,
    UpcomingComponent,
    MovieComponent,
    FriendCardComponent,
    MoviesTabComponent,
    ProfileTabComponent,
    NavBarComponent,
  ],
  providers: [
    MovieService,
    ImgService,
    WishlistService
  ],
  exports: [
    CurrentMoviesComponent,
    HomePageComponent,
    WishListComponent,
    UpcomingComponent
  ]
})
export class HomePageModule { }
