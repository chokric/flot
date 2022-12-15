import { TestBed } from '@angular/core/testing';

import { CompagnieAssuranceService } from './compagnie-assurance.service';

describe('CompagnieAssuranceService', () => {
  let service: CompagnieAssuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompagnieAssuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
