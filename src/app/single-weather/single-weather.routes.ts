import { Routes } from '@angular/router';
import { SingleWeatherComponent } from './single-weather.component';
 


export const single_weather_routes: Routes = [
    {
        path: 'weather/{woeid}', component: SingleWeatherComponent
    }
];

