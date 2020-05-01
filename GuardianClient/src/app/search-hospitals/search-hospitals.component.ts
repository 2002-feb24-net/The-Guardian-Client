/// <reference types="@types/googlemaps" />
import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input } from '@angular/core';
import {} from "googlemaps";
import { HospitalsService } from '../services/hospitals.service';
import Hospitals from '../models/hospitals';
import { HttpErrorResponse } from '@angular/common/http';
/*
**The Search Hospital Component is in charge of displaying the hospital list and parsing the users input to get
**relative distance information so that the list of hospitals can be ordered by distance.
**/
@Component({
  selector: 'app-search-hospitals',
  templateUrl: './search-hospitals.component.html',
  styleUrls: ['./search-hospitals.component.css']
})
export class SearchHospitalsComponent implements OnInit {

  hospitals: Hospitals[] = [];
  error: string | undefined;
  constructor(
    public hospitalApi: HospitalsService
  ) { }

  ngOnInit(): void {
    //this.GetHospitals()
  }
  //Features to implement:
  //Get Hospitals()
  //Fetch the hospitals from the api
  GetHospitals(){
    return this.hospitalApi.GetHospitals()
    .then(
      hospitals => {
        this.hospitals = hospitals; //uses promises to accept the api response
        this.resetError(); //resets error message
      }, 
      error => {
        this.handleError(error); //handles error
      } 
    );
    this.GetDistances();
  }
  //Fetch distance between addresses using a distance matrix
  //Example: https://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters
  GetDistances(){
    //Waiting for api to be done before implementing

  }
  //Change location function
  //Searchbar should be able to tell the map api to change the origin point and update the map
  ChangeLocation(){
    //Needs implementation

    this.GetDistances();
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.error = `An error occurred: ${error.error.message}`; //in the event of a network error. Add error message.
    } else {
      this.error = `Backend returned code ${error.status}, body was: ${error.error}`; //If the response status code was an error then display said error
    }
  }
  resetError() {
    this.error = undefined; //clears error message
  }
}
