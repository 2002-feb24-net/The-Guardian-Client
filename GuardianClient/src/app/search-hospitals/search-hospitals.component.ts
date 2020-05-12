/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import {} from "googlemaps";
import { HospitalsService } from '../services/hospitals.service';
import Hospital from '../models/hospital';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Distance from '../models/distance';
declare var require: any
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
  location: string = "";
  geoCodedAddress: string = "";
  distanceInfo: any;
  error: string | undefined;
  distanceFilter: string;
  ratingFilter: number = 0;
  view: string = "";
  tempObject: string;
  parameters:string;
  results:  any[];
  reset: boolean = false;
  origins: string[] = ['San Francisco CA'];
  destinations: string[] = ['New York NY', '41.8337329,-87.7321554'];
  sorted: boolean = false;
  constructor(
    public hospitalApi: HospitalsService,
    public apiService: ApiService,
    private router: Router,
  ) {
    this.Callback = this.Callback.bind(this);
    this.GetDistances = this.GetDistances.bind(this);
   }
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
  ]
    this.apiService.currentLocation.subscribe(location => {
      this.location = location;
      this.GetHospitals();
      });
  }
  //Features to implement:
  //Get Hospitals()
  //Fetch the hospitals from the api
  GetHospitals(){
    return this.hospitalApi.GetHospitals()
    .then(
      hospitals => {
        this.hospitals = hospitals; //uses promises to accept the api response
        if(this.hospitals.length>25){
          var i;
          for(i = 0; i < 5; i++)
          {
            this.hospitals.pop(); //Removes last 5 address because google maps api has a limit on the amount of addresses allowed in a distance matrix
          }
        }
        console.log(this.hospitals);
        this.GetDistances();
        this.resetError(); //resets error message
      }, 
      error => {
        this.handleError(error); //handles error
      } 
    );
  }
  FilterRating(param:string){
    this.ratingFilter = parseInt(param);
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
    //This should definitely be put in the Back End API on future itterations
    var test = new google.maps.DistanceMatrixService;
    var stringify = this.location.split(',');
    //converting location into latlng
    var latlng = {lat: parseFloat(stringify[0]), lng: parseFloat(stringify[1])};
    //stringifying the addresses in hospital list
    var arrayStrings: string[] = [];
    this.hospitals.forEach(element => {
      arrayStrings.push(element.address+", "+element.city+", "+element.state+" "+element.zip+", "+"USA");
    });
    var i;
    console.log(this.geoCodedAddress);
    console.log(`${this.geoCodedAddress}`);
    test.getDistanceMatrix(
      {
        origins: [latlng],
        destinations: arrayStrings,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      }, this.Callback //this callback function causes a lot of issues with scope
    );
  }
  Callback(response, status) {
    //Parse results from Distance Matrix
    if (status == 'OK') {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
      for (var i = 0; i < origins.length; i++) {
        var resultList = response.rows[i].elements;
        for (var j = 0; j < resultList.length; j++) {
          var element = resultList[j];
          var distance = element.distance.text;
          //var duration = element.duration.text;
          var from = origins[i];
          var to = destinations[j];
          var elementTest = top.document.getElementById(`${j+1}`);
          elementTest.textContent=distance;
        }
      }
    }
    else{
      console.log(status);
    }
  }
  //Sorts the hospitals based on distance or ratings 
  SortHospitals(param: string)
  {
    if(param=='rating')
    {
      //sort based on rating
      for(i=0; i < this.hospitals.length; i++){
        this.hospitals[i].distance = top.document.getElementById(this.hospitals[i].id.toString()).textContent;
      }
      this.hospitals.sort((a, b) => (a.aggOverallRating > b.aggOverallRating) ? 1 : -1);
    }
    else
    {
      var i;
      for(i=0; i < this.hospitals.length; i++){
        this.hospitals[i].distance = top.document.getElementById(this.hospitals[i].id.toString()).textContent;
      }
      this.hospitals.sort((a, b) => (a.distance > b.distance) ? 1 : -1);
      this.hospitals.pop();
    }
    console.log(param);
    this.sorted=true;
    this.reset=true;
    this.reset=false;
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
