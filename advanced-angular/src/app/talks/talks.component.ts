import { Component, OnInit, Renderer2 } from '@angular/core';
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

  constructor(private talkService: TalksService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.talks$ = this.talkService.getTalks();
  }

  onClicked($event, element) {
    console.log($event);
    this.renderer.setStyle(element, 'background-color', 'lightgray');
  }

}
