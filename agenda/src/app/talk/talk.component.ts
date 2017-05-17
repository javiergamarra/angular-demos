import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk',
  template: `{{talk}}`,
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Input() talk;

  constructor() {
  }

  ngOnInit() {
  }

}
