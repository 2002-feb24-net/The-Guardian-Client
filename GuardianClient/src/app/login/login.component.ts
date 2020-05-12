import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersService } from '../services/users.service';
import User from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  success: string = "";
  error: string = "";
  user: User = null;

loginForm = this.builder.group({
  email: ['', Validators.required],
  password: ['', Validators.required]
})

  constructor(private builder: FormBuilder, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.user = user);
  }

  onSubmit(){
    this.success = "";
    this.error = "";
    this.userService.getUserByCredentials(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .subscribe(u => {
        this.userService.userLoggedIn(u);
        this.onLogin();
      });
  }

  onLogin(){
    if(this.user == null)
      this.error = "Invalid username/password.";
    else {
      this.success = `Logged in as ${this.user.firstName} ${this.user.lastName}. Redirecting...`; 
      setTimeout(() => {
        this.router.navigate(['']);
      }, 2000);  //2s
    }
  }

}
