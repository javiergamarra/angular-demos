import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksComponent } from './talks.component';
import { TalksService } from '../talks.service';
import { TalkDirective } from '../talk/talk.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TalksComponent, TalkDirective],
  providers: [TalksService],
  exports: [TalksComponent]
})
export class TalksModule {
}
