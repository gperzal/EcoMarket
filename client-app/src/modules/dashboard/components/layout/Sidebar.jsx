import { Box, Flex, VStack, Icon, Text, Divider, useColorModeValue, Button } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import {
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaUser,
  FaStore,
  FaBox,
  FaChartLine,
  FaTags,
  FaMoneyBillWave,
  FaCog,
} from "react-icons/fa"
import { useDashboardContext } from "../../context/DashboardContext"

const NavItem = ({ icon, children, to, isActive, ...rest }) => {
  const { sidebarOpen } = useDashboardContext()
  const activeBg = useColorModeValue("brand.primary.100", "brand.primary.900")
  const hoverBg = useColorModeValue("gray.100", "gray.700")

  // No pasar isActive al Box, solo usarlo para lógica de estilos
  return (
    <Flex
      as={NavLink}
      to={to}
      align="center"
      p="3"
      mx="2"
      borderRadius="md"
      role="group"
      cursor="pointer"
      bg={isActive ? activeBg : "transparent"}
      color={isActive ? "accent.primary" : "text.primary"}
      fontWeight={isActive ? "bold" : "normal"}
      _hover={{
        bg: hoverBg,
        color: "accent.primary",
      }}
      {...rest}
    >
      <Icon as={icon} mr={sidebarOpen ? "3" : "0"} fontSize="16" />
      {sidebarOpen && <Text>{children}</Text>}
    </Flex>
  )
}

const Sidebar = () => {
  const { sidebarOpen, isMobile, userRole, isAdmin, activeView, toggleActiveView } = useDashboardContext()
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const viewToShow = isAdmin ? activeView : userRole

  // Simular rutas activas para el ejemplo
  const activeRoute = "/dashboard"

  return (
    <Box
      as="nav"
      position="fixed"
      left="0"
      h="calc(100vh - 60px)"
      top="60px"
      w={sidebarOpen ? "250px" : "80px"}
      bg={bgColor}
      borderRightWidth="1px"
      borderColor={borderColor}
      transition="width 0.3s ease"
      overflowX="hidden"
      zIndex="900"
      display={isMobile && !sidebarOpen ? "none" : "block"}
    >
      <VStack align="stretch" spacing={1} py={4}>
        {/* Selector de vista para admin */}
        {isAdmin && (
          <Box mx={2} mb={2} p={3} bg="orange.50" borderRadius="md" display={sidebarOpen ? "block" : "none"}>
            <Text fontSize="sm" fontWeight="bold" mb={2}>
              Vista de Administrador
            </Text>
            <Button
              size="sm"
              colorScheme={activeView === "buyer" ? "green" : "gray"}
              mr={2}
              onClick={() => toggleActiveView()}
              isActive={activeView === "buyer"}
            >
              Comprador
            </Button>
            <Button
              size="sm"
              colorScheme={activeView === "seller" ? "blue" : "gray"}
              onClick={() => toggleActiveView()}
              isActive={activeView === "seller"}
            >
              Vendedor
            </Button>
          </Box>
        )}

        <NavItem icon={FaHome} to="/dashboard" isActive={activeRoute === "/dashboard"}>
          Inicio
        </NavItem>

        {/* Menú Buyer */}
        {viewToShow === "buyer" && (
          <>
            <NavItem icon={FaShoppingBag} to="/dashboard/orders" isActive={activeRoute === "/dashboard/orders"}>
              Mis Compras
            </NavItem>
            <NavItem icon={FaHeart} to="/dashboard/favorites" isActive={activeRoute === "/dashboard/favorites"}>
              Favoritos
            </NavItem>
            <NavItem icon={FaUser} to="/dashboard/profile" isActive={activeRoute === "/dashboard/profile"}>
              Mi Perfil
            </NavItem>
          </>
        )}

        {/* Menú Seller */}
        {viewToShow === "seller" && (
          <>
            <NavItem icon={FaStore} to="/dashboard/seller/store" isActive={activeRoute === "/dashboard/seller/store"}>
              Mi Tienda
            </NavItem>
            <NavItem
              icon={FaBox}
              to="/dashboard/seller/products"
              isActive={activeRoute === "/dashboard/seller/products"}
            >
              Productos
            </NavItem>
            <NavItem icon={FaTags} to="/dashboard/seller/orders" isActive={activeRoute === "/dashboard/seller/orders"}>
              Ventas
            </NavItem>
            <NavItem
              icon={FaChartLine}
              to="/dashboard/seller/analytics"
              isActive={activeRoute === "/dashboard/seller/analytics"}
            >
              Estadísticas
            </NavItem>
            <NavItem
              icon={FaMoneyBillWave}
              to="/dashboard/seller/finances"
              isActive={activeRoute === "/dashboard/seller/finances"}
            >
              Finanzas
            </NavItem>
          </>
        )}

        <Divider my={2} />

        <NavItem icon={FaCog} to="/dashboard/settings" isActive={activeRoute === "/dashboard/settings"}>
          Configuración
        </NavItem>
      </VStack>
    </Box>
  )
}

export default Sidebar
