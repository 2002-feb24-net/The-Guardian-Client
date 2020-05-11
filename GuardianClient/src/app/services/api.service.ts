import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
}
