import { TestBed, inject } from '@angular/core/testing';

import { MemberDetailsService } from './member-details.service';

describe('MemberDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberDetailsService]
    });
  });

  it('should be created', inject([MemberDetailsService], (service: MemberDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
