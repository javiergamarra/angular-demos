import { Component, OnInit } from '@angular/core';

enum TalkType {
  TALK, WORKSHOP
}

const TALKS: any[] = [{
  title: 'Angular 5 is released!',
  time: '09:00',
  type: TalkType.TALK,
}];

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
    this.talk = TALKS[0];
  }

  color(type) {
    return type === TalkType.TALK ? 'red' : 'yellow';
  }

  onClick() {
    console.log('click!');
  }

  onKeyUp(value) {
    this.talk = TALKS.filter(x => x.title.toLowerCase().indexOf(value.toLowerCase()) !== -1)[0] || {};
  }
}


