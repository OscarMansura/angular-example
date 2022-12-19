import { Injectable } from '@angular/core';

import { Nos } from './interfaces/nos';
import { NOS } from './mocks/mock-nos';

@Injectable({
  providedIn: 'root'
})
export class NosService {

  constructor() { }

  getNos(): Nos[] {
    return NOS;
  }

  getNosReversed(): Nos[] {
    return NOS.reverse();
  }
}
