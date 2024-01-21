import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public temp : number = 0;
  constructor(public appState : AppStateService){
  }
  ngOnInit(): void {
    this.temp =(this.appState.weatherState.currentConditions.temp - 32)*(5/9);
    this.temp = Math.round(this.temp);
  }

  public toCelcius(temp:number) : number{
    let tmp : number =0;
    tmp =(temp - 32)*(5/9);
    tmp = Math.round(tmp);
    return tmp;
  }
}
