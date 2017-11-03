import { TestBed, inject } from '@angular/core/testing';

import { IugoHttpService } from './iugo-http.service';

describe('IugoHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IugoHttpService]
    });
  });

  it('should be created', inject([IugoHttpService], (service: IugoHttpService) => {
    expect(service).toBeTruthy();
  }));
});
