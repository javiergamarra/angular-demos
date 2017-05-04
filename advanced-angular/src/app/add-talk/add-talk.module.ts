import { NgModule } from '@angular/core';
import { AddTalkComponent } from './add-talk.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: AddTalkComponent},
];

@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(appRoutes),
  ],
  declarations: [AddTalkComponent],
})
export class AddTalkModule {
}
