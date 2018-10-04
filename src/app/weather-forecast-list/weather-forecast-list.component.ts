import {Component, Input, OnInit} from '@angular/core';
import { weatherBit } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {WeatherForecast} from '../models/weather-forecast';
import {CityDetails} from '../models/city-details';

@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  @Input() searchText: any[];

  // weatherForecasts: Array<string>;
  weatherForecasts: Array<WeatherForecast>;
  // searchText: string;
  city: CityDetails;
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    // this.weatherBitUrl = ``;
    this.city = new CityDetails("Chicago", "IL")
    console.log('WEATHER FORECAST-LIST COMPONENT');
  }

getWeather() {
    console.log(`in app.component searchText: ${this.searchText}`);
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apiKey}`;
    // this.weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.searchText}&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe( (results: any) => {
      console.log(results);
      // this.weatherForecasts = results['data']; // string version
      this.weatherForecasts = results['data'].map(dayForecast => new WeatherForecast(dayForecast));
      console.log(`WeatherForecastListComponent.getWeather() objects weatherForecasts:` +
        this.weatherForecasts.map(dF => dF.asStr()));
      this.city.cityName = results['city_name'];
      this.city.stateCode = results['state_code'];
    });
  }
  ngOnInit() {
  }

}
