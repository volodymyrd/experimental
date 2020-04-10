import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loop-back',
  template: `
      <h4>Version 2.0</h4>
      <input #box (keyup)="0">
      <p>{{box.value}}</p>

      <h4>Version 2.1</h4>
      <input #box2 (keyup)="onKey(box2.value)">
      <p>{{values}}</p>
  `
})
export class LoopBackComponent {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}
