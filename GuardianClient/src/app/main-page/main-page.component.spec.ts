import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchHospitalsComponent } from '../search-hospitals/search-hospitals.component';
import { MainPageComponent } from './main-page.component';
import { HttpErrorResponse, HttpClient, HttpHandler } from '@angular/common/http';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent, SearchHospitalsComponent ],
      providers: [HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
