import {Component} from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  hero: Hero;

  print() {
    //console.log(Hero(1, 'name', 'power'));
  }
}
