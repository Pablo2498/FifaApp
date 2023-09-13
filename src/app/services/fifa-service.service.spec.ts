import { TestBed } from '@angular/core/testing';

import { FifaServiceService } from './fifa-service.service';

describe('FifaServiceService', () => {
  let service: FifaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FifaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
