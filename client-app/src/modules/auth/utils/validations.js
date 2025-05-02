import { z } from "zod"
import { PASSWORD_MIN_LENGTH } from "./constants"

/**
 * Esquema de validación para el inicio de sesión
 */
export const loginSchema = z.object({
  email: z.string().min(1, "El correo electrónico es requerido").email("Formato de correo electrónico inválido"),
  password: z.string().min(1, "La contraseña es requerida"),
})

/**
 * Esquema de validación para el registro
 */
export const registerSchema = z
  .object({
    firstName: z.string().min(1, "El nombre es requerido").max(50, "El nombre no puede tener más de 50 caracteres"),
    lastName: z.string().min(1, "El apellido es requerido").max(50, "El apellido no puede tener más de 50 caracteres"),
    email: z.string().min(1, "El correo electrónico es requerido").email("Formato de correo electrónico inválido"),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, `La contraseña debe tener al menos ${PASSWORD_MIN_LENGTH} caracteres`)
      .regex(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
      .regex(/[0-9]/, "La contraseña debe contener al menos un número")
      .regex(/[^a-zA-Z0-9]/, "La contraseña debe contener al menos un carácter especial"),
    confirmPassword: z.string().min(1, "Confirmar contraseña es requerido"),
    terms: z.boolean().refine((val) => val === true, "Debes aceptar los términos y condiciones"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  })

/**
 * Esquema de validación para la recuperación de contraseña
 */
export const recoveryEmailSchema = z.object({
  email: z.string().min(1, "El correo electrónico es requerido").email("Formato de correo electrónico inválido"),
})

/**
 * Esquema de validación para el restablecimiento de contraseña
 */
export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, `La contraseña debe tener al menos ${PASSWORD_MIN_LENGTH} caracteres`)
      .regex(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
      .regex(/[0-9]/, "La contraseña debe contener al menos un número")
      .regex(/[^a-zA-Z0-9]/, "La contraseña debe contener al menos un carácter especial"),
    confirmPassword: z.string().min(1, "Confirmar contraseña es requerido"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  })

/**
 * Validar datos con un esquema Zod
 * @param {Object} schema - Esquema Zod
 * @param {Object} data - Datos a validar
 * @returns {Object} Resultado de la validación
 */
export const validateWithSchema = (schema, data) => {
  try {
    schema.parse(data)
    return { success: true, errors: {} }
  } catch (error) {
    const formattedErrors = {}
    error.errors.forEach((err) => {
      formattedErrors[err.path[0]] = err.message
    })
    return { success: false, errors: formattedErrors }
  }
}
