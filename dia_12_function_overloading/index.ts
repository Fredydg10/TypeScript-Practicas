// 1. Sumar diferentes tipos
function combinar(a: number, b: number): number;
function combinar(a: string, b: string): string;
function combinar(a: number, b: string): string;
function combinar(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  return `${a} ${b}`;
}
console.log("Números:", combinar(5, 10));
console.log("Strings:", combinar("Hola", "Mundo"));
console.log("Mixto:", combinar(42, "años"));

// 2. Crear fecha
function crearFecha(): Date;
function crearFecha(timestamp: number): Date;
function crearFecha(año: number, mes: number, dia: number): Date;
function crearFecha(arg1?: number, arg2?: number, arg3?: number): Date {
  if (arg1 === undefined && arg2 === undefined && arg3 === undefined) {
    return new Date();
  }
  if (arg2 === undefined && arg3 === undefined) {
    return new Date(arg1!);
  }
  return new Date(arg1!, arg2! - 1, arg3!);
}
console.log("Ahora:", crearFecha());
console.log("Timestamp:", crearFecha(0));
console.log("Fecha específica:", crearFecha(2024, 11, 25));

// 3. Enviar datos
interface Email { to: string; subject: string; body: string; }
interface SMS { phone: string; message: string; }
function enviar(datos: Email): void;
function enviar(datos: SMS): void;
function enviar(datos: string): void;
function enviar(datos: Email | SMS | string): void {
  if (typeof datos === "string") {
    console.log("📝 Log:", datos);
  } else if ("to" in datos) {
    console.log(`📧 Email a ${datos.to}: ${datos.subject}`);
  } else if ("phone" in datos) {
    console.log(` SMS a ${datos.phone}: ${datos.message}`);
  }
}
enviar({ to: "carlos@gmail.com", subject: "Hola", body: "Mensaje" });
enviar({ phone: "+34 600 123 456", message: "Hola por SMS" });
enviar("Log simple");