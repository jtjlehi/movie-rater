import { TestBed, inject } from '@angular/core/testing';

import { ImgService } from './img.service';

describe('ImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgService]
    });
  });

  it('should be created', inject([ImgService], (service: ImgService) => {
    expect(service).toBeTruthy();
  }));
});
