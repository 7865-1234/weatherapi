import { Component } from '@angular/core';
import {WeatherServices}from '../app/weather.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WeatherServices]
})
export class AppComponent {
  currentWeatherInfo;
  forecastInfo;
  errorMsg = true;

  constructor(private weatherservices: WeatherServices) {}

  getWheatherReport(place) {
    // show error massage if place field empty
    place === "" ? this.errorMsg = false : this.errorMsg = true;
    // make service call for current weather info
    this.weatherservices.getCurrentWeather(place)
    .subscribe((data: any) => {
      this.currentWeatherInfo = { ...data };
      // console.log(this.currentWeatherInfo);
    });
    // make service call for 5 days weather forcast
    this.weatherservices.getWeatherforcast(place)
    .subscribe((data: any) => {
      this.forecastInfo = { ...data };
    });
  }
  
}
