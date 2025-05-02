import {
  Box,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Card,
  CardHeader,
  CardBody,
  Text,
  Flex,
  Icon,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  HStack,
  Progress,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FaShoppingBag,
  FaBox,
  FaChartLine,
  FaMoneyBillWave,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const SellerDashboard = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const recentOrders = [
    { id: "ORD-1234", date: "2023-11-15", status: "Enviado", total: 1250, customer: "Juan Pérez" },
    { id: "ORD-1235", date: "2023-11-14", status: "Procesando", total: 890, customer: "María López" },
    { id: "ORD-1236", date: "2023-11-13", status: "Pendiente", total: 2100, customer: "Carlos Gómez" },
  ]

  const topProducts = [
    { id: 1, name: "Smartphone XYZ", stock: 15, sold: 28, price: 12999 },
    { id: 2, name: "Laptop Ultra", stock: 8, sold: 12, price: 24999 },
    { id: 3, name: "Auriculares Pro", stock: 25, sold: 45, price: 2499 },
  ]

  return (
    <Box>
      <Heading mb={6}>Panel de Vendedor</Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <Flex align="center" mb={2}>
                <Icon as={FaShoppingBag} color="brand.primary.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Ventas Totales</StatLabel>
              </Flex>
              <StatNumber>$45,678</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>23% vs. mes anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <Flex align="center" mb={2}>
                <Icon as={FaBox} color="brand.secondary.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Productos</StatLabel>
              </Flex>
              <StatNumber>24</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>5 nuevos este mes</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <Flex align="center" mb={2}>
                <Icon as={FaChartLine} color="purple.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Conversión</StatLabel>
              </Flex>
              <StatNumber>4.2%</StatNumber>
              <StatHelpText>
                <Flex align="center" color="red.500">
                  <Icon as={FaArrowDown} mr={1} />
                  <Text>0.5% vs. mes anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <Flex align="center" mb={2}>
                <Icon as={FaMoneyBillWave} color="green.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Ganancias</StatLabel>
              </Flex>
              <StatNumber>$12,345</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>18% vs. mes anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={8}>
        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardHeader>
            <Flex justify="space-between" align="center">
              <Heading size="md">Órdenes Recientes</Heading>
              <Button
                as={Link}
                to="/dashboard/seller/orders"
                size="sm"
                colorScheme="blue"
                variant="ghost"
                rightIcon={<FaArrowRight />}
              >
                Ver todas
              </Button>
            </Flex>
          </CardHeader>
          <CardBody>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Orden</Th>
                  <Th>Cliente</Th>
                  <Th>Estado</Th>
                  <Th isNumeric>Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                {recentOrders.map((order) => (
                  <Tr key={order.id}>
                    <Td>
                      <Link to={`/dashboard/seller/orders/${order.id}`}>{order.id}</Link>
                    </Td>
                    <Td>{order.customer}</Td>
                    <Td>
                      <Badge
                        colorScheme={
                          order.status === "Enviado" ? "green" : order.status === "Procesando" ? "blue" : "orange"
                        }
                      >
                        {order.status}
                      </Badge>
                    </Td>
                    <Td isNumeric>${order.total}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>

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
      </SimpleGrid>

      <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
        <CardHeader>
          <Heading size="md">Rendimiento de Ventas</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box>
              <Text fontWeight="medium" mb={2}>
                Ventas Mensuales
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="brand.primary.500">
                $12,345
              </Text>
              <Progress value={75} colorScheme="blue" size="sm" mt={2} />
              <Text fontSize="sm" color="text.secondary" mt={1}>
                75% de la meta mensual
              </Text>
            </Box>

            <Box>
              <Text fontWeight="medium" mb={2}>
                Tasa de Conversión
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="brand.secondary.500">
                4.2%
              </Text>
              <Progress value={60} colorScheme="orange" size="sm" mt={2} />
              <Text fontSize="sm" color="text.secondary" mt={1}>
                60% de la meta mensual
              </Text>
            </Box>

            <Box>
              <Text fontWeight="medium" mb={2}>
                Satisfacción del Cliente
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="green.500">
                4.8/5
              </Text>
              <Progress value={90} colorScheme="green" size="sm" mt={2} />
              <Text fontSize="sm" color="text.secondary" mt={1}>
                Basado en 124 reseñas
              </Text>
            </Box>
          </SimpleGrid>

          <Divider my={6} />

          <Flex justify="center">
            <Button as={Link} to="/dashboard/seller/analytics" colorScheme="blue" rightIcon={<FaChartLine />}>
              Ver Análisis Completo
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Box>
  )
}

export default SellerDashboard
