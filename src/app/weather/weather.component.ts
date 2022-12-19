import { Component, OnInit } from '@angular/core';

import { CITIES } from '../mocks/mock-cities';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cities = CITIES;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeCity(element: any): void {
    console.log(element.value);
    const coordinates = element.value.split(',');
    const city = element.options[element.options.selectedIndex]
  }

}


