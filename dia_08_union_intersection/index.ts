// ==========================================
// 1. UNION (|) : Modelar estados de una App (Discriminated Unions)
// ==========================================
// Esto es OBLIGATORIO saberlo si vas a usar React, Angular o Vue.

type EstadoCargando = { status: "cargando" };
type EstadoExito = { status: "exito"; data: string[] };
type EstadoError = { status: "error"; mensaje: string };

// El estado de la app puede ser UNO de estos tres
type EstadoApp = EstadoCargando | EstadoExito | EstadoError;

function manejarEstado(estado: EstadoApp): void {
  // TS es inteligente: sabe qué propiedades existen según el 'status'
  if (estado.status === "cargando") {
    console.log("⏳ Cargando datos...");
    // console.log(estado.data); // ❌ Error, TS sabe que 'data' no existe aquí
  } 
  else if (estado.status === "exito") {
    console.log("✅ Datos recibidos:", estado.data);
  } 
  else {
    console.log("❌ Error:", estado.mensaje);
  }
}

// Pruebas
manejarEstado({ status: "cargando" });
manejarEstado({ status: "exito", data: ["Usuario 1", "Usuario 2"] });
manejarEstado({ status: "error", mensaje: "Fallo de red 500" });


// ==========================================
// 2. INTERSECTION (&) : Combinar Props / Interfaces
// ==========================================
// Muy usado para crear componentes reutilizables.

interface PropsBase {
  id: string;
  className?: string;
}

interface PropsBoton {
  texto: string;
  onClick: () => void;
  variante: "primario" | "secundario";
}

// Creamos un nuevo tipo que es la SUMA de ambos
type BotonProps = PropsBase & PropsBoton;

function crearBoton(props: BotonProps): void {
  console.log(`🔘 Botón: "${props.texto}" | ID: ${props.id} | Var: ${props.variante}`);
  props.onClick();
}

// Al usarlo, TS te obliga a poner TODAS las propiedades de ambos tipos
crearBoton({
  id: "btn-enviar",
  texto: "Enviar Formulario",
  onClick: () => console.log("  -> Click ejecutado!"),
  variante: "primario",
  className: "bg-blue-500" // La propiedad opcional de PropsBase
});