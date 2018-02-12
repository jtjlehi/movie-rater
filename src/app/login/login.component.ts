import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirestoreService } from '../core/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl();
  password = new FormControl();

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
  }

  login() {
    throw new Error('login() not implemented yet');
  }

}
