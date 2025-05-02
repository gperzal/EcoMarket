"use client"

import { createContext, useContext } from "react"

const AuthContext = createContext(undefined)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuthContext debe ser usado dentro de un AuthProvider")
  return context
}

export default AuthContext
