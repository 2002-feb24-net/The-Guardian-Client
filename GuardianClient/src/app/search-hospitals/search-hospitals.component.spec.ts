import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchHospitalsComponent } from './search-hospitals.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
describe('SearchHospitalsComponent', () => {
  let component: SearchHospitalsComponent;
  let fixture: ComponentFixture<SearchHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ SearchHospitalsComponent ],
      providers: [HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should get hospitals', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.GetHospitals();
    expect(component.hospitals).toBeTruthy();
  });
  it('should get distances', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.GetDistances();
    expect(component.hospitals).toBeTruthy();
  });
  it('should callback', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.Callback(null,null);
    expect(component.hospitals).toBeTruthy();
  });
  it('should change locations', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.ChangeLocation("Dallas");
    expect(component.hospitals).toBeTruthy();
  });
  it('should grab distances', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.GrabDistances();
    expect(component.hospitals).toBeTruthy();
  });
  it('should filter location', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.FilterLocation("0");
    expect(component.hospitals).toBeTruthy();
  });
  it('should filter rating', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.FilterRating("0");
    expect(component.hospitals).toBeTruthy();
  });
  it('should sort hospitals', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.SortHospitals('rating');
    component.SortHospitals('location');
    expect(component.hospitals).toBeTruthy();
  });
  //Tests to implement
  //Test getting hospitals
  //Test getting distances
  //Test changing location
  //Test error handlers
});
