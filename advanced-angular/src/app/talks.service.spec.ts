import { TestBed, inject } from '@angular/core/testing';

import { TalksService } from './talks.service';

describe('TalksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TalksService]
    });
  });

  it('should ...', inject([TalksService], (service: TalksService) => {
    expect(service).toBeTruthy();
  }));
});
