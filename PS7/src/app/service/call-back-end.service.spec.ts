import { TestBed } from '@angular/core/testing';

import { CallBackEndService } from './call-back-end.service';

describe('CallBackEndService', () => {
  let service: CallBackEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallBackEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
