// ==========================================
// 1. Asignación básica
// ==========================================
let num: number = 10;
// num = "hola"; // ❌ Descomenta para ver el error

// ==========================================
// 2. Compatibilidad de Objetos (La regla de oro)
// ==========================================
interface Persona {
  nombre: string;
  edad: number;
}

interface Empleado {
  nombre: string;
  edad: number;
  salario: number; // Tiene todo lo de Persona, MÁS salario
}

let p: Persona = { nombre: "Carlos", edad: 25 };
let e: Empleado = { nombre: "Ana", edad: 30, salario: 5000 };

// ✅ PERMITIDO: Empleado tiene todo lo que Persona necesita (y sobra salario)
p = e; 
console.log("Persona asignada:", p);

// ❌ PROHIBIDO: A Persona le falta 'salario' para ser Empleado
// e = p; // Descomenta para ver el error

// ==========================================
// 3. Compatibilidad de Funciones (CORREGIDO)
// ==========================================
type FuncSimple = (x: number) => void;
type FuncCompleja = (x: number, y: string) => void;

let fSimple: FuncSimple = (x) => console.log("Simple:", x);
let fCompleja: FuncCompleja = (x, y) => console.log("Compleja:", x, y);

// ✅ PERMITIDO: fSimple puede asignarse a fCompleja 
// (fSimple ignora el parámetro 'y' que fCompleja espera)
fCompleja = fSimple; 
fCompleja(10, "hola"); // Solo usa el 10, ignora "hola"

// ❌ PROHIBIDO: fCompleja necesita 2 parámetros, fSimple solo proporciona 1
// fSimple = fCompleja; // Descomenta para ver el error