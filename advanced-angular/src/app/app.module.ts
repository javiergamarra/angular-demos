import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'add-talk', loadChildren: 'app/add-talk/add-talk.module#AddTalkModule'},
  {path: 'talks', loadChildren: 'app/talks/talks.module#TalksModule'}
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
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
