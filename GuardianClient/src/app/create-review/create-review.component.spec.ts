import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpErrorResponse, HttpClient, HttpHandler } from '@angular/common/http';
import { CreateReviewComponent } from './create-review.component';
import { FormBuilder } from '@angular/forms';


describe('CreateReviewComponent', () => {
  let component: CreateReviewComponent;
  let fixture: ComponentFixture<CreateReviewComponent>;
  let spy: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReviewComponent ],
      providers: [HttpClient,HttpHandler,FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create reviews', () => {
    component.createReviews();
    expect(component).toBeTruthy();
  });
  it('should redirect', () => {
    //component.redirectToHome();
    expect(component).toBeTruthy();
  });

});