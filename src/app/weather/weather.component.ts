import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, Output } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy, OnChanges {

  @Input() city: string;
  @Output() weatherReport: any;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    // console.log('on change', changes);
    if (changes.city.previousValue !== changes.city.currentValue) {
      this.getWeatherReport(changes.city.currentValue);
    }
  }

  ngOnDestroy() {}

  getWeatherReport(keyword: string, command: string = 'search') {
    const term = keyword.toLowerCase();
    this._weatherService.getWeather(command, term).subscribe(
      (report) => { console.log(report); },
      (error) => { console.log(error); }
    );
  }

}
