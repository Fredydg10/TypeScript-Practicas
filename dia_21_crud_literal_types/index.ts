// === LITERAL TYPES ===
type EstadoRespuesta = "exito" | "error" | "cargando";

interface Respuesta<T> {
  estado: EstadoRespuesta;
  datos?: T;
  mensaje?: string;
}

function crearExito<T>(datos: T): Respuesta<T> {
  return { estado: "exito", datos };
}

function crearError(mensaje: string): Respuesta<never> {
  return { estado: "error", mensaje };
}


// === MODELOS ===
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: "admin" | "usuario" | "moderador";
  activo: boolean;
}

type CrearUsuario = Omit<Usuario, "id" | "activo">;
type ActualizarUsuario = Partial<Omit<Usuario, "id">>;


// === REPOSITORIO GENÉRICO ===
class Repositorio<T extends { id: number }> {
  private items: Map<number, T> = new Map();
  private nextId = 1;

  crear(item: Omit<T, "id">): T {
    const nuevo = { ...item, id: this.nextId++ } as T;
    this.items.set(nuevo.id, nuevo);
    return nuevo;
  }

  obtener(id: number): T | undefined {
    return this.items.get(id);
  }

  listar(): T[] {
    return Array.from(this.items.values());
  }

  actualizar(id: number, cambios: Partial<T>): T | undefined {
    const actual = this.items.get(id);
    if (!actual) return undefined;
    const actualizado = { ...actual, ...cambios };
    this.items.set(id, actualizado);
    return actualizado;
  }

  eliminar(id: number): boolean {
    return this.items.delete(id);
  }
}


// === SERVICIO ===
class ServicioUsuarios {
  private repo = new Repositorio<Usuario>();

  registrar(datos: CrearUsuario): Respuesta<Usuario> {
    if (!datos.email.includes("@")) return crearError("Email inválido");
    return crearExito(this.repo.crear({ ...datos, activo: true }));
  }

  buscar(id: number): Respuesta<Usuario> {
    const u = this.repo.obtener(id);
    return u ? crearExito(u) : crearError(`Usuario ${id} no encontrado`);
  }

  listarTodos(): Respuesta<Usuario[]> {
    return crearExito(this.repo.listar());
  }

  modificar(id: number, cambios: ActualizarUsuario): Respuesta<Usuario> {
    const u = this.repo.actualizar(id, cambios);
    return u ? crearExito(u) : crearError(`Usuario ${id} no existe`);
  }

  borrar(id: number): Respuesta<{ id: number }> {
    return this.repo.eliminar(id)
      ? crearExito({ id })
      : crearError(`Usuario ${id} no existe`);
  }
}


// === USO ===
const servicio = new ServicioUsuarios();

console.log("CREATE:", servicio.registrar({ nombre: "Carlos", email: "carlos10@gmail.com", rol: "admin" }));
console.log("CREATE:", servicio.registrar({ nombre: "Ana", email: "ana787@gmail.com", rol: "usuario" }));
console.log("CREATE (error):", servicio.registrar({ nombre: "Luis", email: "invalido", rol: "moderador" }));

console.log("READ:", servicio.buscar(1));
console.log("READ (no existe):", servicio.buscar(999));
console.log("LIST:", servicio.listarTodos());
console.log("UPDATE:", servicio.modificar(1, { rol: "moderador" }));
console.log("DELETE:", servicio.borrar(2));
console.log("LIST final:", servicio.listarTodos());