import { TestBed } from '@angular/core/testing';
import { MultiplicacionService } from './multiplicacion.service';

describe('MultiplicacionService', () => {
  let service: MultiplicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplicacionService);
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería multiplicar dos números positivos', () => {
    expect(service.multiplicar(3, 4)).toBe(12);
  });

  it('debería multiplicar un número positivo y uno negativo', () => {
    expect(service.multiplicar(-3, 5)).toBe(-15);
  });

  it('debería multiplicar por cero', () => {
    expect(service.multiplicar(7, 0)).toBe(0);
  });
});
