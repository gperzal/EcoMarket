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
  Badge,
  Flex,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Card,
  CardBody,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react"
import {
  FaSearch,
  FaEllipsisV,
  FaEye,
  FaPrint,
  FaFileInvoice,
  FaShippingFast,
  FaExclamationTriangle,
} from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"

const SellerOrders = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [dateFilter, setDateFilter] = useState("all")

  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const orders = [
    {
      id: "ORD-1234",
      date: "2023-11-15",
      status: "Enviado",
      total: 1250,
      customer: "Juan Pérez",
      items: 1,
      payment: "Tarjeta de crédito",
    },
    {
      id: "ORD-1235",
      date: "2023-11-14",
      status: "Procesando",
      total: 890,
      customer: "María López",
      items: 2,
      payment: "PayPal",
    },
    {
      id: "ORD-1236",
      date: "2023-11-13",
      status: "Pendiente",
      total: 2100,
      customer: "Carlos Gómez",
      items: 3,
      payment: "Transferencia bancaria",
    },
    {
      id: "ORD-1237",
      date: "2023-11-10",
      status: "Entregado",
      total: 1500,
      customer: "Ana Rodríguez",
      items: 1,
      payment: "Tarjeta de crédito",
    },
    {
      id: "ORD-1238",
      date: "2023-11-08",
      status: "Cancelado",
      total: 750,
      customer: "Pedro Sánchez",
      items: 2,
      payment: "PayPal",
    },
    {
      id: "ORD-1239",
      date: "2023-11-05",
      status: "Entregado",
      total: 3200,
      customer: "Laura Martínez",
      items: 4,
      payment: "Tarjeta de crédito",
    },
  ]

  // Filtrar órdenes por estado (para las pestañas)
  const getFilteredOrders = (status) => {
    let filtered = orders

    // Filtrar por estado si no es "all"
    if (status !== "all") {
      filtered = filtered.filter((order) => order.status.toLowerCase() === status.toLowerCase())
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          order.customer.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtrar por fecha
    if (dateFilter !== "all") {
      const today = new Date()
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(today.getDate() - 30)
      const ninetyDaysAgo = new Date()
      ninetyDaysAgo.setDate(today.getDate() - 90)

      filtered = filtered.filter((order) => {
        const orderDate = new Date(order.date)
        if (dateFilter === "30days") {
          return orderDate >= thirtyDaysAgo
        } else if (dateFilter === "90days") {
          return orderDate >= ninetyDaysAgo
        }
        return true
      })
    }

    return filtered
  }

  return (
    <Box>
      <Heading mb={6}>Gestión de Ventas</Heading>

      <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
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
                placeholder="Buscar por ID o cliente"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>

            <Select
              maxW={{ base: "100%", md: "200px" }}
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            >
              <option value="all">Todas las fechas</option>
              <option value="30days">Últimos 30 días</option>
              <option value="90days">Últimos 90 días</option>
            </Select>
          </Flex>
        </CardBody>
      </Card>

      <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
        <Tabs colorScheme="blue">
          <TabList>
            <Tab>Todas</Tab>
            <Tab>Pendientes</Tab>
            <Tab>Procesando</Tab>
            <Tab>Enviadas</Tab>
            <Tab>Entregadas</Tab>
            <Tab>Canceladas</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              <OrdersTable orders={getFilteredOrders("all")} />
            </TabPanel>
            <TabPanel p={0}>
              <OrdersTable orders={getFilteredOrders("pendiente")} />
            </TabPanel>
            <TabPanel p={0}>
              <OrdersTable orders={getFilteredOrders("procesando")} />
            </TabPanel>
            <TabPanel p={0}>
              <OrdersTable orders={getFilteredOrders("enviado")} />
            </TabPanel>
            <TabPanel p={0}>
              <OrdersTable orders={getFilteredOrders("entregado")} />
            </TabPanel>
            <TabPanel p={0}>
              <OrdersTable orders={getFilteredOrders("cancelado")} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Box>
  )
}

// Componente de tabla de órdenes
const OrdersTable = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <Box p={6} textAlign="center">
        <Flex direction="column" align="center" justify="center" py={10}>
          <Icon as={FaExclamationTriangle} boxSize={12} color="gray.400" mb={4} />
          <Text fontSize="lg" mb={2}>
            No se encontraron órdenes
          </Text>
          <Text color="text.secondary">Intenta con otros filtros o términos de búsqueda</Text>
        </Flex>
      </Box>
    )
  }

  return (
    <Box overflowX="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID Orden</Th>
            <Th>Fecha</Th>
            <Th>Cliente</Th>
            <Th>Items</Th>
            <Th>Método de Pago</Th>
            <Th isNumeric>Total</Th>
            <Th>Estado</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td fontWeight="medium">{order.id}</Td>
              <Td>{order.date}</Td>
              <Td>{order.customer}</Td>
              <Td>{order.items}</Td>
              <Td>{order.payment}</Td>
              <Td isNumeric>${order.total}</Td>
              <Td>
                <Badge
                  colorScheme={
                    order.status === "Entregado"
                      ? "green"
                      : order.status === "Enviado"
                        ? "blue"
                        : order.status === "Procesando"
                          ? "purple"
                          : order.status === "Pendiente"
                            ? "orange"
                            : "red"
                  }
                >
                  {order.status}
                </Badge>
              </Td>
              <Td>
                <Menu>
                  <MenuButton as={IconButton} icon={<FaEllipsisV />} variant="ghost" size="sm" />
                  <MenuList>
                    <MenuItem icon={<FaEye />} as={Link} to={`/dashboard/seller/orders/${order.id}`}>
                      Ver Detalles
                    </MenuItem>
                    <MenuItem icon={<FaPrint />}>Imprimir Orden</MenuItem>
                    <MenuItem icon={<FaFileInvoice />}>Generar Factura</MenuItem>
                    {(order.status === "Pendiente" || order.status === "Procesando") && (
                      <MenuItem icon={<FaShippingFast />}>Marcar como Enviado</MenuItem>
                    )}
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default SellerOrders
