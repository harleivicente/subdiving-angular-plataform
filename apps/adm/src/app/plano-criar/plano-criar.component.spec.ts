import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoCriarComponent } from './plano-criar.component';

describe('PlanoCriarComponent', () => {
  let component: PlanoCriarComponent;
  let fixture: ComponentFixture<PlanoCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
