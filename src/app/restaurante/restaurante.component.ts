import { Component, OnInit } from '@angular/core';

import { Restaurante } from '../interfaces/restaurante';
import { RestauranteDetailComponent } from '../restaurante-detail/restaurante-detail.component';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss']
})
export class RestauranteComponent implements OnInit {

  restaurantes: Restaurante[] = [];

  constructor(private restauranteService: RestauranteService) { }

  ngOnInit(): void {
    this.getRestaurantes();
  }

  getRestaurantes(): void {
    this.restaurantes = this.restauranteService.getRestaurantes();
  }

}
