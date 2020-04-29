import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHospitalsComponent } from './display-hospitals.component';

describe('DisplayHospitalsComponent', () => {
  let component: DisplayHospitalsComponent;
  let fixture: ComponentFixture<DisplayHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayHospitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
