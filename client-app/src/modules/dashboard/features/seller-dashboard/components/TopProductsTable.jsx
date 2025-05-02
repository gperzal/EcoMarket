import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Flex,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Badge,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const TopProductsTable = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const topProducts = [
    { id: 1, name: "Smartphone XYZ", stock: 15, sold: 28, price: 12999 },
    { id: 2, name: "Laptop Ultra", stock: 8, sold: 12, price: 24999 },
    { id: 3, name: "Auriculares Pro", stock: 25, sold: 45, price: 2499 },
  ]

  return (
    <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
      <CardHeader>
        <Flex justify="space-between" align="center">
          <Heading size="md">Productos Destacados</Heading>
          <Button
            as={Link}
            to="/dashboard/seller/products"
            size="sm"
            colorScheme="blue"
            variant="ghost"
            rightIcon={<FaArrowRight />}
          >
            Ver todos
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Producto</Th>
              <Th>Stock</Th>
              <Th>Vendidos</Th>
              <Th isNumeric>Precio</Th>
            </Tr>
          </Thead>
          <Tbody>
            {topProducts.map((product) => (
              <Tr key={product.id}>
                <Td>
                  <Link to={`/dashboard/seller/products/edit/${product.id}`}>{product.name}</Link>
                </Td>
                <Td>
                  <HStack>
                    <Text>{product.stock}</Text>
                    {product.stock < 10 && (
                      <Badge colorScheme="red" fontSize="xs">
                        Bajo
                      </Badge>
                    )}
                  </HStack>
                </Td>
                <Td>{product.sold}</Td>
                <Td isNumeric>${product.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default TopProductsTable
