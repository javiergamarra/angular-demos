import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TalksService } from '../talks.service';

@Component({
  selector: 'app-add-talk',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">

      <div class="field">
        <label for="title">Name</label>
        <input type="text" name="title" required [formControl]="nameControl" minlength="8">
        <span *ngIf="!nameControl.valid && nameControl.touched">Name is invalid</span>
      </div>

      <div class="field">
        <label for="date">Date</label>
        <input type="text" name="date" required [formControl]="form.controls.date">
      </div>

      <button [disabled]="!form.valid" class="submit">Add talk</button>

    </form>

  `,
  styleUrls: ['./add-talk.component.css']
})
export class AddTalkComponent implements OnInit {

  form;
  nameControl;

  constructor(private fb: FormBuilder, private talkService: TalksService) {

    this.nameControl = new FormControl('', [Validators.required, this.myValidator]);

    this.form = fb.group({
      title: this.nameControl,
      date: ''
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.talkService.saveTalk(this.form.value).subscribe(x => console.log(x));
  }

  myValidator(ngControl: FormControl) {
    if (ngControl.value === 'nhpatt') {
      return {invalid: 'always'};
    }
  }
}
