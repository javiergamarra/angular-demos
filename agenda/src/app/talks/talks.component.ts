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
    setTimeout(() => {
        this.talk = {
          title: 'Angular 5 is released!',
          time: '09:00',
          type: TalkType.TALK,
        };
      }, 1000
    );
  }

  color(type) {
    return type === TalkType.TALK ? 'red' : 'yellow';
  }
}

enum TalkType {
  TALK, WORKSHOP
}
