// === BOOLEAN ===
let esActivo: boolean = true;
let esAdmin: boolean = false;
console.log("Activo:", esActivo);

// === NUMBER ===
let edad: number = 25;
let precio: number = 19.99;
let hex: number = 0xf00d;
console.log("Edad:", edad, "| Precio:", precio, "| Hex:", hex);

// === STRING ===
let nombre: string = "Carlos";
let saludo: string = `Hola, soy ${nombre}`;
console.log(saludo);

// === VOID ===
function saludar(): void {
  console.log("Esta función no retorna nada");
}
saludar();

// === NULL y UNDEFINED ===
let nada: null = null;
let sinDefinir: undefined = undefined;
console.log("Null:", nada, "| Undefined:", sinDefinir);

// === ANY (evitar) ===
let dato: any = 10;
dato = "ahora soy string";
dato = true;
console.log("Dato any:", dato);

// === Prueba de error ===
// Descomenta la siguiente línea para ver el error de TS:
// let edad2: number = 25;
// edad2 = "veinticinco"; // ❌ Error