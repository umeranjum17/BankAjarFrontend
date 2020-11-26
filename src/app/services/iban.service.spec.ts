import { TestBed } from '@angular/core/testing';

import { IbanService } from './iban.service';

describe('IbanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IbanService = TestBed.get(IbanService);
    expect(service).toBeTruthy();
  });
});
