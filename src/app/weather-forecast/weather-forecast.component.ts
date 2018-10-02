import { Component, OnInit, Input } from '@angular/core';
import {WeatherForecast} from '../models/weather-forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  @Input() weatherForecast: WeatherForecast;
  constructor() {
    console.log('WEATHER FORECAST COMPONENT');
    console.trace();
  }

  ngOnInit() {
  }

}
