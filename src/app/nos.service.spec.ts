import { TestBed } from '@angular/core/testing';

import { NosService } from './nos.service';

describe('NosService', () => {
  let service: NosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
