import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalksComponent } from './talks/talks.component';
import { TalksService } from './talks.service';

@NgModule({
  declarations: [
    AppComponent,
    TalksComponent
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
