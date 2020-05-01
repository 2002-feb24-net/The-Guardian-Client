import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';

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
  location: string = "Dallas";
  constructor() { }

  ngOnInit(): void {
    //this.Geolocation();
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
  changeMap(position) {
    this.location = `${position.coords.latitude},${position.coords.longitude}`;
    top.document.getElementById("maptest").setAttribute("src",`https://www.google.com/maps/embed/v1/search?key=AIzaSyBqPMgrXjT5aOT2gG1DN1QIzw1QqpEDL7E&q=hospitals&center=${this.location}&zoom=10`);
  }
}