/*
todo can support a single argument constructor
that is smart about parsing anf input string
*/
export class CityDetails {
    cityName: string;
    stateCode: string;
  constructor(cityName: string, stateCode: string) {
      this.cityName = cityName;
      this.stateCode = stateCode;
    }
}
