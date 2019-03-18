import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { single_weather_routes } from './single-weather/single-weather.routes';
import { weather_routes } from './weather/weather.routes';
import { weather_search_routes } from './weather-search/weather-search.routes';

const routes: Routes = [
  ...weather_routes,
  ...single_weather_routes,
  ...weather_search_routes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
