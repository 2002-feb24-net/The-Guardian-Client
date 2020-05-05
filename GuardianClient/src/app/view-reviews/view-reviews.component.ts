import { Component, OnInit } from '@angular/core';
import review from '../models/review';

@Component({
  selector: 'app-create-review',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {
  reviewList: review[];
  hospitalName: string = "";
  location: string = "";
  website: string = "";
  phoneNumber: number = 0;
  medicalRating: number = 0;
  facilityRating: number = 0;
  clericalRating: number = 0;
  overAllRating: number = 0;
  ratingsCount: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.hospitalName = "Medical City Dallas Hospital";
    this.location = "7777 Forest Ln, Dallas, TX 75230";
    this.website = "https://medicalcityhealthcare.com/";
    this.phoneNumber = 2088907128;
    this.medicalRating = 3;
    this.facilityRating = 4;
    this.clericalRating = 3.5;
    this.overAllRating = Math.round(((this.medicalRating + this.facilityRating + this.clericalRating)/3) * 100) / 100;
    this.ratingsCount = 5;
    this.reviewList = [{
      id: 1,
      UserId: 1,
      HospitalId: 1,
      MedicalStaffRating: 4,
      ClericalStaffRating: 4,
      FacilityRating: 5,
      OverallRating: Math.round(((4 + 4 + 5)/3) * 100) / 100,
      WrittenFeedback: "This Hospital was great!!! Staff was good and facilities were great but it took so long",
      DateAdmittance: new Date(),
      DateSubmitted: new Date(),
      ReasonId: 1,
    }];
  }

}