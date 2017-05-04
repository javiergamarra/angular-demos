import { NgModule } from '@angular/core';
import { TalksComponent } from './talks.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from '../shared/card.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TalksComponent, CardComponent],
  exports: [TalksComponent],
  entryComponents: [CardComponent]
})
export class TalksModule {
}
