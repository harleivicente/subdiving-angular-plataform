import { async, TestBed } from '@angular/core/testing';
import { SdkModule } from './sdk.module';

describe('SdkModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SdkModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SdkModule).toBeDefined();
  });
});
