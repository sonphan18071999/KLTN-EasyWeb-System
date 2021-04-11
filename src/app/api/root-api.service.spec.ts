import { TestBed } from '@angular/core/testing';

import { RootApiService } from './root-api.service';

describe('RootApiService', () => {
  let service: RootApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
