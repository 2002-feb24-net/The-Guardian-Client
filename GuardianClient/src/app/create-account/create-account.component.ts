import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  newAccountForm = this.builder.group({
    fName: [''],
    lName: [''],
    address: [''],
    city: [''],
    state: [''],
    zip: [''],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
  }
}
