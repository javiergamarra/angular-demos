import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalksService } from './talks.service';
import { TalksModule } from './talks/talks.module';
import { AddTalkModule } from './add-talk/add-talk.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TalksModule,
    AddTalkModule
  ],
  providers: [TalksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
