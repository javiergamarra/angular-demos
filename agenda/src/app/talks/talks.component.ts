import { Component, OnInit } from '@angular/core';


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
    // this.talks = TALKS;
  }

  onClick(talk) {
    console.log(talk);
  }

  onKeyUp(value) {
    // this.talks = TALKS.filter(x => x.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}


