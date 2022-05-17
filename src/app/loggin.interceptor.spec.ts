import { TestBed } from '@angular/core/testing';

import { LogginInterceptor } from './loggin.interceptor';

describe('LogginInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LogginInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LogginInterceptor = TestBed.inject(LogginInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
