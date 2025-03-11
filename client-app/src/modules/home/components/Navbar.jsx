import React from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Button,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  Tooltip
} from '@chakra-ui/react';
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiSun,
  FiMoon,
  FiChevronDown,
  FiUser,
  FiBell
} from 'react-icons/fi';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const logoSrc = useColorModeValue('/logo.svg', '/logo-dark.svg');
  
  // Refined color scheme for better contrast and accessibility
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("brand.primary.500", "brand.primary.300");
  const menuBgColor = useColorModeValue("white", "gray.800");
  const menuHoverBg = useColorModeValue("brand.primary.50", "brand.primary.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  
  // Cart items count - would be dynamic in a real app
  const cartItemsCount = 3;

  return (
    <Box 
      bg={bgColor} 
      py={3} 
      px={{ base: 4, md: 6 }} 
      position="sticky" 
      top={0} 
      zIndex={20} 
      boxShadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Flex justify="space-between" align="center" maxW="1400px" mx="auto">
        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<FiMenu />}
          variant="ghost"
          color={textColor}
          onClick={onOpen}
          aria-label="Open Menu"
          size="lg"
        />

        {/* Logo */}
        <Image 
          src={logoSrc} 
          alt="BancoSimple Logo" 
          h="40px" 
          mx={{ base: 0, md: 0 }} 
          ml={{ base: 2, md: 0 }}
        />

        {/* Categories - Desktop */}
        <HStack spacing={6} display={{ base: "none", md: "flex" }} ml={8}>
          <Menu>
            <MenuButton 
              as={Button} 
              rightIcon={<FiChevronDown />} 
              variant="ghost" 
              color={textColor}
              _hover={{ bg: menuHoverBg }}
              fontWeight="medium"
            >
              Categorías
            </MenuButton>
            <MenuList 
              bg={menuBgColor} 
              color={textColor} 
              borderColor={borderColor}
              boxShadow="lg"
              py={2}
            >
              <MenuItem _hover={{ bg: menuHoverBg, color: accentColor }}>Ofertas</MenuItem>
              <MenuItem _hover={{ bg: menuHoverBg, color: accentColor }}>Historial</MenuItem>
              <MenuItem _hover={{ bg: menuHoverBg, color: accentColor }}>Supermercado</MenuItem>
              <MenuItem _hover={{ bg: menuHoverBg, color: accentColor }}>Moda</MenuItem>
              <MenuItem _hover={{ bg: menuHoverBg, color: accentColor }}>Vender</MenuItem>
              <MenuItem _hover={{ bg: menuHoverBg, color: accentColor }}>Ayuda</MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        {/* Search - Desktop */}
        <InputGroup 
          maxW="500px" 
          display={{ base: "none", md: "flex" }} 
          mx={4} 
          flex="1"
        >
          <Input 
            placeholder="Buscar productos, marcas y más..." 
            bg={useColorModeValue("gray.50", "gray.700")} 
            borderRadius="full" 
            color={textColor}
            borderColor={borderColor}
            _focus={{ borderColor: accentColor, boxShadow: `0 0 0 1px ${accentColor}` }}
            py={6}
          />
          <InputRightElement h="full" pr={2}>
            <IconButton
              icon={<FiSearch />}
              variant="ghost"
              color={accentColor}
              aria-label="Search"
              borderRadius="full"
              size="sm"
              _hover={{ bg: menuHoverBg }}
            />
          </InputRightElement>
        </InputGroup>

        {/* User Actions */}
        <HStack spacing={{ base: 2, md: 4 }}>
          {/* Theme Toggle */}
          <Tooltip label={colorMode === "light" ? "Modo oscuro" : "Modo claro"}>
            <IconButton
              icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
              variant="ghost"
              color={textColor}
              onClick={toggleColorMode}
              aria-label="Toggle Theme"
              _hover={{ bg: menuHoverBg }}
            />
          </Tooltip>
          
          {/* User Profile - Desktop Only */}
          <Tooltip label="Mi perfil" display={{ base: "none", md: "block" }}>
            <IconButton
              icon={<FiUser />}
              variant="ghost"
              color={textColor}
              aria-label="User Profile"
              _hover={{ bg: menuHoverBg }}
              display={{ base: "none", md: "flex" }}
            />
          </Tooltip>
          
          {/* Notifications - Desktop Only */}
          <Tooltip label="Notificaciones" display={{ base: "none", md: "block" }}>
            <IconButton
              icon={<FiBell />}
              variant="ghost"
              color={textColor}
              aria-label="Notifications"
              _hover={{ bg: menuHoverBg }}
              display={{ base: "none", md: "flex" }}
            />
          </Tooltip>
          
          {/* Shopping Cart */}
          <Box position="relative">
            <Tooltip label="Carrito de compras">
              <IconButton
                icon={<FiShoppingCart />}
                variant="ghost"
                color={textColor}
                aria-label="Shopping Cart"
                _hover={{ bg: menuHoverBg }}
              />
            </Tooltip>
            {cartItemsCount > 0 && (
              <Badge 
                position="absolute" 
                top="-2px" 
                right="-2px"
                colorScheme="red" 
                borderRadius="full" 
                fontSize="xs"
                px={1.5}
              >
                {cartItemsCount}
              </Badge>
            )}
          </Box>
        </HStack>
      </Flex>

      {/* Mobile Search - Display below navbar on small screens */}
      <Box display={{ base: "block", md: "none" }} px={2} pt={3} pb={2}>
        <InputGroup>
          <Input 
            placeholder="Buscar..." 
            bg={useColorModeValue("gray.50", "gray.700")} 
            borderRadius="full" 
            size="md"
            borderColor={borderColor}
          />
          <InputRightElement>
            <FiSearch color={textColor} />
          </InputRightElement>
        </InputGroup>
      </Box>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={menuBgColor} color={textColor}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor={borderColor}>
            <Image src={logoSrc} alt="BancoSimple Logo" h="30px" />
          </DrawerHeader>
          <DrawerBody py={4}>
            <Flex direction="column">
              <Text fontWeight="bold" mb={4} color={accentColor}>Categorías</Text>
              {['Ofertas', 'Historial', 'Supermercado', 'Moda', 'Vender', 'Ayuda'].map((item) => (
                <Box 
                  key={item} 
                  py={3} 
                  borderBottom="1px" 
                  borderColor={borderColor}
                  _hover={{ bg: menuHoverBg, color: accentColor }}
                  cursor="pointer"
                  transition="all 0.2s"
                >
                  {item}
                </Box>
              ))}
              
              <Box mt={8}>
                <Text fontWeight="bold" mb={4} color={accentColor}>Mi cuenta</Text>
                {['Iniciar sesión', 'Mis compras', 'Favoritos', 'Configuración'].map((item) => (
                  <Box 
                    key={item} 
                    py={3} 
                    borderBottom="1px" 
                    borderColor={borderColor}
                    _hover={{ bg: menuHoverBg, color: accentColor }}
                    cursor="pointer"
                    transition="all 0.2s"
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
