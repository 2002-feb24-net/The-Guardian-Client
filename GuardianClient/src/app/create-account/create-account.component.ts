import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import User from '../models/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  states: string[] = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI",
                      "ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO",
                      "MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA",
                      "PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];

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
  message: string = "";
  success: string = "";

  constructor(private builder: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    var regex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var email = this.newAccountForm.get('email').value;
    if(!regex.test(email))
      this.message = "Invalid email.";
    else{
      var newUser: User = {
        id: 0,
        firstName: this.newAccountForm.get('fName').value,
        lastName: this.newAccountForm.get('lName').value,
        email: email,
        password: this.newAccountForm.get('password').value,
        address: this.newAccountForm.get('address').value,
        city: this.newAccountForm.get('city').value,
        state: this.newAccountForm.get('state').value,
        zip: Number(this.newAccountForm.get('zip').value)
      };
      this.userService.createUser(newUser).subscribe();
      this.success = "Created new user: " + newUser.firstName + " " + newUser.lastName;
    }
  }
}
