import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalksModule } from './talks/talks.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AddTalkModule } from './add-talk/add-talk.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
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
