// 1. Interface básica
interface Usuario {
    id: number;
    nombre: string;
    email: string;
  }
  
  const user: Usuario = {
    id: 1,
    nombre: "Carlos",
    email: "carlos@mail.com"
  };
  console.log("Usuario:", user);
  
  
  // 2. Extender interfaces
  interface Persona {
    nombre: string;
    edad: number;
  }
  
  interface Empleado extends Persona {
    salario: number;
    departamento: string;
  }
  
  const emp: Empleado = {
    nombre: "Ana",
    edad: 30,
    salario: 50000,
    departamento: "IT"
  };
  console.log("Empleado:", emp);
  
  
  // 3. Extender múltiples interfaces
  interface Identificable {
    id: number;
  }
  
  interface Timestamp {
    createdAt: Date;
    updatedAt: Date;
  }
  
  interface Producto extends Identificable, Timestamp {
    nombre: string;
    precio: number;
  }
  
  const laptop: Producto = {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    nombre: "MacBook",
    precio: 1200
  };
  console.log("Producto:", laptop);
  
  
  // 4. Propiedades opcionales y readonly
  interface Configuracion {
    readonly id: string;
    nombre: string;
    activo?: boolean;
    descripcion?: string;
  }
  
  const config: Configuracion = {
    id: "config-001",
    nombre: "Config principal",
    activo: true
  };
  console.log("Config:", config);
  
  
  // 5. Métodos en interfaces
  interface Repositorio {
    guardar(item: any): void;
    buscar(id: number): any;
    eliminar(id: number): boolean;
  }
  
  class RepositorioUsuario implements Repositorio {
    private usuarios: any[] = [];
  
    guardar(item: any): void {
      this.usuarios.push(item);
      console.log("Guardado:", item);
    }
  
    buscar(id: number): any {
      return this.usuarios.find(u => u.id === id);
    }
  
    eliminar(id: number): boolean {
      const index = this.usuarios.findIndex(u => u.id === id);
      if (index !== -1) {
        this.usuarios.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  const repo = new RepositorioUsuario();
  repo.guardar({ id: 1, nombre: "Carlos" });
  console.log("Buscado:", repo.buscar(1));
  
  
  // 6. Index signatures
  interface Diccionario {
    [clave: string]: number;
  }
  
  const notas: Diccionario = {
    matematicas: 95,
    fisica: 88,
    quimica: 92
  };
  console.log("Notas:", notas);
  
  
  // 7. type vs interface
  type Estado = "activo" | "inactivo";
  type ID = string | number;
  type Callback = (data: string) => void;
  
  interface Animal {
    nombre: string;
    sonido(): string;
  }
  
  interface Perro extends Animal {
    raza: string;
  }
  
  type Resultado = { exito: true; data: any } | { exito: false; error: string };
  
  console.log("Type vs Interface explicados en comentarios");