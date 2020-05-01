import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm = this.builder.group({
    email: ['', Validators.required]
  })

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
