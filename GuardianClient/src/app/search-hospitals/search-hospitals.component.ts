/// <reference types="@types/googlemaps" />
import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input } from '@angular/core';
import {} from "googlemaps";
import { HospitalsService } from '../services/hospitals.service';
import Hospital from '../models/hospital';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { BehaviorSubject, from } from 'rxjs';
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
    },
    {
      id: 2,
      Name: "Baylor Scott & White Medical Center Uptown",
      Address: "2727 East Lemmon Ave.",
      City: "Dallas",
      State: "TX",
      Zip: 75204,
      Phone: "(214) 443-3000",
      Website: "http://www.bmcuptown.com/",
      AggClericalStaffRating: 2,
      AggFacilityRating: 2,
      AggMedicalStaffRating: 2,
      AggOverallRating: 2
    },
    {
      id: 3,
      Name: "Baylor University Medical Center",
      Address: "3500 Gaston Street",
      City: "Dallas",
      State: "TX",
      Zip: 75246,
      Phone: "(214) 820-0111",
      Website: "http://www.bswhealth.com/locations/dallas/Pages/default.aspx",
      AggClericalStaffRating: 4,
      AggFacilityRating: 4,
      AggMedicalStaffRating: 4,
      AggOverallRating: 4
    },
    {
      id: 4,
      Name: "City Hospital at White Rock",
      Address: "9440 Poppy Drive",
      City: "Dallas",
      State: "TX",
      Zip: 75218,
      Phone: " (214) 324-6100",
      Website: "http://cityhospital.co/",
      AggClericalStaffRating: 5,
      AggFacilityRating: 5,
      AggMedicalStaffRating: 5,
      AggOverallRating: 5
    },
    {
      id: 5,
      Name: "Dallas Medical Center",
      Address: "7 Medical Parkway ",
      City: "Dallas",
      State: "TX",
      Zip: 75234,
      Phone: "(972) 888-7000",
      Website: "http://www.dallasmedcenter.com/",
      AggClericalStaffRating: 1,
      AggFacilityRating: 1,
      AggMedicalStaffRating: 1,
      AggOverallRating: 1
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
