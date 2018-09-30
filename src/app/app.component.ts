import {Component, Input} from '@angular/core';
import { weatherBit } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
//todo do i need this import here:
// import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  weatherForecasts: any[];
  weatherBitUrl: string;
  cityDetails: any;
  @Input() searchText: string;



  constructor(private http: HttpClient) {
    console.log(weatherBit.apiKey);
    this.cityDetails = {
      cityName: '',
      stateCode: '',
    };
    this.weatherForecasts = [];
    this.weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/?daily=Raleigh,NC&key=${weatherBit.apiKey}`;
  }

  getWeather() {
    console.log(this.searchText);
    this.weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.searchText}&key=${weatherBit.apiKey}`;
    this.http.get(this.weatherBitUrl).subscribe( (results: any) => {
      console.log(results);
      this.weatherForecasts = results['data'];
      this.cityDetails.cityName = results['city_name'];
      this.cityDetails.stateCode = results['state_code'];
    });
  }
}
