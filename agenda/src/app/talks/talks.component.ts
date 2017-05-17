import { Component, OnInit } from '@angular/core';
import { TalksService } from '../talks.service';


@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks: Array<any>;

  constructor(private talksService: TalksService) {

  }

  ngOnInit() {
    this.talks = this.talksService.getAllTalks();
  }

  onClick(talk) {
    console.log(talk);
  }

  onKeyUp(value) {
    this.talks = this.talksService.getAllTalks().filter(x => x.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}


