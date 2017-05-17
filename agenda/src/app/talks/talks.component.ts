import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talk;

  constructor() {
  }

  ngOnInit() {
    this.talk = {
      title: 'Angular 5 is released!',
      time: '09:00',
      type: TalkType.TALK,
    };
  }

  color(type) {
    return type === TalkType.TALK ? 'red' : 'yellow';
  }

  onClick() {
    console.log('click!');
  }
}

enum TalkType {
  TALK, WORKSHOP
}
