import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { WeatherService } from './weather.service';
import { mergeMap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  @Input() city: String;
  public cities: Array<String> = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
  public weatherReport = [];

  constructor(
    private _weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cities.map(city => {
      this.getLocationId(city);
    });
  }

  ngOnDestroy() {}

  getLocationId(keyword: String, command: String = 'search') {
    const term = keyword.toLowerCase();
    const result = this._weatherService.getLocationId(command, term).pipe(
      mergeMap(report => this._weatherService.getWeatherReport('location', report[0].woeid))
    );

    result.subscribe(
      response => {
        this.weatherReport.push(response);
        console.log(response);
      },
      error => console.log(error)
    );
  }

  getWeatherDetails(woeid) {
    console.log(`My woe id is ${woeid}`);
    this.router.navigate(['weather', woeid]);
  }

}
