// 1. Restricción con extends
function obtenerLongitudSeguro<T extends { length: number }>(arg: T): number {
    return arg.length;
  }
  console.log("String length:", obtenerLongitudSeguro("hola"));
  console.log("Array length:", obtenerLongitudSeguro([1, 2, 3]));
  
  
  // 2. keyof básico
  interface Usuario {
    id: number;
    nombre: string;
    email: string;
  }
  type ClavesUsuario = keyof Usuario;
  let clave: ClavesUsuario = "nombre";
  console.log("Clave válida:", clave);
  
  
  // 3. Función segura para obtener valores
  function obtenerValor<T, K extends keyof T>(objeto: T, clave: K): T[K] {
    return objeto[clave];
  }
  const usuario = { id: 1, nombre: "Carlos", email: "carlos@mail.com" };
  console.log("Nombre:", obtenerValor(usuario, "nombre"));
  console.log("Email:", obtenerValor(usuario, "email"));
  
  
  // 4. Actualizar propiedad específica
  function actualizarPropiedad<T, K extends keyof T>(
    objeto: T,
    clave: K,
    valor: T[K]
  ): T {
    return { ...objeto, [clave]: valor };
  }
  const producto = { id: 1, nombre: "Laptop", precio: 1200 };
  const productoActualizado = actualizarPropiedad(producto, "precio", 999);
  console.log("Producto actualizado:", productoActualizado);
  
  
  // 5. Pick y Omit (usando los NATIVOS de TypeScript)
  // Por dentro funcionan así (pero NO los redefinas):
  // type MiPick<T, K extends keyof T> = { [P in K]: T[P]; }
  // type MiOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  
  interface ProductoCompleto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    descripcion: string;
  }
  
  // Pick nativo: selecciona ciertas claves
  type ProductoResumen = Pick<ProductoCompleto, "id" | "nombre">;
  const resumen: ProductoResumen = { id: 1, nombre: "Laptop" };
  
  // Omit nativo: excluye ciertas claves
  type ProductoSinDesc = Omit<ProductoCompleto, "descripcion">;
  const sinDesc: ProductoSinDesc = {
    id: 1, nombre: "Laptop", precio: 1200, stock: 10
  };
  console.log("Resumen:", resumen);
  console.log("Sin descripción:", sinDesc);
  
  
  // 6. Validador de formulario
  type Reglas<T> = { [K in keyof T]: (valor: T[K]) => boolean; };
  
  function validar<T>(datos: T, reglas: Reglas<T>): boolean {
    for (const clave in reglas) {
      const key = clave as keyof T;
      if (!reglas[key](datos[key])) {
        console.log(`❌ Validación fallida en: ${String(key)}`);
        return false;
      }
    }
    console.log("✅ Todas las validaciones pasaron");
    return true;
  }
  
  interface FormularioRegistro {
    nombre: string;
    email: string;
    edad: number;
  }
  
  const reglas: Reglas<FormularioRegistro> = {
    nombre: (v) => v.length >= 3,
    email: (v) => v.includes("@"),
    edad: (v) => v >= 18
  };
  
  const formValido = { nombre: "Carlos", email: "carlos@mail.com", edad: 25 };
  const formInvalido = { nombre: "Ca", email: "carlosmail.com", edad: 15 };
  
  validar(formValido, reglas);
  validar(formInvalido, reglas);