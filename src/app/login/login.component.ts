import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FirestoreService } from '../core/firestore.service';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl();
  password = new FormControl();

  constructor(
    private firestore: FirestoreService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    throw new Error('login() not implemented yet');
  }

  loginWithGoogle() {
    this.auth.googleLogin();
  }

  loginWithFacebook() {
    this.auth.facebookLogin();
  }

  displayUserInfo() {
    console.log(this.auth.currentUser);
  }

  isLoggedIn(): boolean {
    console.log(this.auth.authenticated);
    return this.auth.authenticated;
  }

  signOut() {
    this.auth.signOut();
  }

  newUser() {
    console.log(this.auth.newUser);
  }

}
