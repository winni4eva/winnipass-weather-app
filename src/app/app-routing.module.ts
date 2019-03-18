import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {single_weather_routes} from './single-weather/single-weather.routes';

const routes: Routes = [
  ...single_weather_routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
