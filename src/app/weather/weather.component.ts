import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { WeatherService } from './weather.service';
import { mergeMap } from 'rxjs/operators';
import {Router} from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy, OnChanges {

  @Input() woeid: String;
  public cities: Array<String> = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
  public weatherReport = [];

  constructor(
    private _weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.woeid) {
      this.cities.map(city => {
        this.getLocationId(city);
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.woeid.previousValue !== changes.woeid.currentValue) {
      this.weatherReport = [];
      const response = this.getWeatherReport(changes.woeid.currentValue);
      this.handleWeatherResponse(response);
    }
  }

  ngOnDestroy() {}

  getLocationId(keyword: String, command: String = 'search') {
    const term = keyword.toLowerCase();
    const response = this._weatherService.getLocationId(command, term).pipe(
      mergeMap(report => this.getWeatherReport(report[0].woeid))
    );

    this.handleWeatherResponse(response);
  }

  getWeatherReport(woeid, command: String = 'location') {
    return this._weatherService.getWeatherReport(command, woeid);
  }

  getWeatherDetails(woeid: number) {
    this.router.navigate(['weather', woeid]);
  }

  handleWeatherResponse(response: Observable<any>) {
    response.subscribe(
      res => {
        this.weatherReport.push(res);
        console.log(res);
      },
      error => console.log(error)
    );
  }

}
