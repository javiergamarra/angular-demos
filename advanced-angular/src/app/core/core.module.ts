import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksService } from './talks.service';
import { TalksConfig } from './talks-config';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TalksService]
})
export class CoreModule {

  static forRoot(config: TalksConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: TalksConfig, useValue: config}
      ]
    };
  }
}
