// === Interface ===
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    enStock?: boolean;
  }
  
  // === Enum ===
  enum Categoria {
    Electronica = "ELEC",
    Ropa = "ROPA",
    Comida = "COMIDA"
  }
  
  // === Class ===
  class Tienda {
    productos: Producto[] = [];
  
    agregar(producto: Producto): void {
      this.productos.push(producto);
    }
  
    listar(): void {
      this.productos.forEach(p => {
        const stock = p.enStock ? "Disponible" : "Agotado";
        console.log(`${p.nombre} - $${p.precio} [${stock}]`);
      });
    }
  }
  
  // === Array===
  let categorias: string[] = ["Electrónica", "Ropa", "Comida"];
  console.log("Categorías:", categorias);
  
  // === Tuple ===
  let productoTop: [string, number] = ["Laptop", 1200];
  console.log("Top producto:", productoTop[0], "- $", productoTop[1]);
  
  // === Uso ===
  const tienda = new Tienda();
  
  tienda.agregar({ id: 1, nombre: "Laptop", precio: 1200, enStock: true });
  tienda.agregar({ id: 2, nombre: "Camisa", precio: 25 }); // enStock opcional
  tienda.agregar({ id: 3, nombre: "Pizza", precio: 8, enStock: false });
  
  tienda.listar();