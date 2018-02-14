import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userInfo: string;
  loggedIn: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
  }

}
