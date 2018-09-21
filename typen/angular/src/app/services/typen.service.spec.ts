import { TestBed, inject } from '@angular/core/testing';

import { TypenService } from './typen.service';

describe('TypenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypenService]
    });
  });

  it('should be created', inject([TypenService], (service: TypenService) => {
    expect(service).toBeTruthy();
  }));
});
