import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from '../mocks/mock-ingredients';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  ingredient = INGREDIENTS;
  total = 10;

  constructor() { }

  ngOnInit(): void {
  }

}

