// 1. Herencia básica
class Vehiculo {
  constructor(
    protected marca: string,
    protected modelo: string,
    protected año: number
  ) {}

  descripcion(): string {
    return `${this.año} ${this.marca} ${this.modelo}`;
  }

  arrancar(): string {
    return `${this.descripcion()} está arrancando...`;
  }
}

class Auto extends Vehiculo {
  constructor(marca: string, modelo: string, año: number, private puertas: number) {
    super(marca, modelo, año);
  }

  override descripcion(): string {
    return `${super.descripcion()} (${this.puertas} puertas)`;
  }
}

const miAuto = new Auto("Toyota", "Corolla", 2020, 4);
console.log(miAuto.arrancar());
console.log(miAuto.descripcion());


// 2. Polimorfismo con figuras
abstract class Figura {
  abstract area(): number;
  abstract perimetro(): number;
  describir(): string {
    return `Área: ${this.area().toFixed(2)}, Perímetro: ${this.perimetro().toFixed(2)}`;
  }
}

class Circulo extends Figura {
  constructor(private radio: number) { super(); }
  area(): number { return Math.PI * this.radio ** 2; }
  perimetro(): number { return 2 * Math.PI * this.radio; }
}

class Rectangulo extends Figura {
  constructor(private ancho: number, private alto: number) { super(); }
  area(): number { return this.ancho * this.alto; }
  perimetro(): number { return 2 * (this.ancho + this.alto); }
}

const figuras: Figura[] = [
  new Circulo(5),
  new Rectangulo(4, 6)
];
figuras.forEach((fig, i) => console.log(`Figura ${i + 1}: ${fig.describir()}`));


// 3. Override explícito
class Logger {
  log(mensaje: string): void { console.log(`[LOG] ${mensaje}`); }
}

class ErrorLogger extends Logger {
  override log(mensaje: string): void { console.error(`[ERROR] ${mensaje}`); }
}

const logger = new Logger();
const errorLogger = new ErrorLogger();
logger.log("Mensaje normal");
errorLogger.log("Algo falló");


// 4. Sobrecarga de constructores
class Fecha {
  private dia: number;
  private mes: number;
  private año: number;

  constructor(fechaStr: string);
  constructor(dia: number, mes: number, año: number);
  constructor();
  constructor(diaOStr?: number | string, mes?: number, año?: number) {
    if (diaOStr === undefined) {
      const hoy = new Date();
      this.dia = hoy.getDate();
      this.mes = hoy.getMonth() + 1;
      this.año = hoy.getFullYear();
    } else if (typeof diaOStr === "string") {
      const partes = diaOStr.split("/");
      this.dia = parseInt(partes[0] ?? "0");
      this.mes = parseInt(partes[1] ?? "0");
      this.año = parseInt(partes[2] ?? "0");
    } else {
      this.dia = diaOStr;
      this.mes = mes!;
      this.año = año!;
    }
  }

  toString(): string { return `${this.dia}/${this.mes}/${this.año}`; }
}

console.log("Hoy:", new Fecha().toString());
console.log("Navidad:", new Fecha("25/12/2024").toString());
console.log("Futura:", new Fecha(15, 6, 2025).toString());


// 5. Sistema de notificaciones con polimorfismo
interface Notificacion {
  enviar(mensaje: string, destinatario: string): void;
}

class EmailNotificacion implements Notificacion {
  enviar(mensaje: string, destinatario: string): void {
    console.log(`📧 Email a ${destinatario}: ${mensaje}`);
  }
}

class SMSNotificacion implements Notificacion {
  enviar(mensaje: string, destinatario: string): void {
    console.log(`📱 SMS a ${destinatario}: ${mensaje}`);
  }
}

class PushNotificacion implements Notificacion {
  enviar(mensaje: string, destinatario: string): void {
    console.log(`🔔 Push a ${destinatario}: ${mensaje}`);
  }
}

class ServicioNotificaciones {
  private canales: Notificacion[] = [];

  agregarCanal(canal: Notificacion): void { this.canales.push(canal); }

  enviarATodos(mensaje: string, destinatario: string): void {
    this.canales.forEach(canal => canal.enviar(mensaje, destinatario));
  }
}

const servicio = new ServicioNotificaciones();
servicio.agregarCanal(new EmailNotificacion());
servicio.agregarCanal(new SMSNotificacion());
servicio.agregarCanal(new PushNotificacion());
servicio.enviarATodos("Tu pedido ha sido enviado", "carlos@mail.com");