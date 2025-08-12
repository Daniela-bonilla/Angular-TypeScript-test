# PRUEBA CON ANGULAR Y TYPESCRIPT

### Crear un nuevo proyecto Angular
```
npm install -g @angular/cli
ng new mi-proyecto-angular
cd mi-proyecto-angular
```

## Instalar dependencias necesarias
```
npm install
```

| Comando                      | Descripción                        |
| ---------------------------- | ---------------------------------- |
| npm install -g @angular/cli  | Instalar Angular CLI globalmente   |
| ng new mi-proyecto-angular   | Crear un nuevo proyecto Angular    |
| npm install                  | Instalar dependencias del proyecto |
| ng serve                     | Levantar servidor de desarrollo    |
| ng test                      | Ejecutar pruebas unitarias         |
| ng generate component nombre | Crear un nuevo componente          |

## Crear un componente para probar
```
ng generate component multiplicacion
```

## **Crear una función a probar**
### src/app/multiplicacion/multiplicacion.component.ts
```typescript
export function multiplicacion(a: number, b: number): number {
  return a * b;
}
```

## **Crear un archivo de prueba**
Angular usa Jasmine y Karma para pruebas unitarias. El archivo de prueba se crea automáticamente con el componente.

### src/app/multiplicacion/multiplicacion.component.spec.ts
```typescript
import { multiplicacion } from './multiplicacion.component';

describe('Función multiplicacion', () => {
  it('debería multiplicar dos números positivos', () => {
    expect(multiplicacion(2, 3)).toBe(6);
  });

  it('debería multiplicar dos números negativos', () => {
    expect(multiplicacion(-2, -2)).toBe(4);
  });

  it('debería multiplicar por cero', () => {
    expect(multiplicacion(0, 5)).toBe(0);
  });
});
```

## Ejecutar pruebas unitarias
Para ejecutar las pruebas, abre una terminal en la raíz del proyecto y ejecuta:
```
ng test
```