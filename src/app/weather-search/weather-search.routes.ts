import { Routes } from '@angular/router';
import { WeatherSearchComponent } from './weather-search.component';
 


export const weather_search_routes: Routes = [
    {
        path: 'search/:keyword', component: WeatherSearchComponent
    }
];

