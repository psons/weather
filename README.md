# INSTRUCTIONS

## Overview
THIS HOMEWORK FOLLOWS THE STEPS TAKING DURING LECTURE THIS WEEK.  
THE PRIMARY DIFFERENCE MOVING THE HTTP REQUEST AND THE CITY DETAILS 
TO THE weather-forecast-list.  

ADDITIONALLY, WE # WANT TO EXTRAPOLATE THE DISPLAYED RESULT WITHIN A weather-forecast COMPONENT.

## Getting started
### inital state
working from class


## steps to do
###0. CREATE MODELS (Classes) WITH APPROPRIATE ATTRIBUTES FOR 
x - CityDetails 

d - WeatherForecast

###1. MAKE SURE TO ADD WEATHERBIT API KEY TO environments/environment.ts
x - done
###2.ADD INPUT TO app.component.ts AND BIND THE searchText attribute IN THE app.component.ts TO THE INPUT ELEMENT
x - done in class - 

###3. PASS USER SEARCH TEXT TO CHILD COMPONENT weather-forecast-list
x - class example passes to weather-forecast, not -list
x - class example passes weatherForcasts, not searchText

###4. CREATE getWeather() function IN the weather-forecast-list.component.ts.  ADD THE HTTP  REQUEST AS DONE IN LECTURE
x - mostly pasted in.

###5. ADD HTML TO THE weather-forecast.html TO DISPLAY A WEATHER FORECAST RESULT

###6. ADD AN ITERATOR TO weather-forecast-list AND DISPLAY EACH WEATHER
   FORECAST RESULT <app-weather-forecast>
