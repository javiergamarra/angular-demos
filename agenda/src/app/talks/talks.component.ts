import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talk = {
    title: 'Angular 5 is released!',
    time: '09:00',
    type: TalkType.TALK,
  };

  constructor() {
  }

  ngOnInit() {
  }

  color(type) {
    return type === TalkType.TALK ? 'red' : 'yellow';
  }
}

enum TalkType {
  TALK, WORKSHOP
}
