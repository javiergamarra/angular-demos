import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksService } from '../talks.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TalksService],
})
export class CoreModule {
}
