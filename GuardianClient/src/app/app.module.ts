import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { MapApiComponent } from './map-api/map-api.component';
import { SearchHospitalsComponent } from './search-hospitals/search-hospitals.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditHospitalComponent } from './edit-hospital/edit-hospital.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateReviewComponent } from './create-review/create-review.component';
import { CookieService } from 'ngx-cookie-service'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({

  declarations: [
    AppComponent,
    MainPageComponent,
    MapApiComponent,
    SearchHospitalsComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    EditHospitalComponent,
    EditAccountComponent,
    LogoutComponent,
    CreateHospitalComponent,
    ViewReviewsComponent,
    EditReviewComponent,
    CreateReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule
  ],
  exports: [],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
