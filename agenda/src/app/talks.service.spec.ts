import { TestBed, inject } from '@angular/core/testing';

import { TalksService } from './talks.service';

describe('TalksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TalksService]
    });
  });

  it('should be created', inject([TalksService], (service: TalksService) => {
    expect(service).toBeTruthy();
  }));
});
