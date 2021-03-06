import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes} from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateHospitalComponent } from './create-hospital/create-hospital.component';
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateReviewComponent }from './create-review/create-review.component';

const ROUTES: Routes = [
  {path: '', component: MainPageComponent },
  {path: 'createaccount', component: CreateAccountComponent},
  {path: 'createhospital', component: CreateHospitalComponent},
  {path: 'createreview', component: CreateReviewComponent},
  {path: 'viewreviews', component: ViewReviewsComponent},
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
