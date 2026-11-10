// 1. Función genérica básica
function obtenerPrimero<T>(arr: T[]): T | undefined{
    return arr[0];
  }
  console.log(obtenerPrimero([1, 2, 3]));
  console.log(obtenerPrimero(["a", "b", "c"]));
  
  
  // 2. Múltiples parámetros genéricos
  function crearPar<A, B>(primero: A, segundo: B): [A, B] {
    return [primero, segundo];
  }
  const par1 = crearPar("Carlos", 25);
  const par2 = crearPar(true, [1, 2, 3]);
  console.log("Par 1:", par1);
  console.log("Par 2:", par2);
  
  
  // 3. Interface genérica
  interface Respuesta<T> {
    status: number;
    data: T;
    mensaje: string;
  }
  
  const respUsuario: Respuesta<{ nombre: string; email: string }> = {
    status: 200,
    data: { nombre: "Carlos", email: "carlos@mail.com" },
    mensaje: "OK"
  };
  
  const respProductos: Respuesta<string[]> = {
    status: 200,
    data: ["Laptop", "Mouse", "Teclado"],
    mensaje: "OK"
  };
  console.log("Resp usuario:", respUsuario);
  console.log("Resp productos:", respProductos);
  
  
  // 4. Clase genérica
  class Repositorio<T> {
    private items: T[] = [];
  
    agregar(item: T): void {
      this.items.push(item);
    }
  
    obtenerTodos(): T[] {
      return this.items;
    }
  }
  
  interface Usuario { id: number; nombre: string; }
  const repoUsuarios = new Repositorio<Usuario>();
  repoUsuarios.agregar({ id: 1, nombre: "Carlos" });
  repoUsuarios.agregar({ id: 2, nombre: "Ana" });
  console.log("Usuarios:", repoUsuarios.obtenerTodos());
  
  
  // 5. Valor por defecto
  interface Estado<T = string> {
    valor: T;
    cargando: boolean;
  }
  const estadoTexto: Estado = { valor: "Hola", cargando: false };
  const estadoNumero: Estado<number> = { valor: 42, cargando: false };
  console.log("Estado texto:", estadoTexto);
  console.log("Estado número:", estadoNumero);
  
  
  // 6. Merge de objetos
  function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  const usuario = { nombre: "Carlos", edad: 25 };
  const direccion = { ciudad: "Madrid", pais: "España" };
  const usuarioCompleto = merge(usuario, direccion);
  console.log("Usuario completo:", usuarioCompleto);