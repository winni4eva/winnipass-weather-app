import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public cities: Array<String> = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];

  public cityReport;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {}

  cityWeatherReport(report) {
    this.cityReport = report.consolidated_weather['0'];
  }
}
