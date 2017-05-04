import { NgModule } from '@angular/core';
import { TalksComponent } from './talks.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from '../shared/card.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: TalksComponent},
];

@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(appRoutes),
  ],
  declarations: [TalksComponent, CardComponent],
  exports: [TalksComponent],
  entryComponents: [CardComponent]
})
export class TalksModule {
}
