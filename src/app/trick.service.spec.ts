import { TestBed, inject } from '@angular/core/testing';

import { TrickService } from './trick.service';

describe('TrickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrickService]
    });
  });

  it('should be created', inject([TrickService], (service: TrickService) => {
    expect(service).toBeTruthy();
  }));
});
