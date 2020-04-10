import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <button (click)="onClickMe()">Click me!</button>
      <br/>
      {{message}}
      <br/><br/>
      <app-keyup></app-keyup>
      <br/><br/>
      <app-loop-back></app-loop-back>
      <br/><br/>
      <h4>Little Tour</h4>
      <app-little-tour></app-little-tour>
  `,
})
export class AppComponent {
  message = '';

  onClickMe = () => {
    this.message = 'You are my hero!';
  };
}
