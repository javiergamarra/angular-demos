import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './shared/CanActivateGuard';

const routes: Routes = [
  {path: '', loadChildren: 'app/talks/talks.module#TalksModule'},
  {path: 'talk/:id', loadChildren: 'app/talks/talks.module#TalksModule'},
  {path: 'add', loadChildren: 'app/add-talk/add-talk.module#AddTalkModule', canActivate: [CanActivateGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
