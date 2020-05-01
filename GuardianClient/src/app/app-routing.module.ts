import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { CreateReviewComponent } from './create-review/create-review.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { EditHospitalComponent } from './edit-hospital/edit-hospital.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'createaccount', component: CreateAccountComponent},
  {path: 'createhospital', component: CreateHospitalComponent},
  {path: 'createreview', component: CreateReviewComponent},
  {path: 'editaccount', component: EditAccountComponent},
  {path: 'edithospital', component: EditHospitalComponent},
  {path: 'editreview', component: EditReviewComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
