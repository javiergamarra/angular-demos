import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-talk',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f)">

      <input type="text" name="title" ngModel required>

      <input type="text" name="date" [(ngModel)]="date" required>

      <button [disabled]="!f.valid">Add talk</button>

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
    console.log(this.date);
  }

}
