import { TestBed } from '@angular/core/testing';

import { SamplesErrorInterceptorService } from './samples-error-interceptor.service';

describe('SamplesErrorInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamplesErrorInterceptorService = TestBed.get(SamplesErrorInterceptorService);
    expect(service).toBeTruthy();
  });
});
