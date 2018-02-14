import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  signInWithGoogle() {
    this.auth.googleLogin();
  }

  signInWithFacebook() {
    this.auth.facebookLogin();
  }

}
