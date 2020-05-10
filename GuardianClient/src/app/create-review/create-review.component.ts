import { Component, OnInit } from '@angular/core';
import { HospitalsService } from '../services/hospitals.service';
import Hospital from '../models/hospital';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  view: string = "";
  hospitalSelected: Hospital;
  MedicalStaffRating: number;
  ClericalStaffRating: number;
  FacilityRating: number;
  OverallRating: number;

  createReviewsForm = this.formBuilder.group({
    WrittenFeedback: ['', Validators.required],
    DateSubmitted: ['', Validators.required],
    DateAdmittance: ['', Validators.required],
    ReasonId: ['', Validators.required],
  });
  
  constructor(
    private hospitalApi: HospitalsService,
    private formBuilder: FormBuilder
    ) { }
  ngOnInit(): void {
    this.hospitalApi.currentView.subscribe(view => {
      if(view=="createReview"){
        this.view = view;
      }
    });
    this.hospitalApi.currentHospital.subscribe(hospital => {
      this.hospitalSelected = hospital;
    });
  }
  createReviews()
  {

  }
  redirectToHome()
  {
    location.reload();
  }
}
