import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
      <h4>Version 1</h4>
      <input (keyup)="onKey($event)">
      <p>{{values}}</p>

      <h4>Version 3 (press enter or blur)</h4>
      <input #box
             (keyup.enter)="onEnter(box.value)"
             (blur)="update(box.value)"
      >
      <p>{{value}}</p>
  `
})
export class KeyupComponent {
  values = '';
  value = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  // onKey(event: KeyboardEvent) { // with type info
  //   this.values += (event.target as HTMLInputElement).value + ' | ';
  // }

  onEnter(value: string) {
    this.value = value;
  }

  update(value: string) {
    this.value = value;
  }
}
