# INSTRUCTIONS

## Overview
THIS HOMEWORK FOLLOWS THE STEPS TAKING DURING LECTURE THIS WEEK.  
THE PRIMARY DIFFERENCE MOVING THE HTTP REQUEST AND THE CITY DETAILS 
TO THE weather-forecast-list.  

ADDITIONALLY, WE # WANT TO EXTRAPOLATE THE DISPLAYED RESULT WITHIN A weather-forecast COMPONENT.

## Getting started
### inital state
ERROR in src/app/weather-forecast-list/weather-forecast-list.component.ts(11,21): error TS2304: Cannot find name 'WeatherForecast'.
src/app/weather-forecast-list/weather-forecast-list.component.ts(13,16): error TS2304: Cannot find name 'CityDetails'.
src/app/weather-forecast-list/weather-forecast-list.component.ts(14,29): error TS2304: Cannot find name 'HttpClient'.
comment out a cople lines in 

## steps to do
0. CREATE MODELS (Classes) WITH APPROPRIATE ATTRIBUTES FOR CityDetails and WeatherForecast

1. MAKE SURE TO ADD WEATHERBIT API KEY TO environments/environment.ts

2. ADD INPUT TO app.component.ts AND BIND THE searchText attribute IN THE app.component.ts TO
   THE INPUT ELEMENT

3. PASS USER SEARCH TEXT TO CHILD COMPONENT weather-forecast-list

4. CREATE getWeather() function IN the weather-forecast-list.component.ts.  ADD THE HTTP 
   REQUEST AS DONE IN LECTURE

5. ADD HTML TO THE weather-forecast.html TO DISPLAY A WEATHER FORECAST RESULT

6. ADD AN ITERATOR TO weather-forecast-list AND DISPLAY EACH WEATHER
   FORECAST RESULT <app-weather-forecast>
