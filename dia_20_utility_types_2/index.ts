// 1. Exclude<T, U>
type Eventos = "click" | "hover" | "scroll" | "resize";
type EventosMouse = Exclude<Eventos, "scroll" | "resize">;
let evento: EventosMouse = "click";
console.log("Evento mouse:", evento);


// 2. Extract<T, U>
type Mezcla = string | number | boolean | symbol;
type PrimitivosNumericos = Extract<Mezcla, number | bigint>;
let valor: PrimitivosNumericos = 42;
console.log("Valor numérico:", valor);


// 3. NonNullable<T>
type PosibleNull = string | number | null | undefined;
type Seguro = NonNullable<PosibleNull>;
let dato: Seguro = "hola";
console.log("Dato seguro:", dato);


// 4. Parameters<T>
function saludar(nombre: string, edad: number, activo: boolean): void {
  console.log(`${nombre} tiene ${edad} años, activo: ${activo}`);
}
type ParamsSaludar = Parameters<typeof saludar>;
const args: ParamsSaludar = ["Carlos", 25, true];
saludar(...args);


// 5. ReturnType<T>
function obtenerUsuario(): { id: number; nombre: string } {
  return { id: 1, nombre: "Carlos" };
}
type TipoRetorno = ReturnType<typeof obtenerUsuario>;
const user: TipoRetorno = obtenerUsuario();
console.log("Usuario:", user);


// 6. Awaited<T>
async function fetchUsuario(): Promise<{ id: number; nombre: string }> {
  return { id: 1, nombre: "Carlos" };
}
type UsuarioResuelto = Awaited<ReturnType<typeof fetchUsuario>>;
const usuario: UsuarioResuelto = { id: 2, nombre: "Ana" };
console.log("Usuario resuelto:", usuario);


// 7. InstanceType<T>
class Producto {
  constructor(
    public id: number,
    public nombre: string,
    public precio: number
  ) {}
}
type TipoProducto = InstanceType<typeof Producto>;
const laptop: TipoProducto = new Producto(1, "MacBook", 1200);
console.log("Producto:", laptop);


// 8. Sistema de eventos tipado
type TipoEvento = "crear" | "actualizar" | "eliminar" | "listar";
type EventosEscritura = Exclude<TipoEvento, "listar">;

interface Payloads {
  crear: { nombre: string; email: string };
  actualizar: { id: number; cambios: Partial<{ nombre: string; email: string }> };
  eliminar: { id: number };
  listar: { pagina: number; limite: number };
}

function manejarEvento<E extends TipoEvento>(
  evento: E,
  payload: Payloads[E]
): void {
  console.log(`📦 Evento: ${evento}`, payload);
}

manejarEvento("crear", { nombre: "Carlos", email: "carlos@mail.com" });
manejarEvento("actualizar", { id: 1, cambios: { nombre: "Carlos Actualizado" } });
manejarEvento("eliminar", { id: 1 });
manejarEvento("listar", { pagina: 1, limite: 10 });