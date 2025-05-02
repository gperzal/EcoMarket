import { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { useToast } from "@chakra-ui/react"
import { useAuthContext } from "../context/AuthContext"

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const toast = useToast()
  const { auth, login: authLogin, register: authRegister, logout: authLogout } = useAuthContext()

  const login = useCallback(
    async (credentials) => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await authLogin(credentials)
        if (result.success) {
          // Asegurarnos de que el estado de autenticación se haya actualizado
          await new Promise(resolve => setTimeout(resolve, 100))
          
          toast({
            title: "Inicio de sesión exitoso",
            description: `Bienvenido${result.data.fullName ? ', ' + result.data.fullName : ''}`,
            status: "success",
            duration: 3000,
            isClosable: true,
          })

          // Redirigir basado en el rol
          const roles = result.data.roles.map(r => r.toLowerCase())
          if (roles.includes('seller')) {
            navigate("/dashboard", { state: { initialView: 'seller' } })
          } else {
            navigate("/dashboard", { state: { initialView: 'buyer' } })
          }
          
          return { success: true }
        } else {
          throw new Error(result.message)
        }
      } catch (err) {
        const errorMessage = err.message || "Error al iniciar sesión"
        setError(errorMessage)
        toast({
          title: "Error de autenticación",
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
    [authLogin, toast, navigate]
  )

  const register = useCallback(
    async (userData) => {
      setIsLoading(true)
      setError(null)
      try {
        const result = await authRegister(userData)
        if (result.success) {
          toast({
            title: "Registro exitoso",
            description: "Tu cuenta ha sido creada correctamente",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
          navigate("/dashboard")
          return { success: true }
        } else {
          throw new Error(result.message)
        }
      } catch (err) {
        const errorMessage = err.message || "Error al registrar usuario"
        setError(errorMessage)
        toast({
          title: "Error de registro",
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
    [authRegister, toast, navigate]
  )

  const logout = useCallback(() => {
    authLogout()
    navigate("/login")
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
      status: "info",
      duration: 3000,
      isClosable: true,
    })
  }, [authLogout, navigate, toast])

  return {
    auth,
    isAuthenticated: !!auth,
    login,
    register,
    logout,
    isLoading,
    error
  }
}
