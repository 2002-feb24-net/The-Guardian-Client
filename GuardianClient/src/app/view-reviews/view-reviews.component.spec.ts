import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ViewReviewsComponent } from './view-reviews.component';
import { RouterTestingModule } from '@angular/router/testing'

describe('CreateViewComponent', () => {
  let component: ViewReviewsComponent;
  let fixture: ComponentFixture<ViewReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ViewReviewsComponent ],
      providers: [HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect', () => {
    //component.redirect(" ");
    expect(component).toBeTruthy();
  });
  it('should initialize', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
