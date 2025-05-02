/**
 * Constantes para la autenticación
 */

// Longitud mínima de contraseña
export const PASSWORD_MIN_LENGTH = 8

// Rutas de autenticación
export const AUTH_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  RECOVERY_PASSWORD: "/recovery-password",
  RESET_PASSWORD: "/reset-password",
  DASHBOARD: "/dashboard",
}

// Mensajes de error comunes
export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Credenciales inválidas",
  EMAIL_EXISTS: "El correo electrónico ya está registrado",
  SERVER_ERROR: "Error en el servidor, intente más tarde",
  NETWORK_ERROR: "Error de conexión, verifique su internet",
  EXPIRED_TOKEN: "El enlace ha expirado, solicite uno nuevo",
}

// Duración del token en localStorage (en milisegundos)
export const TOKEN_DURATION = 24 * 60 * 60 * 1000 // 24 horas
