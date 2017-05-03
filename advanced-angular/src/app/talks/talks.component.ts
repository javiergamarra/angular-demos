import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  host: {
    '[style.display]': '"block"',
    '[style.padding-left]': '"20px"',
  },
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css'],
  // styles: [
  //     `:host {
  //     display: block;
  //     padding-left: 20px;
  //   }`
  // ]
})
export class TalksComponent implements OnInit {

  talks: Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.talks = [
      {name: 'Angular'},
      {name: 'Rx'},
      {name: 'Modules'}
    ];
  }

  onClicked($event) {
    console.log($event);
  }

}
