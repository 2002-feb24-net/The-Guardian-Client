import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MapApiComponent } from './map-api.component';

describe('MapApiComponent', () => {
  let component: MapApiComponent;
  let fixture: ComponentFixture<MapApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapApiComponent ],
      providers: [HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('should geolocate', () => {
    fixture = TestBed.createComponent(MapApiComponent);
    component = fixture.componentInstance;
    component.Geolocation();
    expect(location).toBeTruthy();
  });
  it('should changelocation', () => {
    fixture = TestBed.createComponent(MapApiComponent);
    component = fixture.componentInstance;
    component.changeLocation();
    expect(location).toBeTruthy();
  });
});
