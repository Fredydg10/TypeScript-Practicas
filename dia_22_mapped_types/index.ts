// 1. Sintaxis básica
interface Usuario { id: number; nombre: string; email: string; }
type SoloStrings<T> = { [K in keyof T]: string; };
type UsuarioStrings = SoloStrings<Usuario>;
const u: UsuarioStrings = { id: "1", nombre: "Carlos", email: "c@m.com" };
console.log("Usuario strings:", u);


// 2. MiReadonly
type MiReadonly<T> = { readonly [K in keyof T]: T[K]; };
interface Producto { id: number; nombre: string; precio: number; }
const prod: MiReadonly<Producto> = { id: 1, nombre: "Laptop", precio: 1200 };
console.log("Producto readonly:", prod);


// 3. MiPartial
type MiPartial<T> = { [K in keyof T]?: T[K]; };
interface Config { host: string; port: number; debug: boolean; }
const config: MiPartial<Config> = { host: "localhost" };
console.log("Config parcial:", config);


// 4. Asyncify
type Asyncify<T> = { [K in keyof T]: Promise<T[K]>; };
interface DatosUsuario { nombre: string; edad: number; }
async function cargar(): Promise<Asyncify<DatosUsuario>> {
  return { nombre: Promise.resolve("Carlos"), edad: Promise.resolve(25) };
}
cargar().then(async d => {
  console.log("Async nombre:", await d.nombre);
  console.log("Async edad:", await d.edad);
});


// 5. Key remapping con as
type Getters<T> = { [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]; };
interface Persona { nombre: string; edad: number; }
const personaGetters: Getters<Persona> = {
  getNombre: () => "Carlos",
  getEdad: () => 25
};
console.log(personaGetters.getNombre());
console.log(personaGetters.getEdad());


// 6. Filtrar claves
type SoloStringProps<T> = { [K in keyof T as T[K] extends string ? K : never]: T[K]; };
interface Mixto { nombre: string; email: string; edad: number; activo: boolean; }
const soloTexto: SoloStringProps<Mixto> = { nombre: "Carlos", email: "c@m.com" };
console.log("Solo strings:", soloTexto);


// 7. Formulario validado
type ReglaValidacion = "requerido" | "email" | "min:3" | "max:50" | "numero";
type FormularioValidado<T> = { [K in keyof T]: { valor: T[K]; reglas: ReglaValidacion[]; error?: string; } };

interface RegistroForm { nombre: string; email: string; edad: number; }
const formulario: FormularioValidado<RegistroForm> = {
  nombre: { valor: "Carlos", reglas: ["requerido", "min:3"] },
  email: { valor: "carlos@mail.com", reglas: ["requerido", "email"] },
  edad: { valor: 25, reglas: ["requerido", "numero"] }
};

function validarFormulario<T>(form: FormularioValidado<T>): boolean {
  let valido = true;
  for (const campo in form) {
    const { valor, reglas } = form[campo as keyof T];
    if (reglas.includes("requerido") && !valor) {
      console.log(`❌ ${campo} es requerido`);
      valido = false;
    }
  }
  if (valido) console.log("✅ Formulario válido");
  return valido;
}

validarFormulario(formulario);