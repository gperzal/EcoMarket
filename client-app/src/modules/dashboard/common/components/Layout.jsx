import { Box, Flex } from "@chakra-ui/react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { useAuth } from "../../../auth/hooks/useAuth"
import { Navigate } from "react-router-dom"
import { useDashboardContext } from "../../context/DashboardContext"

const Layout = ({ children }) => {
  const { auth } = useAuth()
  const { sidebarOpen, isMobile } = useDashboardContext()
  
  if (!auth) {
    return <Navigate to="/login" replace />
  }

  return (
    <Box minH="100vh">
      <Header />
      <Flex position="relative">
        <Sidebar />
        <Box
          flex="1"
          ml={{ base: 0, md: sidebarOpen ? "250px" : "70px" }}
          p={6}
          mt="60px"
          bg="bg.default"
          minH="calc(100vh - 60px)"
          transition="margin-left 0.3s"
        >
          {children}
        </Box>
      </Flex>
    </Box>
  )
}

export default Layout
