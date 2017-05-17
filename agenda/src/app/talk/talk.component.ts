import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TalkType } from '../talks/talks.component';

@Component({
  selector: 'app-talk',
  template: `{{talk.time}} <span [style.color]="color(talk.type)" *ngIf="talk.time">|</span> {{talk.title}}`,
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Input() talk;

  constructor() {
  }

  ngOnInit() {
  }

  color() {
    return this.talk.type === TalkType.TALK ? 'red' : 'yellow';
  }

}
