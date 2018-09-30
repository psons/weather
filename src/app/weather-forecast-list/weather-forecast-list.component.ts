import { Component, OnInit } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {WeatherForecast} from '../models/weather-forecast';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: WeatherForecast[];
  searchText: string;
  // cityDetails: CityDetails;
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
  }

  getWeather() {
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    //subscribe to weatherbit forecase results here
  }

  ngOnInit() {
  }

}
