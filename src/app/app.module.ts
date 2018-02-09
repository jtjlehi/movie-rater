import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { MaterialModule } from './material/material.module';
import { FriendsComponent } from './friends/friends.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    WishListComponent,
    UpcomingComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
