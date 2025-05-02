"use client"

import { useState, useCallback } from "react"
import { useToast } from "@chakra-ui/react"
import authService from "../services/authService"

/**
 * Hook personalizado para manejar la recuperación de contraseña
 */
export const useRecoveryPassword = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const toast = useToast()

  /**
   * Solicitar recuperación de contraseña
   * @param {string} email - Correo electrónico del usuario
   * @returns {Promise<Object>} - Resultado de la operación
   */
  const requestRecovery = useCallback(
    async (email) => {
      setIsLoading(true)
      setError(null)

      try {
        await authService.requestPasswordRecovery(email)

        setIsSubmitted(true)

        toast({
          title: "Correo enviado",
          description: "Hemos enviado instrucciones para recuperar tu contraseña",
          status: "success",
          duration: 5000,
          isClosable: true,
        })

        return { success: true }
      } catch (err) {
        const errorMessage = err.response?.data?.message || "Error al solicitar recuperación de contraseña"
        setError(errorMessage)

        toast({
          title: "Error",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        })

        return { success: false, message: errorMessage }
      } finally {
        setIsLoading(false)
      }
    },
    [toast],
  )

  /**
   * Restablecer contraseña
   * @param {Object} data - Datos para restablecer contraseña
   * @param {string} data.token - Token de recuperación
   * @param {string} data.password - Nueva contraseña
   * @returns {Promise<Object>} - Resultado de la operación
   */
  const resetPassword = useCallback(
    async ({ token, password }) => {
      setIsLoading(true)
      setError(null)

      try {
        await authService.resetPassword({ token, password })

        toast({
          title: "Contraseña actualizada",
          description: "Tu contraseña ha sido actualizada correctamente",
          status: "success",
          duration: 3000,
          isClosable: true,
        })

        return { success: true }
      } catch (err) {
        const errorMessage = err.response?.data?.message || "Error al restablecer contraseña"
        setError(errorMessage)

        toast({
          title: "Error",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        })

        return { success: false, message: errorMessage }
      } finally {
        setIsLoading(false)
      }
    },
    [toast],
  )

  return {
    requestRecovery,
    resetPassword,
    isLoading,
    isSubmitted,
    error,
    setIsSubmitted, // Exponer para poder resetear el estado
  }
}
