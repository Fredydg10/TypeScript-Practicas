import { z } from "zod";

// Esquema de validación
const UsuarioSchema = z.object({
  nombre: z.string().min(3),
  email: z.string().email(),
  edad: z.number().min(18).max(120),
  activo: z.boolean().default(true)
});

// Tipo inferido automáticamente
type Usuario = z.infer<typeof UsuarioSchema>;

// Datos válidos
const datosValidos = {
  nombre: "Carlos",
  email: "carlos@mail.com",
  edad: 25
};

const resultado = UsuarioSchema.safeParse(datosValidos);

if (resultado.success) {
  console.log("✅ Usuario válido:", resultado.data);
} else {
  console.log("❌ Errores:", resultado.error.issues);
}

// Datos inválidos
const datosInvalidos = {
  nombre: "Ca",
  email: "no-es-email",
  edad: 15
};

const resultado2 = UsuarioSchema.safeParse(datosInvalidos);

if (!resultado2.success) {
  console.log("❌ Errores de validación:");
  resultado2.error.issues.forEach((err) => {
    console.log(`  - ${String(err.path.join("."))}: ${err.message}`);
  });
}