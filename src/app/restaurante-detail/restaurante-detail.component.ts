import { Component, OnInit } from '@angular/core';

import { Restaurante } from '../interfaces/restaurante';
import { RESTAURANTES } from '../mocks/mock-restaurantes';


@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.component.html',
  styleUrls: ['./restaurante-detail.component.scss']
})
export class RestauranteDetailComponent implements OnInit {

  restaurante?: Restaurante;
  

  constructor() { }

  ngOnInit(): void {
  }

}
