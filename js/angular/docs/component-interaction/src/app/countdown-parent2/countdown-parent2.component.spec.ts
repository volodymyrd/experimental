import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParent2Component } from './countdown-parent2.component';

describe('CountdownParent2Component', () => {
  let component: CountdownParent2Component;
  let fixture: ComponentFixture<CountdownParent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownParent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownParent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
