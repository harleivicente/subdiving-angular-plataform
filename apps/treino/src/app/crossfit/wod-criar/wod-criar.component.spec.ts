import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WodCriarComponent } from './wod-criar.component';

describe('WodCriarComponent', () => {
  let component: WodCriarComponent;
  let fixture: ComponentFixture<WodCriarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodCriarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
