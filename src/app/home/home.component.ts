import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public appState : AppStateService,
    private weatherService : WeatherService,
    private router : Router ) {}

  public cityCountry : String[] = [];
  public city : String ="";
  public showSearches : boolean = false;

  ngOnInit(): void {
    this.readFileAndParse("assets/cities.txt");
  }

  readFileAndParse(filePath: string) {
    this.weatherService.readFile(filePath).subscribe(
      (content: string) => {
        let cities:String[][];
        const dataArray = this.weatherService.parseFileContent(content);
        cities = dataArray;
        this.appState.setCities(cities);
        cities.forEach((cityCountry)=>{
          this.cityCountry.push(cityCountry[0]+","+cityCountry[1]);
        })
      },
      error => {
        console.error('Error reading the file:', error);
      }
    );
  }

  showSearch() {
    this.showSearches = true;
  }

  search() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (weather:any) =>{
        this.appState.setWeather({
          address : weather.address,
          description : weather.description,
          currentConditions : weather.currentConditions,
          days : weather.days
        })
        this.router.navigateByUrl("/weather");
      },
      error : err =>{
        console.log(err);
      }
    })
  }
  
}
