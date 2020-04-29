import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DisplayHospitalsComponent } from './display-hospitals/display-hospitals.component';
import { MapApiComponent } from './map-api/map-api.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DisplayHospitalsComponent,
    MapApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
