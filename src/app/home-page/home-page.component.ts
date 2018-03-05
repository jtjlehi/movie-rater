import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  navLinks: Array<{
    label: string;
    path: string;
  }> = [
    { 'label': 'profile',
      'path': 'profile'
    },
    { 'label': 'movies',
      'path': 'movies'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
