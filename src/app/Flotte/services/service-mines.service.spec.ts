import { TestBed } from '@angular/core/testing';

import { ServiceMinesService } from './service-mines.service';

describe('ServiceMinesService', () => {
  let service: ServiceMinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceMinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
