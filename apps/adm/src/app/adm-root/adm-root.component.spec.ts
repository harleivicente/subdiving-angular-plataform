import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRootComponent } from './adm-root.component';

describe('AdmRootComponent', () => {
  let component: AdmRootComponent;
  let fixture: ComponentFixture<AdmRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
