import { TestBed } from '@angular/core/testing';

import { DatabaseTableConfigService } from './database-table-config.service';

describe('DatabaseTableConfigService', () => {
  let service: DatabaseTableConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseTableConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
