import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {
  email = this.cookieService.get('cookieEmail');
  logoutForm = this.builder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private builder: FormBuilder,
    private cookieService: CookieService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.cookieService.set('cookieFirstName', "");
    this.cookieService.set('cookieLastName', "");
    this.cookieService.set('cookieEmail', "");
    this.cookieService.set('cookiePassword', "");
    this.cookieService.set('cookieAddress', "");
    this.cookieService.set('cookieCity', "");
    this.cookieService.set('cookieState', "");
    this.cookieService.set('cookieZip', "");
    this.location.back();
  }

}
