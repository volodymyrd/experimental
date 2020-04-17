import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingHeroesV2Component } from './flying-heroes-v2.component';

describe('FlyingHeroesV2Component', () => {
  let component: FlyingHeroesV2Component;
  let fixture: ComponentFixture<FlyingHeroesV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingHeroesV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingHeroesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
