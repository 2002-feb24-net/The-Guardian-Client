import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse, HttpClient, HttpHandler } from '@angular/common/http';
import { HospitalsService } from './hospitals.service';

describe('HospitalsService', () => {
  let service: HospitalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler]
    });
    service = TestBed.inject(HospitalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
