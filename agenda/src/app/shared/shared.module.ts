import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TalkDirective } from 'app/talk.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TalkDirective],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, TalkDirective]
})
export class SharedModule {
}
