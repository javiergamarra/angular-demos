import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';
import { TalksService } from './talks.service';
import { AddTalkComponent } from './add-talk/add-talk.component';

@NgModule({
  declarations: [
    AppComponent,
    TalksComponent,
    TalkComponent,
    AddTalkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TalksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
