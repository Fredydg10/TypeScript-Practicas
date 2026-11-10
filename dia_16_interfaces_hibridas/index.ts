// 1. Función con propiedades básicas
interface Contador {
    (valorInicial: number): number;
    reset(): void;
    valor: number;
  }
  
  function crearContador(): Contador {
    let contador = 0;
    
    const fn = function(valorInicial: number): number {
      contador = valorInicial;
      return contador;
    } as Contador;
    
    fn.valor = 0;
    fn.reset = function() {
      contador = 0;
      fn.valor = 0;
    };
    
    return fn;
  }
  
  const miContador = crearContador();
  console.log("Valor inicial:", miContador(10));
  miContador.reset();
  console.log("Después de reset:", miContador.valor);
  
  
  // 2. Logger con configuración
  interface Logger {
    (mensaje: string): void;
    nivel: "info" | "warn" | "error";
    prefijo: string;
  }
  
  function crearLogger(prefijo: string): Logger {
    const log = function(mensaje: string): void {
      console.log(`[${log.nivel}] ${log.prefijo}: ${mensaje}`);
    } as Logger;
    
    log.nivel = "info";
    log.prefijo = prefijo;
    
    return log;
  }
  
  const appLogger = crearLogger("App");
  appLogger("Iniciando aplicación");
  
  appLogger.nivel = "error";
  appLogger("Algo salió mal");
  
  
  // 3. Función con caché
  interface FuncionConCache {
    (input: string): string;
    cache: Map<string, string>;
    limpiarCache(): void;
  }
  
  function crearFuncionConCache(fn: (input: string) => string): FuncionConCache {
    const cachedFn = function(input: string): string {
      if (cachedFn.cache.has(input)) {
        console.log("Cache hit:", input);
        return cachedFn.cache.get(input)!;
      }
      const resultado = fn(input);
      cachedFn.cache.set(input, resultado);
      return resultado;
    } as FuncionConCache;
    
    cachedFn.cache = new Map();
    cachedFn.limpiarCache = function() {
      cachedFn.cache.clear();
      console.log("Cache limpiado");
    };
    
    return cachedFn;
  }
  
  const procesarTexto = crearFuncionConCache((texto) => texto.toUpperCase());
  
  console.log(procesarTexto("hola"));
  console.log(procesarTexto("hola"));
  procesarTexto.limpiarCache();
  
  
  // 4. Middleware estilo Express (NOMBRES CAMBIADOS para evitar conflicto con DOM)
  interface AppRequest {
    body: any;
    headers: Record<string, string>;
  }
  
  interface AppResponse {
    send(data: any): void;
    status(code: number): AppResponse;
  }
  
  interface Middleware {
    (req: AppRequest, res: AppResponse, next: () => void): void;
    nombre: string;
  }
  
  function crearMiddleware(nombre: string, fn: (req: AppRequest, res: AppResponse, next: () => void) => void): Middleware {
    const middleware = function(req: AppRequest, res: AppResponse, next: () => void): void {
      console.log(`Ejecutando middleware: ${middleware.nombre}`);
      fn(req, res, next);
    } as Middleware;
    
    middleware.nombre = nombre;
    
    return middleware;
  }
  
  const loggerMiddleware = crearMiddleware("Logger", (req, res, next) => {
    console.log("Request recibido");
    next();
  });
  
  console.log("Middleware creado:", loggerMiddleware.nombre);