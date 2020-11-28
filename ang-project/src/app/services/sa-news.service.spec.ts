import { TestBed } from '@angular/core/testing';

import { SaNewsService } from './sa-news.service';

describe('SaNewsService', () => {
  let service: SaNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
