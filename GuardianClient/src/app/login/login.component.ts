import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../services/api.service';
import User from '../models/user'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm = this.builder.group({
  email: ['', Validators.required],
  password: ['', Validators.required]
})

currEmail: string;
currPassword: string;
error: string;
testUser: User;

  constructor(
    private builder: FormBuilder,
    private CookieService: CookieService,
    private userApi: ApiService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    return this.userApi.getUser(email, password)
    .then(
      user => {
        this.testUser = user;
        console.log(user);
        this.resetError();
        this.CookieService.set('cookieId', user.id.toString());
        this.CookieService.set('cookieFirstName', user.firstName);
        this.CookieService.set('cookieLastName', user.lastName);
        this.CookieService.set('cookieEmail', user.email);
        this.CookieService.set('cookiePassword', user.password);
        this.CookieService.set('cookieAddress', user.address);
        this.CookieService.set('cookieCity', user.city);
        this.CookieService.set('cookieState', user.state);
        this.CookieService.set('cookieZip', user.zip.toString());
        this.CookieService.set('cookieAccessLevel', user.accessLevel.toString());
        this.CookieService.set('cookieAccountVerified', user.accountVerified.toString());
        this.CookieService.set('cookieAccountDate', user.accountDate.toString());
        this.CookieService.set('cookieReviews', user.reviews.toString());
        //routing
        this.router.navigateByUrl('');
      },
      error => {
        this.handleError(error);
      }
    );


  }

  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      this.error = `An error occurred: ${error.error.message}`;
    }else{
      this.error = `${error.error}`;
    }
  }

  resetError(){
    this.error = undefined;
  }

}
