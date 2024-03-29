import { Injectable } from '@angular/core';

import { Hero } from './interfaces/hero';
import { HEROES } from './mocks/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }

  getHeroesReversed(): Hero[] {
    return HEROES.reverse();
  }
}
