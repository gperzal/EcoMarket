"use client"

import { Box, VStack, Icon, Text, Divider, useColorModeValue } from "@chakra-ui/react"
import { NavLink, useLocation } from "react-router-dom"
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
import { useAuth } from "../../../auth/hooks/useAuth.js"

const NavItem = ({ icon, children, to, isActive, ...rest }) => {
  const { sidebarOpen } = useDashboardContext()
  const activeBg = useColorModeValue("blue.50", "blue.900")
  const hoverBg = useColorModeValue("gray.100", "gray.700")

  // No pasar isActive al Box, solo usarlo para lógica de estilos
  return (
    <Box
      as={NavLink}
      to={to}
      display="flex"
      alignItems="center"
      p="3"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      bg={isActive ? activeBg : "transparent"}
      color={isActive ? "blue.500" : "inherit"}
      _hover={{
        bg: hoverBg,
        color: "blue.500",
      }}
      {...rest}
    >
      <Icon as={icon} mr={sidebarOpen ? "3" : "0"} fontSize="16" />
      {sidebarOpen && <Text>{children}</Text>}
    </Box>
  )
}

const Sidebar = () => {
  const { sidebarOpen, isMobile, activeView } = useDashboardContext()
  const location = useLocation()
  const { auth } = useAuth()
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  if (!auth) return null

  return (
    
    <Box
    
      as="nav"
      position="fixed"
      top="60px"
      left="0"
      h="calc(100vh - 60px)"
      w={sidebarOpen ? "250px" : "70px"}
      display={{ base: sidebarOpen ? "block" : "none", md: "block" }}
      bg={bgColor}
      borderRightWidth="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      overflowY="auto"
      zIndex="sticky"
    >
      <VStack spacing="2" align="stretch" py="4">
       <NavItem
              icon={FaHome} 
              to="/" 
              isActive={location.pathname === "/"}
              >
                Inicio
        </NavItem>            
        <NavItem 
          icon={FaHome} 
          to="/dashboard" 
          isActive={location.pathname === "/dashboard"}
        >
          Mi Cuenta
        </NavItem>

        {activeView === "buyer" && (
          <>
            <NavItem
              icon={FaShoppingBag}
              to="/dashboard/orders"
              isActive={location.pathname.startsWith("/dashboard/orders")}
            >
              Mis Compras
            </NavItem>
            <NavItem
              icon={FaHeart}
              to="/dashboard/favorites"
              isActive={location.pathname === "/dashboard/favorites"}
            >
              Favoritos
            </NavItem>
            <NavItem
              icon={FaUser}
              to="/dashboard/profile"
              isActive={location.pathname === "/dashboard/profile"}
            >
              Mi Perfil
            </NavItem>
          </>
        )}

        {activeView === "seller" && (
          <>
            <NavItem
              icon={FaStore}
              to="/dashboard/seller/store"
              isActive={location.pathname === "/dashboard/seller/store"}
            >
              Mi Tienda
            </NavItem>
            <NavItem
              icon={FaBox}
              to="/dashboard/seller/products"
              isActive={location.pathname.startsWith("/dashboard/seller/products")}
            >
              Productos
            </NavItem>
            <NavItem
              icon={FaTags}
              to="/dashboard/seller/orders"
              isActive={location.pathname === "/dashboard/seller/orders"}
            >
              Ventas
            </NavItem>
            <NavItem
              icon={FaChartLine}
              to="/dashboard/seller/analytics"
              isActive={location.pathname === "/dashboard/seller/analytics"}
            >
              Estadísticas
            </NavItem>
            <NavItem
              icon={FaMoneyBillWave}
              to="/dashboard/seller/finances"
              isActive={location.pathname === "/dashboard/seller/finances"}
            >
              Finanzas
            </NavItem>
          </>
        )}

        <Divider my="2" />

        <NavItem
          icon={FaCog}
          to="/dashboard/settings"
          isActive={location.pathname === "/dashboard/settings"}
        >
          Configuración
        </NavItem>
      </VStack>
    </Box>
  )
}

export default Sidebar
