import { TestBed, inject } from '@angular/core/testing';

import { AssistentService } from './assistent.service';

describe('AssisitentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssistentService]
    });
  });

  it('should be created', inject([AssistentService], (service: AssistentService) => {
    expect(service).toBeTruthy();
  }));
});
