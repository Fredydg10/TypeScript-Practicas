// 1. typeof
function procesarValor(valor: string | number): void {
    if (typeof valor === "string") {
      console.log("Texto:", valor.toUpperCase());
    } else {
      console.log("Número:", valor * 2);
    }
  }
  procesarValor("hola");
  procesarValor(42);
  
  // 2. in
  type Pajaro = { tipo: "pajaro"; volar: () => void; };
  type Pez = { tipo: "pez"; nadar: () => void; };
  function mover(animal: Pajaro | Pez): void {
    if ("volar" in animal) animal.volar();
    else animal.nadar();
  }
  mover({ tipo: "pajaro", volar: () => console.log("🐦 Volando...") });
  mover({ tipo: "pez", nadar: () => console.log("🐟 Nadando...") });
  
  // 3. instanceof
  class ErrorPersonalizado extends Error {
    codigo: number;
    constructor(mensaje: string, codigo: number) {
      super(mensaje); this.codigo = codigo;
    }
  }
  function manejarError(error: Error | ErrorPersonalizado): void {
    if (error instanceof ErrorPersonalizado) {
      console.log(`Error [${error.codigo}]: ${error.message}`);
    } else {
      console.log(`Error genérico: ${error.message}`);
    }
  }
  manejarError(new Error("Algo salió mal"));
  manejarError(new ErrorPersonalizado("Fallo de red", 500));
  
  // 4. Switch con discriminadores
  type Accion =
    | { tipo: "LOGIN"; usuario: string }
    | { tipo: "LOGOUT" }
    | { tipo: "ACTUALIZAR_PERFIL"; nombre: string; email: string };
  
  function reducer(accion: Accion): void {
    switch (accion.tipo) {
      case "LOGIN": console.log(`🔐 ${accion.usuario} inició sesión`); break;
      case "LOGOUT": console.log("👋 Cerró sesión"); break;
      case "ACTUALIZAR_PERFIL": console.log(`✏️ ${accion.nombre} - ${accion.email}`); break;
    }
  }
  reducer({ tipo: "LOGIN", usuario: "Carlos" });
  reducer({ tipo: "LOGOUT" });
  reducer({ tipo: "ACTUALIZAR_PERFIL", nombre: "Carlos", email: "carlos@mail.com" });
  
  // 5. Type Guard personalizado
  function esArrayDeStrings(valor: unknown): valor is string[] {
    return Array.isArray(valor) && valor.every(item => typeof item === "string");
  }
  function procesarDatos(datos: unknown): void {
    if (esArrayDeStrings(datos)) console.log("Nombres:", datos.join(", "));
    else console.log("Datos no válidos");
  }
  procesarDatos(["Ana", "Luis", "Carlos"]);
  procesarDatos([1, 2, 3]);