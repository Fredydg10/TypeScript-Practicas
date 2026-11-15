export function sumar(a: number, b: number): number {
    return a + b;
  }
  
  export function restar(a: number, b: number): number {
    return a - b;
  }
  
  export const PI = 3.14159;
  
  export default class Calculadora {
    calcular(operacion: string, a: number, b: number): number {
      switch (operacion) {
        case "suma": return a + b;
        case "resta": return a - b;
        default: return 0;
      }
    }
  }