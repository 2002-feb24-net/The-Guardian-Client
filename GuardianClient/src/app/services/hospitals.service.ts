import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Hospital from '../models/hospital';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  //private baseUrl = environment.ApiBaseUrl;
  private baseUrl = 'https://localhost:44377/';
  view: string = "main";

  constructor(private http: HttpClient) { }
  hospital: Hospital = {
    id: 1,
    Name: "Baylor Scott & White Heart and Vascular Hospital",
    Address: "621 North Hall Street",
    City: "Dallas",
    State: "TX",
    Zip: 75226,
    Phone: "(214) 820-0600",
    Website: "http://www.baylorhearthospital.com/handler.cfm?event=practice,main",
    AggClericalStaffRating: 4,
    AggFacilityRating: 3,
    AggMedicalStaffRating: 2,
    AggOverallRating: 3
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
  //Using the addresses of the hospital and user input
  //Get the distances between them using google maps api distance matrix
  GetDistances(){

  }
  //Allows the components to change the message
  changeHospitalMessage(hospitalSelect: Hospital,viewChange: string) {
    this.messageSource.next(hospitalSelect);
    this.messageView.next(viewChange);
  }
}
