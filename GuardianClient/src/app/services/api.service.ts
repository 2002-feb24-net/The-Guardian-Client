import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Hospital from '../models/hospital';
import Review from '../models/review';
import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.guardianApiBaseUrl;
  private email;
  private password;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  private locationSource = new BehaviorSubject('default message');
  currentLocation = this.locationSource.asObservable();

  constructor(private httpClient: HttpClient) { }
  //Handles user input between components
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  changeLocation(message: string){
    this.locationSource.next(message);
  }

  getUser(email: string,password: string) {
    return this.httpClient.get<User>(`${this.baseUrl}api/users/${email}/${password}`)
      .toPromise();
  }




}
