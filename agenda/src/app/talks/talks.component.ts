import { Component, OnInit } from '@angular/core';

export enum TalkType {
  TALK, WORKSHOP
}

const TALKS: any[] = [
  {title: 'Angular 5 is released!', time: '09:00', type: TalkType.TALK},
  {title: 'RxJS is pretty cool :D', time: '10:00', type: TalkType.TALK},
  {title: 'Learn ionic3', time: '11:00', type: TalkType.WORKSHOP},
  {title: ' Doubts and questions '},
];

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<any>;

  constructor() {

  }

  ngOnInit() {
    this.talks = TALKS;
  }

  onClick(talk) {
    console.log(talk);
  }

  onKeyUp(value) {
    this.talks = TALKS.filter(x => x.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}


