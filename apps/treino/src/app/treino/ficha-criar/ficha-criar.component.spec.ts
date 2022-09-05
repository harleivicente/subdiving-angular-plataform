import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaCriarComponent } from './ficha-criar.component';

describe('FichaCriarComponent', () => {
  let component: FichaCriarComponent;
  let fixture: ComponentFixture<FichaCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
