import { TestBed } from '@angular/core/testing';

import { ServiceArtService } from './service-art.service';

describe('ServiceArtService', () => {
  let service: ServiceArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
