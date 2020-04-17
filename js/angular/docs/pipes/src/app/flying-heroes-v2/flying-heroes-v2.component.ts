import {Component} from '@angular/core';
import {HEROES} from '../heroes';

@Component({
  selector: 'app-flying-heroes-v2',
  templateUrl: './flying-heroes-v2.component.html',
  styles: ['#flyers, #all {font-style: italic}']
})
export class FlyingHeroesV2Component {
  heroes: any[] = [];
  canFly = true;
  mutate = true;
  title = 'Flying Heroes (pure pipe)';

  constructor() {
    this.reset();
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    const hero = {name, canFly: this.canFly};
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      // Impure pipe will display
      this.heroes.push(hero);
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() {
    this.heroes = HEROES.slice();
  }
}


////// Identical except for impure pipe //////
@Component({
  selector: 'app-flying-heroes-v2-impure',
  templateUrl: './flying-heroes-v2-impure.component.html',
  styles: ['.flyers, .all {font-style: italic}'],
})
export class FlyingHeroesV2ImpureComponent extends FlyingHeroesV2Component {
  title = 'Flying Heroes (impure pipe)';
}
