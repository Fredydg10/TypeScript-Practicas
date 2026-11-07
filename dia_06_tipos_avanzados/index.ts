// 1. Union Types
function imprimirId(id: number | string): void {
    console.log("ID:", id);
  }
  imprimirId(123);
  imprimirId("abc");
  
  // 2. Literal Types
  type Estado = "activo" | "inactivo" | "pendiente";
  let estado: Estado = "activo";
  console.log("Estado:", estado);
  
  // 3. Type Aliases
  type Coordenada = { x: number; y: number };
  type Circulo = { centro: Coordenada; radio: number };
  const circulo: Circulo = { centro: { x: 10, y: 20 }, radio: 5 };
  console.log("Círculo:", circulo);
  
  // 4. Intersection Types
  type Empleado = { id: number; nombre: string };
  type Admin = { permisos: string[] };
  type EmpleadoAdmin = Empleado & Admin;
  const jefe: EmpleadoAdmin = {
    id: 1,
    nombre: "Carlos",
    permisos: ["leer", "escribir", "borrar"]
  };
  console.log("Jefe:", jefe);
  
  // 5. Type Assertions
  let valor: unknown = "Hola TypeScript";
  let longitud: number = (valor as string).length;
  console.log("Longitud:", longitud);
  
  // 6. unknown vs any (LA LECCIÓN)
  let datoAny: any = 10;
  // datoAny.metodoInexistente(); // ❌ COMENTADO: Esto explota en runtime. TS no te avisa.
  
  let datoUnknown: unknown = 42;
  // datoUnknown.metodoInexistente(); // ❌ TS SÍ te avisa y no te deja compilar
  
  // ✅ Forma correcta con unknown: verificamos antes de usar
  if (typeof datoUnknown === "number") {
    console.log("Es número, podemos multiplicar:", datoUnknown * 2);
  }
  
  console.log(" Día 6 completado sin explosiones!");