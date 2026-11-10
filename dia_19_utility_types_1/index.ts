// 1. Partial<T>
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad: number;
    activo: boolean;
  }
  
  function actualizarUsuario(id: number, cambios: Partial<Usuario>): void {
    console.log(`🔄 Actualizando usuario ${id}:`, cambios);
  }
  actualizarUsuario(1, { nombre: "Carlos Actualizado" });
  actualizarUsuario(2, { email: "nuevo@mail.com", activo: false });
  
  
  // 2. Required<T>
  interface Configuracion {
    host?: string;
    port?: number;
    debug?: boolean;
  }
  
  const configCompleta: Required<Configuracion> = {
    host: "localhost",
    port: 3000,
    debug: true
  };
  console.log("Config completa:", configCompleta);
  
  
  // 3. Readonly<T>
  interface Producto {
    id: number;
    nombre: string;
    precio: number;
  }
  
  const productoFijo: Readonly<Producto> = {
    id: 1,
    nombre: "Laptop",
    precio: 1200
  };
  console.log("Producto readonly:", productoFijo);
  
  
  // 4. Record<K, V>
  type DiasSemana = "lunes" | "martes" | "miercoles" | "jueves" | "viernes";
  
  const tareas: Record<DiasSemana, string> = {
    lunes: "Reunión de equipo",
    martes: "Revisar código",
    miercoles: "Escribir tests",
    jueves: "Deploy a staging",
    viernes: "Retrospectiva"
  };
  console.log("Tareas del martes:", tareas.martes);
  
  
  // 5. CRUD con utility types
  function crearUsuario(usuario: Usuario): void {
    console.log("✅ Usuario creado:", usuario);
  }
  
  function listarUsuarios(usuarios: ReadonlyArray<Usuario>): void {
    usuarios.forEach(u => console.log("-", u.nombre));
  }
  
  type IdUsuario = Pick<Usuario, "id">;
  function eliminarUsuario(usuario: IdUsuario): void {
    console.log(`🗑️ Eliminando usuario ${usuario.id}`);
  }
  
  crearUsuario({ id: 1, nombre: "Carlos", email: "c@m.com", edad: 25, activo: true });
  listarUsuarios([{ id: 1, nombre: "Carlos", email: "c@m.com", edad: 25, activo: true }]);
  eliminarUsuario({ id: 1 });