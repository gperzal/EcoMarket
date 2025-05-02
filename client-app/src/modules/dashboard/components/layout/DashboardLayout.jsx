import { Box, Flex } from "@chakra-ui/react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useDashboardContext } from "../../context/DashboardContext"

const DashboardLayout = ({ children }) => {
  const { sidebarOpen, isMobile } = useDashboardContext()

  return (
    <Flex h="100vh" flexDirection="column">
      <Header />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Box
          as="main"
          flex="1"
          p={4}
          ml={isMobile ? 0 : sidebarOpen ? "250px" : "80px"}
          transition="margin-left 0.3s"
          overflowY="auto"
          bg="bg.surface"
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  )
}

export default DashboardLayout
