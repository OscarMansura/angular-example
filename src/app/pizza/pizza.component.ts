import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../interfaces/ingredient';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  ingredients: Ingredient[] = [];
  total = 10;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.getPizzaIngredients();
  }

  onRemove(ingredient: Ingredient): void {
    ingredient.quantity = ingredient.quantity - 1;
    this.total -= ingredient.price;
  }

  onAdd(ingredient: Ingredient): void {
    ingredient.quantity = ingredient.quantity + 1;
    this.total += ingredient.price;
  }

  getPizzaIngredients() {
    this.ingredients = this.pizzaService.getIngredients();
  }

}

