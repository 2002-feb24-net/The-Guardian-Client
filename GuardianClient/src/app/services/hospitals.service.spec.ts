import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HospitalsService } from './hospitals.service';
import Hospital  from '../models/hospital';

describe('HospitalsService', () => {
  let service: HospitalsService;
  let hospital: Hospital;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient,HttpHandler]
    });
    service = TestBed.inject(HospitalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get hospitals', () => {
    service.GetHospitals();
    expect(service).toBeTruthy();
  });
  it('should change hospitals', () => {
    service.changeHospitalMessage(hospital, 'string');
    expect(service).toBeTruthy();
  });

});
