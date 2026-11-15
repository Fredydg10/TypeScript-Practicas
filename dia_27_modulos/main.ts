import { sumar, restar, PI } from "./utils";
import Calculadora from "./utils";

console.log("Suma:", sumar(5, 10));
console.log("Resta:", restar(10, 3));
console.log("PI:", PI);

const calc = new Calculadora();
console.log("Calculadora:", calc.calcular("suma", 20, 30));


// Namespace
namespace Validaciones {
  export function esEmail(email: string): boolean {
    return email.includes("@");
  }

  export function esMayorDeEdad(edad: number): boolean {
    return edad >= 18;
  }
}

console.log("Email válido:", Validaciones.esEmail("carlos@mail.com"));
console.log("Mayor de edad:", Validaciones.esMayorDeEdad(25));