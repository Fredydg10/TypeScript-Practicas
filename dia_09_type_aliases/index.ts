// 1. Type Alias básico
type Usuario = { nombre: string; edad: number };
const user1: Usuario = { nombre: "Carlos", edad: 25 };
console.log("Usuario:", user1);

// 2. Type vs Interface
interface Producto { id: number; nombre: string; }
interface ProductoConPrecio extends Producto { precio: number; }
const laptop: ProductoConPrecio = { id: 1, nombre: "MacBook", precio: 1200 };
console.log("Producto:", laptop);

// 3. Combinar tipos
type Direccion = { calle: string; ciudad: string; };
type Telefono = { telefono: string; pais: string; };
type ClienteCompleto = Direccion & Telefono;
const cliente: ClienteCompleto = {
  calle: "Av. Siempre Viva 123", ciudad: "Madrid",
  telefono: "+34 600 123 456", pais: "España"
};
console.log("Cliente:", cliente);

// 4. Refactorizar con genéricos
type Respuesta<T> = { status: number; data: T; };
type DatosUsuario = { nombre: string; email: string; };
const resp: Respuesta<DatosUsuario> = {
  status: 200, data: { nombre: "Carlos", email: "carlos@mail.com" }
};
console.log("Respuesta:", resp);