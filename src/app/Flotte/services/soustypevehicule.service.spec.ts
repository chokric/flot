import { TestBed } from '@angular/core/testing';

import { SousTypevehiculeService } from './soustypevehicule.service';

describe('SoustypevehiculeService', () => {
  let service: SousTypevehiculeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SousTypevehiculeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
