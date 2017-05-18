import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksComponent } from './talks.component';
import { TalkComponent } from '../talk/talk.component';
import { AddTalkComponent } from '../add-talk/add-talk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TalksComponent,
    TalkComponent,
    AddTalkComponent
  ],
  exports: [TalksComponent, AddTalkComponent]
})
export class TalksModule {
}
