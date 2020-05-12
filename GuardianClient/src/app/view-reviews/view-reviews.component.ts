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
  showReviews=false;
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
      this.ratingsCount = 5;
      this.reviewList = [{
        id: 1,
        userId: 1,
        hospitalId: 1,
        medicalStaffRating: 1,
        clericalStaffRating: 1,
        facilityRating: 1,
        overallRating: 1,
        writtenFeedback: "This Hospital was great!!! Staff was good and facilities were great but it took so long",
        dateAdmittance: new Date(),
        dateSubmitted: new Date(),
        reason: "reason"
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
  redirect(path:string){
    if(path==" ")
    {
      location.reload();
    }
    else
    {
      this.hospitalApi.changeHospitalMessage(this.hospital,path);
    }
  }
  ShowAll(param:string){
    console.log(param);
    this.showReviews=true;
  }
}