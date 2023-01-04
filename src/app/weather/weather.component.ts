import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { City } from '../interfaces/city';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cities: City[] = [];
  currentWeather: any;

  constructor(
    private weatherService: WeatherService, 
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cities = this.weatherService.getCities();
  }

  onChangeCity(element: any): void {
    console.log(element.value);
    const coordinates = element.value.split(',');
    const city = element.options[element.options.selectedIndex].text;
    console.log(coordinates, city);

    this.http.get<any>(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=Europe%2FLondon`).subscribe(data => this.updateWeather(data));
  }

  updateWeather(data: any) {
    this.currentWeather = data.current_weather;
    console.log(this.currentWeather);
  }

  getWeatherDescription(code: number) {
    let description = 'Clear sky';
    if (code === 1 || code === 2 || code === 3) {
        description = 'Mainly clear, partly cloudy, and overcast';
    } else if (code === 45 || code === 48) {
        description = 'Fog and depositing rime fog';
    }

    return description;
}

}


