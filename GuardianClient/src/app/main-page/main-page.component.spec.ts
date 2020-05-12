import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchHospitalsComponent } from '../search-hospitals/search-hospitals.component';
import { MainPageComponent } from './main-page.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageComponent, SearchHospitalsComponent ],
      providers: [HttpClient,HttpHandler],
      imports: [RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('cookie first name', () => {
    component.getCookie();
    expect(component).toBeTruthy();
  });

  it('should create', () => {
   expect(component).toBeTruthy();
  });
});
