import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import { WeatherSearchComponent } from './weather-search.component';
import { WeatherService } from '../weather/weather.service';
import {of} from 'rxjs/internal/observable/of';

describe('WeatherSearchComponent', () => {
  let component: WeatherSearchComponent;
  let fixture: ComponentFixture<WeatherSearchComponent>;

  const mockWeatherService = jasmine.createSpyObj('WeatherService', ['getLocationId']);
  mockWeatherService.getLocationId.and.returnValue( of() );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSearchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: WeatherService, useValue: mockWeatherService },
      ],
      imports: [
          RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return search response if found', () => {
    mockWeatherService.getLocationId.and.returnValue( of([{woeid: 1234}]) );

    component.getLocation('London');

    expect(component.errorMessage).toBeFalsy();
    expect(component.woeid).toBe(1234);
  });

  it('should return error message if no response was returned', () => {
    mockWeatherService.getLocationId.and.returnValue( of([]) );

    component.getLocation('Mars');

    expect(component.errorMessage).toBeTruthy();
    expect(component.woeid).toBeFalsy();
  });
});
