import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent implements OnInit {
  friendName: string = 'Joey';
  profileImg: string = '';

  constructor() { }

  ngOnInit() {
    this.profileImg = '';
  }
}
