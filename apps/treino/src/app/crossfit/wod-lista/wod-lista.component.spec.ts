import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WodListaComponent } from './wod-lista.component';

describe('WodListaComponent', () => {
  let component: WodListaComponent;
  let fixture: ComponentFixture<WodListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WodListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
