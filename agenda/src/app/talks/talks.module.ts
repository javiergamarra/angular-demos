import { TalksComponent } from './talks.component';
import { TalkComponent } from '../talk/talk.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {path: '', component: TalksComponent},
  {path: 'talk/:id', component: TalkComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [
    TalksComponent,
    TalkComponent,
  ],
  exports: [TalksComponent],
})

export class TalksModule {
}
