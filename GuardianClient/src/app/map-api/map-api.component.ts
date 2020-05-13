import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { ApiService } from '../services/api.service';

declare var ol: any;
@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.css']
})
export class MapApiComponent implements OnInit {
  @ViewChild('map') gmapElement: any;
  latitude: number = 32.779;
  longitude: number = -96.808;
  map: any;
  isLoaded: boolean = false;
  marker: google.maps.Marker;
  location: string = "Startup";
  message: string = "Fort Worth"; //userinput
  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    //this.Geolocation();
    //subscribe to the service message
    this.apiService.currentLocation.subscribe(location => 
      {
        this.location = location;
        this.message = location;
        this.changeLocation();
      });
    this.apiService.changeLocation(this.location);
    this.Geolocation();
  }
  //Trying to get geolocation working
  //It is not working currently
  Geolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => 
      {
        this.changeMap(position);
      });
    } else {
      alert("Geolocation is not supported on your browser.");
    }
  }
  changeMap(position:any|null) {
    this.location = `${position.coords.latitude},${position.coords.longitude}`;
    this.apiService.changeLocation(this.location);
    if(top.document.getElementById("maptest") != null){
      top.document.getElementById("maptest").setAttribute("src",`https://www.google.com/maps/embed/v1/search?key=AIzaSyBqPMgrXjT5aOT2gG1DN1QIzw1QqpEDL7E&q=hospitals&center=${this.location}&zoom=10`);
    }
  }
  changeLocation() {
    if(top.document.getElementById("maptest") != null){
      top.document.getElementById("maptest").setAttribute("src",`https://www.google.com/maps/embed/v1/search?key=AIzaSyBqPMgrXjT5aOT2gG1DN1QIzw1QqpEDL7E&q=hospitals+near+${this.message}&zoom=10`);
    }
  }
}
