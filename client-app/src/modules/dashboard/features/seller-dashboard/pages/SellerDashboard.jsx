import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import SellerStatCards from "../components/SellerStatCards"
import RecentOrdersTable from "../components/RecentOrdersTable"
import TopProductsTable from "../components/TopProductsTable"
import SalesPerformance from "../components/SalesPerformance"
import { useAuth } from "../../../../auth/hooks/useAuth"
import { Navigate } from 'react-router-dom'

const SellerDashboard = () => {
  const { auth } = useAuth()
  const roles = (auth?.roles || []).map(r => r.toLowerCase())
  const isSeller = roles.includes('seller') || roles.includes('admin')
  
  if (!isSeller) return <Navigate to="/dashboard" replace />

  return (
    <Box>
      <Heading mb={6}>Bienvenido{auth?.fullName ? `, ${auth.fullName}` : ''}</Heading>

      <SellerStatCards />

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={8}>
        <RecentOrdersTable />
        <TopProductsTable />
      </SimpleGrid>

      <SalesPerformance />
    </Box>
  )
}

export default SellerDashboard
