import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-talk',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">

      <input type="text" name="title" ngModel>

      <button>Add talk</button>

    </form>

  `,
  styleUrls: ['./add-talk.component.css']
})
export class AddTalkComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
  }

}
