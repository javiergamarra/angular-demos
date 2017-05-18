import { NgModule } from '@angular/core';
import { TalksComponent } from './talks.component';
import { TalkComponent } from '../talk/talk.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TalksComponent,
    TalkComponent,
  ],
  exports: [TalksComponent]
})
export class TalksModule {
}
