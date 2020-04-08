import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-item',
  template: `VIEW |
    <ng-content select="h1"></ng-content>
    <ng-container *ngTemplateOutlet="mainTemplate"></ng-container>
  `
})
export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  // content
  @ContentChild('t', {static: true}) mainTemplate: TemplateRef<HTMLElement>;
  // @ContentChild('h1', {static: true}) mainContent: HTMLElement;
  @ContentChildren(ChildComponent) list: QueryList<ElementRef>;
  // @ViewChild
  // @ViewChildren


  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

}
