import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { redirectsGuard } from './redirects.guard';

describe('redirectsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => redirectsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
