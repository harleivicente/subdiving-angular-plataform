import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeCriarComponent } from './unidade-criar.component';

describe('UnidadeCriarComponent', () => {
  let component: UnidadeCriarComponent;
  let fixture: ComponentFixture<UnidadeCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
