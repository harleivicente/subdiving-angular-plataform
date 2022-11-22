import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosRootComponent } from './planos-root.component';

describe('PlanosRootComponent', () => {
  let component: PlanosRootComponent;
  let fixture: ComponentFixture<PlanosRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanosRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
