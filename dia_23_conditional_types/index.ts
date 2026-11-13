// 1. Sintaxis básica
type EsTexto<T> = T extends string ? "es texto" : "no es texto";
type A = EsTexto<string>;
type B = EsTexto<number>;
const a: A = "es texto";
const b: B = "no es texto";
console.log("A:", a, "| B:", b);


// 2. infer - Extraer tipos
type TipoArray<T> = T extends Array<infer U> ? U : T;
type C = TipoArray<string[]>;
type D = TipoArray<number>;
const c: C = "hola";
const d: D = 42;
console.log("C:", c, "| D:", d);


type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type E = UnwrapPromise<Promise<string>>;
type F = UnwrapPromise<number>;
const e: E = "promesa";
const f: F = 100;
console.log("E:", e, "| F:", f);


// 3. ReturnType custom
type MiReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function obtenerUsuario(): { id: number; nombre: string } {
  return { id: 1, nombre: "Carlos" };
}
type Usuario = MiReturnType<typeof obtenerUsuario>;
const u: Usuario = { id: 2, nombre: "Ana" };
console.log("Usuario:", u);


// 4. NonNullable distributivo
type MiNonNullable<T> = T extends null | undefined ? never : T;
type G = MiNonNullable<string | null | undefined>;
const g: G = "hola";
console.log("G:", g);


// 5. Validador de tipos
type Validador<T> = T extends string
  ? (valor: unknown) => valor is string
  : T extends number
  ? (valor: unknown) => valor is number
  : T extends boolean
  ? (valor: unknown) => valor is boolean
  : never;

function crearValidador<T>(): Validador<T> {
  return ((valor: unknown): boolean => {
    if (typeof valor === "string") return true;
    if (typeof valor === "number") return true;
    if (typeof valor === "boolean") return true;
    return false;
  }) as any;
}

const esString = crearValidador<string>();
const esNumber = crearValidador<number>();
console.log("esString('hola'):", esString("hola"));
console.log("esString(42):", esString(42));
console.log("esNumber(42):", esNumber(42));
console.log("esNumber('hola'):", esNumber("hola"));