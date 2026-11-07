// === Funciones ===
function sumar(a: number, b: number): number {
    return a + b;
  }
  
  console.log(sumar(5, 10)); // 15
  // sumar(5, "10"); ❌ Error

  // === Funciones con parametros opcionales ===
  function saludar(nombre: string, apellido?: string): string {
    if (apellido) {
      return `Hola ${nombre} ${apellido}`;
    }
    return `Hola ${nombre}`;
  }
  
  console.log(saludar("Carlos"));            // Hola Carlos
  console.log(saludar("Carlos", "Pérez"));   // Hola Carlos Pérez

  // === Funciones con parametros por defecto ===
  function crearUsuario(nombre: string, rol: string = "usuario"): string {
    return `${nombre} tiene rol: ${rol}`;
  }
  
  console.log(crearUsuario("Ana"));           // Ana tiene rol: usuario
  console.log(crearUsuario("Ana", "admin"));  // Ana tiene rol: admin

  // === Funciones con parametros rest ===
  function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((total, n) => total + n, 0);
  }
  
  console.log(sumarTodos(1, 2, 3, 4, 5)); // 15

  type Operacion = (a: number, b: number) => number;

const multiplicar: Operacion = (a, b) => a * b;
const dividir: Operacion = (a, b) => a / b;

console.log(multiplicar(5, 3)); // 15
console.log(dividir(10, 2));    // 5

  // === Funciones con retorno void ===
function logMensaje(msg: string): void {
    console.log(msg);
  }
  
  logMensaje("Esto es un log");
