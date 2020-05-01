import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Hospitals from '../models/hospitals';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {
  //private baseUrl = environment.ApiBaseUrl;
  private baseUrl = 'https://localhost:44377/';
  constructor(private http: HttpClient) { }
  //Using our ASP.NET RESTful API
  //Get all hospitals 
  //An idea to improve this would be to only get hospitals of a specific state and the surrounding states
  GetHospitals(){
    return this.http.get<Hospitals[]>(`${this.baseUrl}api/Hospitals`)
      .toPromise();
  }
  //Using the addresses of the hospital and user input
  //Get the distances between them using google maps api distance matrix
  GetDistances(){

  }
}
