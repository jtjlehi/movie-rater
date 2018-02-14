import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FirestoreService } from '../core/firestore.service';
import { AuthService } from '../core/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NewUserComponent } from './new-user/new-user.component';

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
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>,
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
    const newUserRef = this.dialog.open(NewUserComponent);
    newUserRef.afterClosed().subscribe(() => {
      this.dialogRef.close();
    });
  }

}
