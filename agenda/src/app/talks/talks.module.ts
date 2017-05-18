import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksComponent } from './talks.component';
import { TalkComponent } from '../talk/talk.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TalksComponent,
    TalkComponent,
  ],
  exports: [TalksComponent]
})
export class TalksModule {
}
