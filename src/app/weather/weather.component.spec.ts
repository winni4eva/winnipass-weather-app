import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { WeatherComponent } from './weather.component';
import { of } from 'rxjs/internal/observable/of';
import { RouterTestingModule } from '@angular/router/testing';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  const mockWeatherService = jasmine.createSpyObj('WeatherService', ['getLocationId']);
  mockWeatherService.getLocationId.and.returnValue( of() );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
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
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
