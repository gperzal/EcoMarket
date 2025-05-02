import { DashboardProvider } from "./context/DashboardContext"
import DashboardLayout from "./common/components/Layout"
import DashboardRoutes from "./routes/DashboardRoutes"
import { useAuth } from "../auth/hooks/useAuth"
import { Navigate } from "react-router-dom"

export default function Dashboard() {
  const { auth } = useAuth()
  
  if (!auth) {
    return <Navigate to="/login" replace />
  }

  return (
    <DashboardProvider>
      <DashboardLayout>
        <DashboardRoutes />
      </DashboardLayout>
    </DashboardProvider>
  )
}

export { default as useDashboard } from "./hooks/useDashboard"
