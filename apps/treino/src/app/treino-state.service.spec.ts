import { TestBed } from '@angular/core/testing';

import { TreinoStateService } from './treino-state.service';

describe('TreinoStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreinoStateService = TestBed.get(TreinoStateService);
    expect(service).toBeTruthy();
  });
});
