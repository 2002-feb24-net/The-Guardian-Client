import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  FirstName = this.getCookie();

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  getCookie() {
    let tempemail = this.cookieService.get('cookieFirstName');
    if (tempemail.length < 1) {
      this.cookieService.set('cookieFirstName', 'Guest');
      this.cookieService.set('cookieEmail', '');
    }

    console.warn(this.cookieService.get('cookieFirstName'))
    return this.cookieService.get('cookieFirstName');
  }

}
