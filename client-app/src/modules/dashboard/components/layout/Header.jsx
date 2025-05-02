"use client"

import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Badge,
  useColorMode,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react"
import { FaBars, FaSearch, FaBell, FaShoppingCart, FaUser, FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa"
import { useDashboardContext } from "../../context/DashboardContext"

const Header = () => {
  const { toggleSidebar, userRole, toggleUserRole } = useDashboardContext()
  const { colorMode, toggleColorMode } = useColorMode()

  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      py={2}
      px={4}
      bg={bgColor}
      borderBottomWidth="1px"
      borderColor={borderColor}
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex align="center">
        <IconButton aria-label="Menu" icon={<FaBars />} variant="ghost" onClick={toggleSidebar} mr={4} />
        <Text fontSize="xl" fontWeight="bold" color="accent.primary" display={{ base: "none", md: "block" }}>
          MiMarketplace
        </Text>
      </Flex>

      <InputGroup maxW="500px" mx={4} display={{ base: "none", md: "block" }}>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray.300" />
        </InputLeftElement>
        <Input placeholder="Buscar productos, marcas y más..." borderRadius="full" />
      </InputGroup>

      <HStack spacing={3}>
        <Button size="sm" colorScheme={userRole === "seller" ? "orange" : "blue"} onClick={toggleUserRole}>
          {userRole === "buyer" ? "Cambiar a Vendedor" : "Cambiar a Comprador"}
        </Button>

        <IconButton
          aria-label={colorMode === "light" ? "Modo oscuro" : "Modo claro"}
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          variant="ghost"
          onClick={toggleColorMode}
        />

        <Box position="relative" display={{ base: "none", sm: "block" }}>
          <IconButton aria-label="Notificaciones" icon={<FaBell />} variant="ghost" />
          <Badge position="absolute" top="-1" right="-1" colorScheme="red" borderRadius="full" fontSize="xs">
            3
          </Badge>
        </Box>

        <Box position="relative" display={{ base: "none", sm: "block" }}>
          <IconButton aria-label="Carrito" icon={<FaShoppingCart />} variant="ghost" />
          <Badge position="absolute" top="-1" right="-1" colorScheme="green" borderRadius="full" fontSize="xs">
            2
          </Badge>
        </Box>

        <Menu>
          <MenuButton>
            <Avatar size="sm" name="Usuario" src="https://bit.ly/broken-link" />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaUser />}>Mi perfil</MenuItem>
            <MenuItem icon={<FaSignOutAlt />}>Cerrar sesión</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  )
}

export default Header
