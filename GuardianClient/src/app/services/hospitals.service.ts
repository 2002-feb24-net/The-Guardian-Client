import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Hospital from '../models/hospital';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  private baseUrl = environment.guardianApiBaseUrl;
  view: string = "main";
  distance: any[];
  constructor(private http: HttpClient) { }
  //giving it a mock hospital for initialization incase the api is down
  hospital: Hospital = {
    id: 1,
    name: "Baylor Scott & White Heart and Vascular Hospital",
    address: "621 North Hall Street",
    city: "Dallas",
    state: "TX",
    zip: 75226,
    phone: "(214) 820-0600",
    website: "http://www.baylorhearthospital.com/handler.cfm?event=practice,main",
    aggClericalStaffRating: 4,
    aggFacilityRating: 3,
    aggMedicalStaffRating: 2,
    aggOverallRating: 3,
  };
  private messageSource = new BehaviorSubject(this.hospital);
  private messageView = new BehaviorSubject(this.view);
  currentHospital = this.messageSource.asObservable();
  currentView = this.messageView.asObservable();
  //Using our ASP.NET RESTful API
  //Get all hospitals 
  //An idea to improve this would be to only get hospitals of a specific state and the surrounding states
  GetHospitals(){
    return this.http.get<Hospital[]>(`${this.baseUrl}api/Hospitals`)
      .toPromise();
  }
  //Allows the components to change the message
  changeHospitalMessage(hospitalSelect: Hospital,viewChange: string) {
    this.messageSource.next(hospitalSelect);
    this.messageView.next(viewChange);
  }
}
