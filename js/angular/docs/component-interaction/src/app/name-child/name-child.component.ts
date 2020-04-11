import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: `
      <h3>"{{nameProp}}"</h3>
  `
})
export class NameChildComponent {
  private _name = '';

  @Input()
  set nameProp(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  get nameProp(): string {
    return this._name;
  }
}
