import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt-PT';
import localePtExtra from '@angular/common/locales/extra/pt-PT';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PizzaComponent } from './pizza/pizza.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NosComponent } from './nos/nos.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { AppleComponent } from './apple/apple.component';
import { NosDetailComponent } from './nos-detail/nos-detail.component';

registerLocaleData(localePt, 'pt-PT', localePtExtra);
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    PizzaComponent,
    IngredientComponent,
    DashboardComponent,
    NosComponent,
    WeatherComponent,
    ForecastComponent,
    HeroDetailComponent,
    RestauranteComponent,
    RestauranteDetailComponent,
    AppleComponent,
    NosDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-PT'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
