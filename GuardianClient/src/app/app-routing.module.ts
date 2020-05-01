import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { EditHospitalComponent } from './edit-hospital/edit-hospital.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'createaccount', component: CreateAccountComponent},
  {path: 'editaccount', component: EditAccountComponent},
  {path: 'edithospital', component: EditHospitalComponent},
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
