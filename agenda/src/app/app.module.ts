import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalksService } from './talks.service';
import { TalksModule } from './talks/talks.module';
import { AddTalkModule } from './add-talk/add-talk.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TalksModule,
    AddTalkModule,
    SharedModule
  ],
  providers: [TalksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
