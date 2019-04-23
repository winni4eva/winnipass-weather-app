import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  public keyword: String;
  public woeid: number;
  public errorMessage: String;

  constructor(
    private _activedRoute: ActivatedRoute,
    private _weatherService: WeatherService
  ) { }

  ngOnInit() {
    this._activedRoute.params.subscribe(
      params => this.keyword = params['keyword']
    );
    this.getLocation(this.keyword);
  }

  getLocation(keyword) {
    this._weatherService.getLocationId('search', keyword).subscribe(
      (response: any) => {
        if ( response.length === 0) {
          this.errorMessage = 'No results were found. Try changing the keyword!';
          return;
        }
        this.errorMessage = '';
        this.woeid = response[0].woeid;
      },
      error => console.log(error)
    );
  }

}
