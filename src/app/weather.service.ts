import { Injectable } from '@angular/core';

import { City } from './interfaces/city';
import { CITIES } from './mocks/mock-cities';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getCities(): City[] {
    return CITIES;
  }
}