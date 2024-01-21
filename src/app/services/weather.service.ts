import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private key = "E275J3776NZG456MED2VSEBNA";
  private city = "";
  constructor(private http : HttpClient) { }
  url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

  public getWeather(city : String){
    return this.http.get(this.url+city+"?key="+this.key);
  }
  
  readFile(filePath: string): Observable<string> {
    return this.http.get(filePath, { responseType: 'text' });
  }

  parseFileContent(content: string): string[][] {
    // Split the content into lines
    const lines = content.split('\n');

    // Split each line into an array of values
    const data = lines.map(line => line.split(','));

    return data;
  }
  

}
