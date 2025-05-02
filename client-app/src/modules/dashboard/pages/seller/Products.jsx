"use client"

import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Flex,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  useColorModeValue,
  Card,
  CardBody,
  Icon,
} from "@chakra-ui/react"
import { FaSearch, FaPlus, FaEdit, FaTrash, FaEllipsisV, FaEye, FaCopy, FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"

const Products = () => {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const products = [
    {
      id: 1,
      name: "Smartphone XYZ",
      category: "Electrónicos",
      price: 12999,
      stock: 15,
      status: "Activo",
      image: "/placeholder.svg",
      sold: 28,
    },
    {
      id: 2,
      name: "Laptop Ultra",
      category: "Computadoras",
      price: 24999,
      stock: 8,
      status: "Activo",
      image: "/placeholder.svg",
      sold: 12,
    },
    {
      id: 3,
      name: "Auriculares Pro",
      category: "Accesorios",
      price: 2499,
      stock: 25,
      status: "Activo",
      image: "/placeholder.svg",
      sold: 45,
    },
    {
      id: 4,
      name: "Teclado Mecánico",
      category: "Accesorios",
      price: 1899,
      stock: 0,
      status: "Sin Stock",
      image: "/placeholder.svg",
      sold: 32,
    },
    {
      id: 5,
      name: 'Monitor 27"',
      category: "Computadoras",
      price: 8999,
      stock: 5,
      status: "Activo",
      image: "/placeholder.svg",
      sold: 18,
    },
    {
      id: 6,
      name: "Tablet Pro",
      category: "Electrónicos",
      price: 9999,
      stock: 0,
      status: "Inactivo",
      image: "/placeholder.svg",
      sold: 0,
    },
  ]

  // Filtrar productos
  const filteredProducts = products.filter((product) => {
    // Filtrar por estado
    if (filter !== "all" && product.status.toLowerCase() !== filter.toLowerCase()) {
      return false
    }

    // Filtrar por término de búsqueda
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    return true
  })

  // Manejar eliminación de producto
  const handleDeleteClick = (product) => {
    setSelectedProduct(product)
    onOpen()
  }

  const confirmDelete = () => {
    // Aquí iría la lógica para eliminar el producto
    toast({
      title: "Producto eliminado",
      description: `${selectedProduct.name} ha sido eliminado correctamente.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    onClose()
  }

  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={6}
      >
        <Heading mb={{ base: 4, md: 0 }}>Mis Productos</Heading>
        <Button as={Link} to="/dashboard/seller/products/add" colorScheme="blue" leftIcon={<FaPlus />}>
          Añadir Producto
        </Button>
      </Flex>

      <Card bg={cardBg} boxShadow="md" borderColor={borderColor} mb={6}>
        <CardBody>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "stretch", md: "center" }}
            gap={4}
          >
            <InputGroup maxW={{ base: "100%", md: "300px" }}>
              <InputLeftElement pointerEvents="none">
                <FaSearch color="gray.300" />
              </InputLeftElement>
              <Input
                placeholder="Buscar productos"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>

            <Select maxW={{ base: "100%", md: "200px" }} value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Todos los estados</option>
              <option value="activo">Activos</option>
              <option value="sin stock">Sin Stock</option>
              <option value="inactivo">Inactivos</option>
            </Select>
          </Flex>
        </CardBody>
      </Card>

      {filteredProducts.length === 0 ? (
        <Card bg={cardBg} p={6} textAlign="center">
          <CardBody>
            <Text fontSize="lg">No se encontraron productos que coincidan con tu búsqueda.</Text>
          </CardBody>
        </Card>
      ) : (
        <Card bg={cardBg} boxShadow="md" borderColor={borderColor} overflow="hidden">
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Producto</Th>
                  <Th>Categoría</Th>
                  <Th isNumeric>Precio</Th>
                  <Th isNumeric>Stock</Th>
                  <Th>Estado</Th>
                  <Th isNumeric>Vendidos</Th>
                  <Th>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredProducts.map((product) => (
                  <Tr key={product.id}>
                    <Td>
                      <Flex align="center">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          boxSize="40px"
                          objectFit="cover"
                          mr={3}
                          borderRadius="md"
                        />
                        <Text fontWeight="medium">{product.name}</Text>
                      </Flex>
                    </Td>
                    <Td>{product.category}</Td>
                    <Td isNumeric>${product.price}</Td>
                    <Td isNumeric>
                      <HStack justify="flex-end">
                        <Text>{product.stock}</Text>
                        {product.stock === 0 && (
                          <Badge colorScheme="red" fontSize="xs">
                            Agotado
                          </Badge>
                        )}
                        {product.stock > 0 && product.stock < 10 && (
                          <Badge colorScheme="orange" fontSize="xs">
                            Bajo
                          </Badge>
                        )}
                      </HStack>
                    </Td>
                    <Td>
                      <Badge
                        colorScheme={
                          product.status === "Activo" ? "green" : product.status === "Sin Stock" ? "orange" : "red"
                        }
                      >
                        {product.status}
                      </Badge>
                    </Td>
                    <Td isNumeric>{product.sold}</Td>
                    <Td>
                      <Menu>
                        <MenuButton as={IconButton} icon={<FaEllipsisV />} variant="ghost" size="sm" />
                        <MenuList>
                          <MenuItem icon={<FaEdit />} as={Link} to={`/dashboard/seller/products/edit/${product.id}`}>
                            Editar
                          </MenuItem>
                          <MenuItem icon={<FaEye />}>Ver Detalles</MenuItem>
                          <MenuItem icon={<FaCopy />}>Duplicar</MenuItem>
                          <MenuItem icon={<FaTrash />} color="red.500" onClick={() => handleDeleteClick(product)}>
                            Eliminar
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Card>
      )}

      {/* Modal de confirmación para eliminar */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar Eliminación</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" align="center" mb={4}>
              <Icon as={FaExclamationTriangle} boxSize={12} color="red.500" mb={4} />
              <Text>
                ¿Estás seguro de que deseas eliminar el producto <strong>{selectedProduct?.name}</strong>?
              </Text>
              <Text mt={2} fontSize="sm" color="text.secondary">
                Esta acción no se puede deshacer.
              </Text>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={confirmDelete}>
              Eliminar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default Products
