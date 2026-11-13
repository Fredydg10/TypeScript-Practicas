// 1. Template literal types básicos
type Evento = "click" | "hover" | "scroll";
type EventoHandler = `on${Capitalize<Evento>}`;
let handler: EventoHandler = "onClick";
console.log("Handler:", handler);


// 2. Sistema de eventos tipado
type EventoDOM = "click" | "hover" | "focus" | "blur";
type HandlerName<E extends string> = `on${Capitalize<E>}`;

function registrarEvento<E extends EventoDOM>(
  nombre: HandlerName<E>,
  handler: () => void
): void {
  console.log(`✅ Registrado: ${nombre}`);
}

registrarEvento("onClick", () => console.log("Click!"));
registrarEvento("onHover", () => console.log("Hover!"));


// 3. JSON recursivo
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

const usuario: JSONValue = {
  nombre: "Carlos",
  edad: 25,
  activo: true,
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  },
  hobbies: ["leer", "programar", null]
};
console.log("Usuario JSON:", usuario);


// 4. Árbol de directorios recursivo
interface Archivo {
  nombre: string;
  tipo: "archivo";
}

interface Carpeta {
  nombre: string;
  tipo: "carpeta";
  hijos: Nodo[];
}

type Nodo = Archivo | Carpeta;

const estructura: Nodo = {
  nombre: "src",
  tipo: "carpeta",
  hijos: [
    { nombre: "index.ts", tipo: "archivo" },
    {
      nombre: "utils",
      tipo: "carpeta",
      hijos: [
        { nombre: "helpers.ts", tipo: "archivo" },
        { nombre: "constants.ts", tipo: "archivo" }
      ]
    }
  ]
};
console.log("Estructura:", estructura);


// 5. Parser de rutas anidadas
type ObtenerValor<T, K extends string> = 
  K extends `${infer Primera}.${infer Resto}`
    ? Primera extends keyof T
      ? ObtenerValor<T[Primera], Resto>
      : never
    : K extends keyof T
    ? T[K]
    : never;

interface UsuarioCompleto {
  nombre: string;
  edad: number;
  direccion: {
    calle: string;
    ciudad: string;
    pais: {
      nombre: string;
      codigo: string;
    };
  };
}

type Ciudad = ObtenerValor<UsuarioCompleto, "direccion.ciudad">;
type CodigoPais = ObtenerValor<UsuarioCompleto, "direccion.pais.codigo">;

const ciudad: Ciudad = "Madrid";
const codigo: CodigoPais = "ES";
console.log("Ciudad:", ciudad, "| Código:", codigo);