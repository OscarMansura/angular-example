import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NosComponent } from './nos/nos.component';
import { NosDetailComponent } from './nos-detail/nos-detail.component';
import { PizzaComponent } from './pizza/pizza.component';
import { WeatherComponent } from './weather/weather.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { AppleComponent } from './apple/apple.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'nos', component: NosComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'restaurante', component: RestauranteComponent },
  { path: 'detail/:id', component: RestauranteDetailComponent },
  { path: 'apple', component: AppleComponent },
  { path: 'nos/:id', component: NosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
