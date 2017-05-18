import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TalkType } from './talk-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-talk',
  template: `{{(talk?.time) | date}} <span [style.color]="color(talk?.type)" *ngIf="talk?.time">|</span> {{talk?.title}}
  <span
    (click)="favorite()">♥</span>`,
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Input() talk;

  @Output() event = new EventEmitter();

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(x => console.log(x));
  }

  ngOnInit() {
  }

  color() {
    return this.talk && this.talk.type === TalkType.TALK ? 'red' : 'yellow';
  }

  favorite() {
    this.event.emit(this.talk);
  }

}
