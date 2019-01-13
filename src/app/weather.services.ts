import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class WeatherServices {
    apiKey= "b9feb11dd0284ae1a415f94d50777169";
    // currentWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={apiKey}";


  constructor(private http: HttpClient) { }

  getCurrentWeather(place): Observable<any> {
    let currentWeatherUrl = 
    "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + this.apiKey;
    return this.http.get<any>(currentWeatherUrl)
  }

  getWeatherforcast(place): Observable<any> {
    let currentWeatherUrl = 
    "http://api.openweathermap.org/data/2.5/forecast?q=" + place + "&appid=" + this.apiKey;
    return this.http.get<any>(currentWeatherUrl)
  }


  
}
