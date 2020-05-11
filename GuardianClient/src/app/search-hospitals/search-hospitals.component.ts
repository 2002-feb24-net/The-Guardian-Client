/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import {} from "googlemaps";
import { HospitalsService } from '../services/hospitals.service';
import Hospital from '../models/hospital';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
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
  message:string;
  hospitals: Hospital[] = [];
  hospitalSelection: Hospital;
  error: string | undefined;
  view: string = "";
  tempObject: string;
  constructor(
    public hospitalApi: HospitalsService,
    public apiService: ApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.apiService.currentMessage.subscribe(message => this.message = message);
    this.hospitalApi.currentHospital.subscribe(hospital => this.hospitalSelection = hospital);
    this.hospitalApi.currentView.subscribe(view => this.view = view);
    //Making mock hospital data until api is established
    this.hospitals = [{
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
      aggOverallRating: 3
    },
    {
      id: 2,
      name: "Baylor Scott & White Medical Center Uptown",
      address: "2727 East Lemmon Ave.",
      city: "Dallas",
      state: "TX",
      zip: 75204,
      phone: "(214) 443-3000",
      website: "http://www.bmcuptown.com/",
      aggClericalStaffRating: 2,
      aggFacilityRating: 2,
      aggMedicalStaffRating: 2,
      aggOverallRating: 2
    },
    {
      id: 3,
      name: "Baylor University Medical Center",
      address: "3500 Gaston Street",
      city: "Dallas",
      state: "TX",
      zip: 75246,
      phone: "(214) 820-0111",
      website: "http://www.bswhealth.com/locations/dallas/Pages/default.aspx",
      aggClericalStaffRating: 4,
      aggFacilityRating: 4,
      aggMedicalStaffRating: 4,
      aggOverallRating: 4
    },
    {
      id: 4,
      name: "City Hospital at White Rock",
      address: "9440 Poppy Drive",
      city: "Dallas",
      state: "TX",
      zip: 75218,
      phone: " (214) 324-6100",
      website: "http://cityhospital.co/",
      aggClericalStaffRating: 5,
      aggFacilityRating: 5,
      aggMedicalStaffRating: 5,
      aggOverallRating: 5
    },
    {
      id: 5,
      name: "Dallas Medical Center",
      address: "7 Medical Parkway ",
      city: "Dallas",
      state: "TX",
      zip: 75234,
      phone: "(972) 888-7000",
      website: "http://www.dallasmedcenter.com/",
      aggClericalStaffRating: 1,
      aggFacilityRating: 1,
      aggMedicalStaffRating: 1,
      aggOverallRating: 1
    },
    {
      id: 6,
      name: "Dallas OverFlow Example",
      address: "7 Medical Parkway ",
      city: "Dallas",
      state: "TX",
      zip: 75234,
      phone: "(972) 888-7000",
      website: "http://www.dallasmedcenter.com/",
      aggClericalStaffRating: 1,
      aggFacilityRating: 1,
      aggMedicalStaffRating: 1,
      aggOverallRating: 1
    },
  ]
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
  //Creating a redirection function that will redirect to the viewreviews component with
  //the selected hospital
  Redirect(hospitalSelection: Hospital){
    this.hospitalApi.changeHospitalMessage(hospitalSelection,"view");
    this.view="";
  }
  //Fetch distance between addresses using a distance matrix
  //Example: https://maps.googleapis.com/maps/api/distancematrix/outputFormat?parameters
  GetDistances(){
    //Waiting for api to be done before implementing

  }
  //Change location function
  //Searchbar should be able to tell the map api to change the origin point and update the map
  ChangeLocation(userInput: string){
    userInput = userInput.replace("%20","+");
    console.log(userInput);
    this.apiService.changeMessage(userInput);
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
