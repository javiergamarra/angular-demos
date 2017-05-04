import { NgModule } from '@angular/core';
import { TalksComponent } from './talks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TalksComponent],
  exports: [TalksComponent]
})
export class TalksModule {
}
