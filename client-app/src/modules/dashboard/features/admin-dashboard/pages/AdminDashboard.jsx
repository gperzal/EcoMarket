import { Box, Heading, SimpleGrid, Flex, Button, Text } from "@chakra-ui/react"
import AdminStatCards from "../components/AdminStatCards"
import RecentActivityCard from "../components/RecentActivityCard"
import SystemStatusCard from "../components/SystemStatusCard"
import { useDashboardContext } from "../../../context/DashboardContext"
import { useAuth } from "../../../../auth/hooks/useAuth"
import { Navigate } from 'react-router-dom'

const AdminDashboard = () => {
  const { auth } = useAuth()
  const { toggleActiveView, activeView, availableViews } = useDashboardContext()
  const roles = (auth?.roles || []).map(r => r.toLowerCase())
  const isAdmin = roles.includes('admin')
  
  if (!isAdmin) return <Navigate to="/dashboard" replace />

  // Solo mostrar el botón si el admin tiene acceso a ambas vistas
  const showViewToggle = availableViews.buyer && availableViews.seller

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading size="lg">Panel de Administración</Heading>
          <Text color="gray.500">Bienvenido al panel de control administrativo</Text>
        </Box>
        {showViewToggle && (
          <Button 
            colorScheme={activeView === "buyer" ? "green" : "blue"} 
            onClick={toggleActiveView}
          >
            Cambiar a vista de {activeView === "buyer" ? "Vendedor" : "Comprador"}
          </Button>
        )}
      </Flex>

      <AdminStatCards />

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
        <RecentActivityCard />
        <SystemStatusCard />
      </SimpleGrid>
    </Box>
  )
}

export default AdminDashboard