import { TestBed } from '@angular/core/testing';

import { MarqueVehiculeService } from './marque-vehicule.service';

describe('MarqueVehiculeService', () => {
  let service: MarqueVehiculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarqueVehiculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
