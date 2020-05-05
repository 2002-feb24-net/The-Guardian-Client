import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHospitalsComponent } from './search-hospitals.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
describe('SearchHospitalsComponent', () => {
  let component: SearchHospitalsComponent;
  let fixture: ComponentFixture<SearchHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
  it('should change locations', () => {
    fixture = TestBed.createComponent(SearchHospitalsComponent);
    component = fixture.componentInstance;
    component.ChangeLocation("Dallas");
    expect(component.hospitals).toBeTruthy();
  });
  //Tests to implement
  //Test getting hospitals
  //Test getting distances
  //Test changing location
  //Test error handlers
});
