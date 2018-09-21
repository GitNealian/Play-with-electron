import { TestBed, inject } from '@angular/core/testing';

import { RefresherService } from './refresher.service';

describe('RefresherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefresherService]
    });
  });

  it('should be created', inject([RefresherService], (service: RefresherService) => {
    expect(service).toBeTruthy();
  }));
});
