// 1. as - Afirmación básica
const input = document.getElementById("mi-input") as HTMLInputElement;
let valor: unknown = "42";
let longitud: number = (valor as string).length;
console.log("Longitud:", longitud);

// 2. as const - Valores inmutables y literales
const colores = ["rojo", "verde", "azul"] as const;
// colores.push("amarillo"); // ❌ Error: readonly

const DIRECCIONES = ["arriba", "abajo", "izquierda", "derecha"] as const;
type Direccion = (typeof DIRECCIONES)[number];
let miDireccion: Direccion = "arriba";
console.log("Dirección:", miDireccion);

// 3. as any - Escape hatch (evitar)
let dato: unknown = { nombre: "Carlos" };
console.log("Nombre:", (dato as any).nombre);

// Alternativa segura con type guard
if (typeof dato === "object" && dato !== null && "nombre" in dato) {
  console.log("Nombre seguro:", (dato as { nombre: string }).nombre);
}

// 4. ! - Non-null assertion
function obtenerNombre(usuario: { nombre?: string }): string {
  return usuario.nombre!;
}
console.log("Nombre:", obtenerNombre({ nombre: "Carlos" }));

// 5. Configuración con as const
const API_CONFIG = {
  url: "https://api.ejemplo.com",
  version: "v1",
  timeout: 5000
} as const;

console.log("API URL:", API_CONFIG.url);
console.log("Versión:", API_CONFIG.version);