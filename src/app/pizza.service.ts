import { Injectable } from '@angular/core';

import { Ingredient } from './interfaces/ingredient';
import { INGREDIENTS } from './mocks/mock-ingredients';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getIngredients(): Ingredient[] {
    return INGREDIENTS;
  }
}
