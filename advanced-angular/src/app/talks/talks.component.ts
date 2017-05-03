import { Component, OnInit } from '@angular/core';
import { TalksService } from '../talks.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css'],
  styles: [
      `:host {
      display: block;
      padding-left: 20px;
    }`
  ]
})
export class TalksComponent implements OnInit {

  talks$: Observable<any>;

  constructor(private talkService: TalksService) {
  }

  ngOnInit() {
    this.talks$ = this.talkService.getTalks();
  }

  onClicked($event) {
    console.log($event);
  }

}
