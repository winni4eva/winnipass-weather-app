import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { WeatherService } from './weather.service';
import { switchMap } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy, OnChanges {

  @Input() city: string;
  public weatherReport;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.city.previousValue !== changes.city.currentValue) {
      this.getLocationId(changes.city.currentValue);
    }
  }

  ngOnDestroy() {}

  getLocationId(keyword: string, command: string = 'search') {
    const term = keyword.toLowerCase();
    const result = this._weatherService.getLocationId(command, term).pipe(
      mergeMap(report => this._weatherService.getWeatherReport('location', report[0].woeid))
    );

    result.subscribe(
      response => {
        this.weatherReport = response;
        console.log(response);
      },
      error => console.log(error)
    );
  }

}
