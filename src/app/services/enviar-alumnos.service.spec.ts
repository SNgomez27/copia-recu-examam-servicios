import { TestBed } from '@angular/core/testing';

import { EnviarAlumnosService } from './enviar-alumnos.service';

describe('EnviarAlumnosService', () => {
  let service: EnviarAlumnosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarAlumnosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
