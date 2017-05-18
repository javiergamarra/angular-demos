import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTalkComponent } from './add-talk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AddTalkComponent],
  exports: [AddTalkComponent]
})
export class AddTalkModule {
}
