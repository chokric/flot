import { TestBed } from '@angular/core/testing';

import { TypeAssuranceService } from './type-assurance.service';

describe('TypeAssuranceService', () => {
  let service: TypeAssuranceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeAssuranceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
