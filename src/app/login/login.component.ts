import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FirestoreService } from '../core/firestore.service';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

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
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.auth.googleLogin();
  }

  loginWithFacebook() {
    this.auth.facebookLogin();
  }

  signOut() {
    this.auth.signOut();
  }

  createAccount() {
    this.router.navigate(['new-user']);
  }

}
