import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {UpcomingComponent} from './home-page/upcoming/upcoming.component';
import {CurrentMoviesComponent} from './home-page/current-movies/current-movies.component';

import { AuthService } from './core/auth.service';
import { NewUserComponent } from './login/new-user/new-user.component';
import {MoviesTabComponent} from "./home-page/movies-tab/movies-tab.component";
import {ProfileTabComponent} from "./home-page/profile-tab/profile-tab.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'upcoming',
    component: UpcomingComponent
  },
  {
    path: 'current',
    component: CurrentMoviesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'movies',
    component: MoviesTabComponent,
  },
  {
    path: 'profile',
    component: ProfileTabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
