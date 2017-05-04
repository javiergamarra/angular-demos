import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkDirective } from './talk.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TalkDirective],
  exports: [TalkDirective,
    CommonModule, FormsModule]
})
export class SharedModule {
}
