import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
