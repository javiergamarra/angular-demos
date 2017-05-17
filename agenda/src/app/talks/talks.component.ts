import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talk = {name: 'Angular 5 is released!'};

  valid = true;
  isSelected = true;
  isSpecial = true;

  constructor() {
  }

  ngOnInit() {
  }

}
