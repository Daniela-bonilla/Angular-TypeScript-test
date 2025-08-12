import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplicacionService {
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}
