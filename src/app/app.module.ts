import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { FriendsComponent } from './friends/friends.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    WishListComponent,
    UpcomingComponent,
    LoginComponent,
    HomePageComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
