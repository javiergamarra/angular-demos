import { NgModule } from '@angular/core';
import { AddTalkComponent } from './add-talk.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [AddTalkComponent],
  exports: [AddTalkComponent]
})
export class AddTalkModule {
}
