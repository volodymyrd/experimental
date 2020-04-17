import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingHeroesV1Component } from './flying-heroes-v1.component';

describe('FlyingHeroesV1Component', () => {
  let component: FlyingHeroesV1Component;
  let fixture: ComponentFixture<FlyingHeroesV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingHeroesV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingHeroesV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
