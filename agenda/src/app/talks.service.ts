import { Injectable } from '@angular/core';
import { TalkType } from './talk/talk-type';

const TALKS: any[] = [
  {title: 'Angular 5 is released!', time: new Date(), type: TalkType.TALK},
  {title: 'RxJS is pretty cool :D', time: new Date(), type: TalkType.TALK},
  {title: 'Learn ionic3', time: new Date(), type: TalkType.WORKSHOP},
  {title: ' Doubts and questions '},
];

@Injectable()
export class TalksService {

  constructor() {
  }

  getAllTalks() {
    return TALKS;
  }

}
