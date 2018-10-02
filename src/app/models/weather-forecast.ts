/*
Basic version has: datetime and max_temp.
Nice to have: min_temp and weather.description
nicer to have: convert the temps to farenheight.
 */

export class WeatherForecast {
    forecastData: object;
    datetime: string;
    max_temp: string;
    min_temp: string;
    description: string;
    constructor(forecastData: object) {
      this.forecastData = forecastData;
      this.datetime = forecastData['datetime'];
      this.max_temp = forecastData['max_temp'];
      this.min_temp = forecastData['min_temp'];
      this.description = forecastData['weather']['description'];
    }
    asStr(): string {
      return `${this.datetime} ${this.max_temp} ${this.min_temp} ${this.description}`;
    }
}
