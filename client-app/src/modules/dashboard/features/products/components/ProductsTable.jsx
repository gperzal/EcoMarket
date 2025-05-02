"use client"

import {
  Card,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Text,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image,
  HStack,
  useColorModeValue,
  CardBody, // Import CardBody
} from "@chakra-ui/react"
import { FaEllipsisV, FaEdit, FaEye, FaCopy, FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"

const ProductsTable = ({ products, onDeleteClick }) => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  if (products.length === 0) {
    return (
      <Card bg={cardBg} p={6} textAlign="center">
        <CardBody>
          <Text fontSize="lg">No se encontraron productos que coincidan con tu búsqueda.</Text>
        </CardBody>
      </Card>
    )
  }

  return (
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
            {products.map((product) => (
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
                      <MenuItem icon={<FaTrash />} color="red.500" onClick={() => onDeleteClick(product)}>
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
  )
}

export default ProductsTable
