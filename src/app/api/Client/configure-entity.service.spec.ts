import { TestBed } from '@angular/core/testing';

import { ConfigureEntityService } from './configure-entity.service';

describe('ConfigureEntityService', () => {
  let service: ConfigureEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigureEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
