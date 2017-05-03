import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksComponent } from './talks.component';
import { TalksService } from '../talks.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TalksComponent],
  providers: [TalksService],
  exports: [TalksComponent]
})
export class TalksModule {
}
