import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroBirthday2Component} from './hero-birthday2/hero-birthday2.component';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {PowerBoosterComponent} from './power-booster/power-booster.component';
import {PowerBoostCalculatorComponent} from './power-boost-calculator/power-boost-calculator.component';
import {FormsModule} from '@angular/forms';
import {FlyingHeroesV1Component} from './flying-heroes-v1/flying-heroes-v1.component';
import {FlyingHeroesV2Component, FlyingHeroesV2ImpureComponent} from './flying-heroes-v2/flying-heroes-v2.component';
import {FlyingHeroesImpurePipe, FlyingHeroesPipe} from './flying-heroes.pipe';
import {HeroAsyncMessageComponent} from './hero-async-message/hero-async-message.component';
import {FetchJsonPipe} from './fetch-json.pipe';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthday2Component,
    ExponentialStrengthPipe,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesV1Component,
    FlyingHeroesV2Component,
    FlyingHeroesV2ImpureComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    HeroAsyncMessageComponent,
    FetchJsonPipe,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
