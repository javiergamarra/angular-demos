import { NgModule } from '@angular/core';
import { TalksComponent } from './talks.component';
import { TalksService } from '../talks.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TalksComponent],
  providers: [TalksService],
  exports: [TalksComponent]
})
export class TalksModule {
}
