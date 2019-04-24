import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { WeatherComponent } from './weather.component';
import { of } from 'rxjs/internal/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockWeatherService = jasmine.createSpyObj('WeatherService', ['getLocationId', 'getWeatherReport']);
  mockWeatherService.getLocationId.and.returnValue( of([{woeid: 1234}]) );
  mockWeatherService.getWeatherReport.and.returnValue( of({consolidated_weather: [{'applicable_date': '23-01-19'}]}) );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: WeatherService, useValue: mockWeatherService },
        { provide: Router, useValue: router },
      ],
      imports: [
          RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get weather report when location details are given', () => {
    spyOn(component, 'handleWeatherResponse').and.returnValue(undefined);

    component.getLocationId('London');

    expect(mockWeatherService.getLocationId).toHaveBeenCalled();
    expect(mockWeatherService.getWeatherReport).toHaveBeenCalled();
    expect(component.handleWeatherResponse).toHaveBeenCalledTimes(1);
  });

  it('should route to single weather details', () => {

    component.getWeatherDetails(1234);

    expect(router.navigate).toHaveBeenCalledWith(['weather', 1234]);
  });
});
