// 1. satisfies básico
type Config = {
    url: string;
    port: number;
    debug: boolean;
  };
  
  const config = {
    url: "https://api.com",
    port: 3000,
    debug: true
  } satisfies Config;
  
  console.log("Config:", config);
  // config.url sigue siendo literal "https://api.com"
  
  
  // 2. Paleta de colores
  type Colores = {
    primario: string;
    secundario: string;
    fondo: string;
  };
  
  const paleta = {
    primario: "#ff0000",
    secundario: "#00ff00",
    fondo: "#ffffff"
  } satisfies Colores;
  
  type ColorPrimario = typeof paleta.primario; // "#ff0000"
  console.log("Color primario:", paleta.primario);
  
  
  // 3. Handlers con satisfies
  type Handler = (evento: string) => void;
  
  const handlers = {
    click: (e: string) => console.log("Click:", e),
    hover: (e: string) => console.log("Hover:", e)
  } satisfies Record<string, Handler>;
  
  handlers.click("botón");
  handlers.hover("menú");
  
  
  // 4. Comparación as vs satisfies
  type Usuario = { nombre: string; edad: number };
  
  // Con 'as' - fuerza el tipo, pierde propiedades extra
  const user1 = { nombre: "Carlos", edad: 25, admin: true } as Usuario;
  // user1.admin // ❌ Error: TS "olvidó" que admin existe
  
  // Con 'satisfies' - valida y conserva, pero NO permite propiedades extra
  const user2 = { nombre: "Ana", edad: 30 } satisfies Usuario;
  console.log("Usuario válido:", user2);
  
  // Si necesitas propiedades extra, usa un tipo que las incluya
  type UsuarioAdmin = Usuario & { admin: boolean };
  const user3 = { nombre: "Luis", edad: 28, admin: true } satisfies UsuarioAdmin;
  console.log("Admin:", user3.admin); // ✅ Funciona
  
  
  // 5. Caso real: rutas de una app
  type Rutas = {
    home: string;
    about: string;
    contact: string;
  };
  
  const rutas = {
    home: "/",
    about: "/about",
    contact: "/contacto"
  } satisfies Rutas;
  
  console.log("Rutas:", rutas);