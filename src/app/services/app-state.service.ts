import { Injectable, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateService{

  constructor(private weatherService: WeatherService) {}

  public cities : String[][] = [[]];

  public weatherState :any ={
    address: "",
    description : "",
    currentConditions : {},
    days : [{}]
  }

  public setCities(state:any){
    this.cities = {...this.cities, ...state};
  }

  public setWeather(state:any){
    this.weatherState = {...this.weatherState, ...state};
  }
}
