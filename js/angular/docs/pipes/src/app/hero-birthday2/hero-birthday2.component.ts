import {Component} from '@angular/core';

@Component({
  selector: 'app-hero-birthday2',
  template: `
      <p>My birthday: {{birthday | date:format}}</p>
      <button (click)="toggleFormat()">Toggle format</button>
  `
})
export class HeroBirthday2Component {
  birthday = new Date(1974, 6, 17);
  toggle = true;

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
