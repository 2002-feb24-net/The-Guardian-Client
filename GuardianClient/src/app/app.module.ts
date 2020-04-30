import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MapApiComponent } from './map-api/map-api.component';
import { SearchHospitalsComponent } from './search-hospitals/search-hospitals.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapApiComponent,
    SearchHospitalsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYdN_gjtpNbNoV0dg6T3EZPbSn6XzQsPQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
