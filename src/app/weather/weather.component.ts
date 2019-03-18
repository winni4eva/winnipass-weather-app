import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() city: string;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
  }

}
