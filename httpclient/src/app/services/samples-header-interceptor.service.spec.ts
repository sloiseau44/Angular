import { TestBed } from '@angular/core/testing';

import { SamplesHeaderInterceptorService } from './samples-header-interceptor.service';

describe('SamplesHeaderInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamplesHeaderInterceptorService = TestBed.get(SamplesHeaderInterceptorService);
    expect(service).toBeTruthy();
  });
});
