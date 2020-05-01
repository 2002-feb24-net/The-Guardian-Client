import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { CreateReviewComponent } from './create-review/create-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    EditHospitalComponent,
    EditAccountComponent,
    LogoutComponent,
    CreateHospitalComponent,
    CreateReviewComponent,
    EditReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
