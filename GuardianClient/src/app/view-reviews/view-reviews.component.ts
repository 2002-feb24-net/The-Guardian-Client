import { Component, OnInit } from '@angular/core';
import review from '../models/review';
import hospital from '../models/hospital'
import { HospitalsService } from '../services/hospitals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css'],
})
export class ViewReviewsComponent implements OnInit {
  reviewList: review[];
  hospital: hospital;
  hospitalName: string = "";
  location: string = "";
  website: string = "";
  phoneNumber: string = "";
  medicalRating: number = 0;
  facilityRating: number = 0;
  clericalRating: number = 0;
  overAllRating: number = 0;
  ratingsCount: number = 0;
  view: string = "";
  constructor(
    private hospitalApi: HospitalsService,
    private router: Router) { }

  ngOnInit(): void {
    //subscribe to the observable hospital from the searchhospitals component
    this.hospitalApi.currentHospital.subscribe(hospital => {
      //getting hospital observable from search hospital component
      this.hospital = hospital;
      this.hospitalName = this.hospital.Name;
      this.location = this.hospital.Address;
      this.website = this.hospital.Website;
      this.phoneNumber = this.hospital.Phone;
      this.medicalRating = this.hospital.AggMedicalStaffRating;
      this.facilityRating = this.hospital.AggFacilityRating;
      this.clericalRating = this.hospital.AggClericalStaffRating;
      this.overAllRating = Math.round(((this.medicalRating + this.facilityRating + this.clericalRating) / 3) * 100) / 100;
      this.ratingsCount = 5;
      this.reviewList = [{
        id: 1,
        UserId: 1,
        HospitalId: 1,
        MedicalStaffRating: 4,
        ClericalStaffRating: 4,
        FacilityRating: 5,
        OverallRating: Math.round(((4 + 4 + 5) / 3) * 100) / 100,
        WrittenFeedback: "This Hospital was great!!! Staff was good and facilities were great but it took so long",
        DateAdmittance: new Date(),
        DateSubmitted: new Date(),
        ReasonId: 1,
      }];
    });
    this.hospitalApi.currentView.subscribe(view => {
      this.view = view;
      if(this.view == "view"){
        //removing navbar
        var myobj = document.getElementById("navbar");
        myobj.remove();
      }
    });
  }
  redirect(){
    location.reload();
  }

}