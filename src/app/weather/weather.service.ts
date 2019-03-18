import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {

    private url = environment.apiHost;

    constructor(private _http: HttpClient) {}

    getWeather(command: string, search: string) {
        return this._http.get(this.url + `/weather.php?command=${command}&keyword=${search}`);
    }

}
