"use client"

import React from "react"

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
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Progress,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaShoppingBag, FaUsers, FaMoneyBillWave, FaArrowUp, FaArrowDown } from "react-icons/fa"
import { useState } from "react"

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("30days")

  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const topProducts = [
    { id: 1, name: "Smartphone XYZ", sold: 28, revenue: 36372 },
    { id: 2, name: "Laptop Ultra", sold: 12, revenue: 29988 },
    { id: 3, name: "Auriculares Pro", sold: 45, revenue: 11245 },
    { id: 4, name: 'Monitor 27"', sold: 18, revenue: 16198 },
    { id: 5, name: "Teclado Mecánico", sold: 32, revenue: 6080 },
  ]

  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={6}
      >
        <Heading mb={{ base: 4, md: 0 }}>Análisis de Ventas</Heading>
        <Select maxW={{ base: "100%", md: "200px" }} value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
          <option value="7days">Últimos 7 días</option>
          <option value="30days">Últimos 30 días</option>
          <option value="90days">Últimos 90 días</option>
          <option value="year">Este año</option>
        </Select>
      </Flex>

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
                  <Text>23% vs. periodo anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <Flex align="center" mb={2}>
                <Icon as={FaShoppingBag} color="brand.secondary.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Órdenes</StatLabel>
              </Flex>
              <StatNumber>124</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>15% vs. periodo anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <Flex align="center" mb={2}>
                <Icon as={FaUsers} color="purple.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Nuevos Clientes</StatLabel>
              </Flex>
              <StatNumber>45</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>12% vs. periodo anterior</Text>
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
                <StatLabel fontSize="lg">Valor Promedio</StatLabel>
              </Flex>
              <StatNumber>$368</StatNumber>
              <StatHelpText>
                <Flex align="center" color="red.500">
                  <Icon as={FaArrowDown} mr={1} />
                  <Text>5% vs. periodo anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={8}>
        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardHeader>
            <Heading size="md">Rendimiento de Ventas</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px" display="flex" alignItems="center" justifyContent="center">
              <Text color="text.secondary">
                [Aquí iría un gráfico de líneas mostrando las ventas a lo largo del tiempo]
              </Text>
            </Box>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardHeader>
            <Heading size="md">Distribución de Ventas por Categoría</Heading>
          </CardHeader>
          <CardBody>
            <Box h="300px" display="flex" alignItems="center" justifyContent="center">
              <Text color="text.secondary">
                [Aquí iría un gráfico circular mostrando la distribución de ventas por categoría]
              </Text>
            </Box>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardHeader>
            <Heading size="md">Productos Más Vendidos</Heading>
          </CardHeader>
          <CardBody>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Producto</Th>
                  <Th isNumeric>Vendidos</Th>
                  <Th isNumeric>Ingresos</Th>
                </Tr>
              </Thead>
              <Tbody>
                {topProducts.map((product) => (
                  <Tr key={product.id}>
                    <Td>{product.name}</Td>
                    <Td isNumeric>{product.sold}</Td>
                    <Td isNumeric>${product.revenue}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardHeader>
            <Heading size="md">Métricas de Rendimiento</Heading>
          </CardHeader>
          <CardBody>
            <VStack spacing={6} align="stretch">
              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">Tasa de Conversión</Text>
                  <Text fontWeight="bold">4.2%</Text>
                </Flex>
                <Progress value={42} colorScheme="blue" size="sm" />
                <Flex justify="space-between" mt={1}>
                  <Text fontSize="sm" color="text.secondary">
                    Meta: 5%
                  </Text>
                  <Text fontSize="sm" color="text.secondary">
                    84% completado
                  </Text>
                </Flex>
              </Box>

              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">Tasa de Abandono de Carrito</Text>
                  <Text fontWeight="bold">28%</Text>
                </Flex>
                <Progress value={72} colorScheme="green" size="sm" />
                <Flex justify="space-between" mt={1}>
                  <Text fontSize="sm" color="text.secondary">
                    Meta: &lt;30%
                  </Text>
                  <Text fontSize="sm" color="text.secondary">
                    Buen rendimiento
                  </Text>
                </Flex>
              </Box>

              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">Satisfacción del Cliente</Text>
                  <Text fontWeight="bold">4.8/5</Text>
                </Flex>
                <Progress value={96} colorScheme="green" size="sm" />
                <Flex justify="space-between" mt={1}>
                  <Text fontSize="sm" color="text.secondary">
                    Meta: 4.5/5
                  </Text>
                  <Text fontSize="sm" color="text.secondary">
                    Superada
                  </Text>
                </Flex>
              </Box>

              <Box>
                <Flex justify="space-between" mb={2}>
                  <Text fontWeight="medium">Tiempo Promedio de Envío</Text>
                  <Text fontWeight="bold">2.3 días</Text>
                </Flex>
                <Progress value={85} colorScheme="blue" size="sm" />
                <Flex justify="space-between" mt={1}>
                  <Text fontSize="sm" color="text.secondary">
                    Meta: 2 días
                  </Text>
                  <Text fontSize="sm" color="text.secondary">
                    85% completado
                  </Text>
                </Flex>
              </Box>
            </VStack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  )
}

// Componente VStack para el ejemplo
const VStack = ({ children, spacing = 4, align = "stretch", ...props }) => {
  return (
    <Flex direction="column" {...props}>
      {React.Children.map(children, (child, index) => (
        <>
          {child}
          {index < React.Children.count(children) - 1 && <Box h={spacing} />}
        </>
      ))}
    </Flex>
  )
}

export default Analytics
