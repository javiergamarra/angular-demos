import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-talk',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">

      <input type="text" name="title" required [formControl]="form.controls.title">

      <input type="text" name="date" required [formControl]="form.controls.date">

      <button [disabled]="!form.valid">Add talk</button>

    </form>

  `,
  styleUrls: ['./add-talk.component.css']
})
export class AddTalkComponent implements OnInit {

  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      title: 'title',
      date: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
  }

}
