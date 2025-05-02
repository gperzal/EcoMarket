"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { useAuth } from "../../auth/hooks/useAuth"
import { useLocation } from "react-router-dom"

const DashboardContext = createContext()

export const DashboardProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeView, setActiveView] = useState("buyer")
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { auth } = useAuth()
  const location = useLocation()

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setSidebarOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Determinar las vistas disponibles basadas en los roles del usuario
  const roles = (auth?.roles || []).map(r => r.toLowerCase())
  const availableViews = {
    buyer: roles.includes("buyer") || roles.includes("admin"),
    seller: roles.includes("seller") || roles.includes("admin"),
    admin: roles.includes("admin")
  }

  useEffect(() => {
    if (auth?.roles?.length > 0) {
      const roles = auth.roles.map(r => r.toLowerCase())
      const initialView = location.state?.initialView

      if (initialView && roles.includes(initialView)) {
        setActiveView(initialView)
      } else if (roles.includes("seller")) {
        setActiveView("seller")
      } else if (roles.includes("buyer")) {
        setActiveView("buyer")
      }
    }
  }, [auth?.roles, location.state])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleActiveView = () => {
    setActiveView(activeView === "buyer" ? "seller" : "buyer")
  }

  const hasRole = (roleToCheck) => {
    if (roleToCheck === "buyer" || roleToCheck === "seller") {
      return roles.includes(roleToCheck.toLowerCase()) || roles.includes("admin")
    }
    return roles.includes(roleToCheck.toLowerCase())
  }

  return (
    <DashboardContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        activeView,
        toggleActiveView,
        hasRole,
        availableViews,
        isMobile
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error("useDashboard debe ser usado dentro de un DashboardProvider")
  }
  return context
}

export default DashboardContext
