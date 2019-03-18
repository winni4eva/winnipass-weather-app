import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-weather',
  templateUrl: './single-weather.component.html',
  styleUrls: ['./single-weather.component.css']
})
export class SingleWeatherComponent implements OnInit {

  public woeid: number;
  constructor(private _activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activedRoute.params.subscribe(
        params => this.woeid = params['woeid']
    );
  }

}
