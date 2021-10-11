import { TestBed } from '@angular/core/testing';

import { ColegioServiceService } from './colegio-service.service';

describe('ColegioServiceService', () => {
  let service: ColegioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColegioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
