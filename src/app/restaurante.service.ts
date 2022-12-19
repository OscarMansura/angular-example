import { Injectable } from '@angular/core';

import { Restaurante } from './interfaces/restaurante';
import { RESTAURANTES } from './mocks/mock-restaurantes';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor() { }

  getRestaurantes(): Restaurante[] {
    return RESTAURANTES;
  }
}
