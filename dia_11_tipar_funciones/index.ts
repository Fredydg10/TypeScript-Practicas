// 1. Funciones básicas
function sumar(a: number, b: number): number {
    return a + b;
  }
  console.log("Suma:", sumar(5, 10));
  
  // 2. Void
  function log(msg: string): void {
    console.log("LOG:", msg);
  }
  log("Mensaje de prueba");
  
  // 3. Callbacks
  type Callback = (resultado: number) => void;
  function calcular(
    a: number, b: number,
    operacion: (x: number, y: number) => number,
    callback: Callback
  ): void {
    const resultado = operacion(a, b);
    callback(resultado);
  }
  calcular(10, 5, (x, y) => x * y, (res) => console.log("Resultado:", res));
  
  // 4. Retorna función
  function crearMultiplicador(multiplicador: number): (valor: number) => number {
    return (valor: number): number => valor * multiplicador;
  }
  const duplicar = crearMultiplicador(2);
  console.log("Duplicar 5:", duplicar(5));
  
  // 5. Callbacks genéricos
  function procesarArray<T>(array: T[], callback: (item: T) => void): void {
    array.forEach(item => callback(item));
  }
  procesarArray([1, 2, 3], (num) => console.log(num * 2));
  procesarArray(["a", "b", "c"], (str) => console.log(str.toUpperCase()));
  
  function crearUsuario(
    nombre: string,
    email?: string,
    edad: number = 0
  ) {
    return { nombre, email, edad };
  }