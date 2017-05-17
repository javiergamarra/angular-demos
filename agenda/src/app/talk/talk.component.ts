import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TalkType } from '../talks/talks.component';

@Component({
  selector: 'app-talk',
  template: `{{talk.time | date}} <span [style.color]="color(talk.type)" *ngIf="talk.time">|</span> {{talk.title}} <span
    (click)="favorite()">♥</span>`,
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Input() talk;

  @Output() event = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  color() {
    return this.talk.type === TalkType.TALK ? 'red' : 'yellow';
  }

  favorite() {
    this.event.emit(this.talk);
  }

}
