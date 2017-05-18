import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalksModule } from './talks/talks.module';
import { AddTalkModule } from './add-talk/add-talk.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { TalksComponent } from './talks/talks.component';
import { AddTalkComponent } from './add-talk/add-talk.component';
import { TalkComponent } from './talk/talk.component';

const routes: Routes = [
  {path: '', component: TalksComponent},
  {path: 'talk/:id', component: TalkComponent},
  {path: 'add', component: AddTalkComponent},
  {path: 'add', loadChildren: 'app/add-talk/add-talk.module#AddTalkModule', canActivate: [CanActivateGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TalksModule,
    AddTalkModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
