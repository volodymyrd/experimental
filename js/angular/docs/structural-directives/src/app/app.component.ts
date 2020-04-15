import {Component} from '@angular/core';
import {Hero, heroes} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structural-directives';

  heroes = heroes;
  hero = this.heroes[0];

  condition = false;

  trackById(index: number, hero: Hero): number {
    return hero.id;
  }
}
