import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-talk',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">

      <input type="text" name="title" ngModel>

      <input type="text" name="date" [(ngModel)]="date" required>

    </form>

  `,
  styleUrls: ['./add-talk.component.css']
})
export class AddTalkComponent implements OnInit {

  date;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
  }

}
