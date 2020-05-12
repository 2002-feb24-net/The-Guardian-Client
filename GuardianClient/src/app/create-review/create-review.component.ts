import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HospitalsService } from '../services/hospitals.service';
import Hospital from '../models/hospital';
import Review from '../models/review';
import { FormBuilder, Validators } from '@angular/forms';
import { ReviewsService } from '../services/reviews.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  error: string | undefined;
  submitted: boolean = false;
  createReviewsForm = this.formBuilder.group({
    WrittenFeedback: ['', Validators.required],
    DateAdmittance: ["2020-01-01T12:00", Validators.required],
    Reason: ['', Validators.required],
  });
  
  constructor(
    private hospitalApi: HospitalsService,
    private formBuilder: FormBuilder,
    private reviewService: ReviewsService
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
  //Create Reviews takes the input from the user and
  //posts it to the api database
  createReviews()
  {
    const newReviews: Review = {
      //id: 1,
      userId: 1, //change this to a userID cookie
      hospitalId: this.hospitalSelected.id,
      writtenFeedback: this.createReviewsForm.get('WrittenFeedback')?.value,
      dateAdmittance: this.createReviewsForm.get('DateAdmittance')?.value,
      dateSubmitted: new Date(),
      medicalStaffRating: this.MedicalStaffRating,
      clericalStaffRating: this.ClericalStaffRating,
      facilityRating: this.FacilityRating,
      overallRating: (this.MedicalStaffRating+this.ClericalStaffRating+this.FacilityRating)/3,
      reason: this.createReviewsForm.get('Reason')?.value
    };
    this.reviewService.CreateReviews(newReviews)
      .then(
        sub => {
          if (this.error) {
            console.log("error"+this.error);
          } else {
            this.resetError(); //clears error message
            this.submitted=true;
          }
        },
        error => this.handleError(error) //handles error message
      );
  }
  //we should make error handling an interface or inherit it
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.error = `An error occurred: ${error.error.message}`; 
    } else {
      this.error = `Backend returned code ${error.status}, body was: ${error.error}`; 
    }
  }
  resetError() {
    this.error = undefined; 
  }
  redirectToHome()
  {
    location.reload();
  }
}
