import { TestBed } from '@angular/core/testing';

import { NewsapiserviceService } from './newsapiservice.service';

describe('NewsapiserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsapiserviceService = TestBed.get(NewsapiserviceService);
    expect(service).toBeTruthy();
  });
});
