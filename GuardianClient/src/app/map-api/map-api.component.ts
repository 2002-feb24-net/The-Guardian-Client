import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

declare var ol: any;
@Component({
  selector: 'app-map-api',
  templateUrl: './map-api.component.html',
  styleUrls: ['./map-api.component.css']
})
export class MapApiComponent implements OnInit {
  latitude: number = 32.779;
  longitude: number = -96.808;
  map: any;
  isLoaded: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-96.808,32.779]),
        zoom: 10
      })
    });
    this.isLoaded = true;
  }
  
}
