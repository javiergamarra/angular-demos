import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talk = 'Angular 5 is released!';

  constructor() {
  }

  ngOnInit() {
    setInterval(() => this.talk = Math.random().toString(), 1000);
  }

}
