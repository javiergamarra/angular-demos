import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalksModule } from './talks/talks.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AddTalkModule } from './add-talk/add-talk.module';
import { RouterModule, Routes } from '@angular/router';
import { AddTalkComponent } from 'app/add-talk/add-talk.component';
import { TalksComponent } from './talks/talks.component';

const appRoutes: Routes = [
  {path: 'add-talk', component: AddTalkComponent},
  {path: 'talks', component: TalksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    CoreModule.forRoot({server: 'http://data.agenda.wedeploy.io/talks'}),
    TalksModule,
    AddTalkModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
