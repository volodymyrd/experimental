import {Component} from '@angular/core';
import {HEROES} from '../heroes';

@Component({
  selector: 'app-flying-heroes-v1',
  template: `
      New hero:
      <input type="text" #box
             (keyup.enter)="addHero(box.value); box.value=''"
             placeholder="hero name">
      <button (click)="reset()">Reset</button>
      <div *ngFor="let hero of heroes">
          {{hero.name}}
      </div>
  `,
})
export class FlyingHeroesV1Component {
  heroes: any[] = [];
  canFly = true;

  constructor() {
    this.reset();
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
  }

  reset() {
    this.heroes = HEROES.slice();
  }
}
