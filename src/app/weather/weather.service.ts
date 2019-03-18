import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {

    private url = environment.apiHost;

    constructor(private _http: HttpClient) {}

    getLocationId(command: string, search: string) {
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

        return this._http.get(this.url + `/weather.php?command=${command}&keyword=${search}`, { headers: headers });
    }

    getWeatherReport(command: string, woeid: number) {
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

        return this._http.get(this.url + `/weather.php?command=${command}&woeid=${woeid}`, { headers: headers });
    }

}
