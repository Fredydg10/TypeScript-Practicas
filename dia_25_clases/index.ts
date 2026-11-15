// 1. Clase básica
class Persona {
    nombre: string;
    edad: number;
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar(): string {
      return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
    }
  }
  const p = new Persona("Carlos", 25);
  console.log(p.saludar());
  
  
  // 2. Shorthand de constructor
  class Empleado {
    constructor(
      public nombre: string,
      public salario: number,
      public departamento: string
    ) {}
  
    descripcion(): string {
      return `${this.nombre} gana $${this.salario} en ${this.departamento}`;
    }
  }
  const emp = new Empleado("Ana", 50000, "IT");
  console.log(emp.descripcion());
  
  
  // 3. Modificadores de acceso
  class CuentaBancaria {
    public titular: string;
    private saldo: number;
    protected tipo: string;
    readonly numero: string;
  
    constructor(titular: string, saldo: number, numero: string) {
      this.titular = titular;
      this.saldo = saldo;
      this.tipo = "Ahorros";
      this.numero = numero;
    }
  
    getSaldo(): number { return this.saldo; }
  
    depositar(monto: number): void {
      if (monto > 0) {
        this.saldo += monto;
        console.log(`✅ Depositado $${monto}. Saldo: $${this.saldo}`);
      }
    }
  
    retirar(monto: number): boolean {
      if (monto > this.saldo) {
        console.log("❌ Fondos insuficientes");
        return false;
      }
      this.saldo -= monto;
      console.log(`✅ Retirado $${monto}. Saldo: $${this.saldo}`);
      return true;
    }
  }
  
  const cuenta = new CuentaBancaria("Carlos", 1000, "1234-5678");
  console.log("Titular:", cuenta.titular);
  cuenta.depositar(500);
  cuenta.retirar(200);
  
  
  // 4. Getters y Setters
  class Producto {
    private _precio: number;
  
    constructor(private _nombre: string, precio: number) {
      this._precio = precio;
    }
  
    get precio(): number { return this._precio; }
  
    set precio(nuevoPrecio: number) {
      if (nuevoPrecio < 0) throw new Error("Precio negativo");
      this._precio = nuevoPrecio;
    }
  }
  
  const laptop = new Producto("MacBook", 1200);
  console.log("Precio:", laptop.precio);
  laptop.precio = 1500;
  console.log("Nuevo precio:", laptop.precio);
  
  
  // 5. Métodos estáticos
  class Matematicas {
    static PI: number = 3.14159;
    static sumar(a: number, b: number): number { return a + b; }
    static areaCirculo(radio: number): number {
      return Matematicas.PI * radio ** 2;
    }
  }
  console.log("PI:", Matematicas.PI);
  console.log("Suma:", Matematicas.sumar(5, 10));
  console.log("Área:", Matematicas.areaCirculo(5));
  
  
  // 6. Clases abstractas
  abstract class Animal {
    constructor(public nombre: string) {}
    abstract hacerSonido(): string;
    describir(): string {
      return `${this.nombre} hace ${this.hacerSonido()}`;
    }
  }
  
  class Perro extends Animal {
    constructor(nombre: string, public raza: string) { super(nombre); }
    hacerSonido(): string { return "Guau guau"; }
  }
  
  class Gato extends Animal {
    hacerSonido(): string { return "Miau"; }
  }
  
  const perro = new Perro("Rex", "Pastor Alemán");
  const gato = new Gato("Michi");
  console.log(perro.describir());
  console.log(gato.describir());