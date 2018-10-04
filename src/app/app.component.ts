import {Component, Input} from '@angular/core';
import { weatherBit } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CityDetails} from './models/city-details';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Forecast';
  weatherForecasts: any[];
  weatherBitUrl: string;
  city: CityDetails ;
  @Input() searchText: string;



  constructor(private http: HttpClient) {
    console.log(weatherBit.apiKey);
    this.city = new CityDetails('', '')
    this.weatherForecasts = [];
    this.weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/?daily=Raleigh,NC&key=${weatherBit.apiKey}`;
  }


}
