"use client"

import { useState } from "react"
import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  Flex,
  Select,
  Text,
  HStack,
  Icon,
  useColorModeValue,
  Card,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useToast,
} from "@chakra-ui/react"
import {
  FaDownload,
  FaFilter,
  FaEllipsisV,
  FaEye,
  FaCheck,
  FaTimes,
  FaExclamationTriangle,
  FaShoppingBag,
  FaStore,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa"

// Datos de ejemplo
const salesData = [
  { id: 1, date: "2023-04-15", total: 12500, orders: 145, avgOrderValue: 86.2, growth: 8.5 },
  { id: 2, date: "2023-04-14", total: 11200, orders: 132, avgOrderValue: 84.8, growth: 5.2 },
  { id: 3, date: "2023-04-13", total: 10800, orders: 128, avgOrderValue: 84.4, growth: 3.1 },
  { id: 4, date: "2023-04-12", total: 9500, orders: 115, avgOrderValue: 82.6, growth: -1.5 },
  { id: 5, date: "2023-04-11", total: 10200, orders: 122, avgOrderValue: 83.6, growth: 2.8 },
  { id: 6, date: "2023-04-10", total: 9800, orders: 118, avgOrderValue: 83.1, growth: 1.2 },
  { id: 7, date: "2023-04-09", total: 9200, orders: 110, avgOrderValue: 83.6, growth: -0.8 },
]

const reportedItems = [
  {
    id: 1,
    type: "product",
    name: "Smartphone XYZ",
    reason: "Producto falsificado",
    status: "pending",
    date: "2023-04-15",
  },
  {
    id: 2,
    type: "seller",
    name: "TechStore",
    reason: "Incumplimiento de envío",
    status: "resolved",
    date: "2023-04-14",
  },
  {
    id: 3,
    type: "review",
    name: "Review #45892",
    reason: "Contenido inapropiado",
    status: "pending",
    date: "2023-04-15",
  },
  {
    id: 4,
    type: "product",
    name: "Laptop ABC",
    reason: "Descripción engañosa",
    status: "rejected",
    date: "2023-04-13",
  },
  { id: 5, type: "buyer", name: "user123", reason: "Comportamiento sospechoso", status: "pending", date: "2023-04-15" },
  {
    id: 6,
    type: "seller",
    name: "FashionOutlet",
    reason: "Productos de baja calidad",
    status: "pending",
    date: "2023-04-14",
  },
]

const ReportsPage = () => {
  const [timeRange, setTimeRange] = useState("week")
  const [reportFilter, setReportFilter] = useState("")
  const toast = useToast()

  // Colores
  const cardBg = useColorModeValue("white", "gray.800")

  // Filtrar reportes
  const filteredReports = reportFilter ? reportedItems.filter((item) => item.status === reportFilter) : reportedItems

  // Manejar acción de reporte
  const handleReportAction = (action, report) => {
    let message = ""

    switch (action) {
      case "view":
        message = `Viendo detalles del reporte: ${report.name}`
        break
      case "approve":
        message = `Reporte aprobado: ${report.name}`
        break
      case "reject":
        message = `Reporte rechazado: ${report.name}`
        break
      default:
        return
    }

    toast({
      title: "Acción realizada",
      description: message,
      status: "info",
      duration: 3000,
      isClosable: true,
    })
  }

  // Renderizar badge de estado
  const renderStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <Badge colorScheme="yellow">Pendiente</Badge>
      case "resolved":
        return <Badge colorScheme="green">Resuelto</Badge>
      case "rejected":
        return <Badge colorScheme="red">Rechazado</Badge>
      default:
        return null
    }
  }

  return (
    <Box p={5}>
      <Heading size="lg" mb={6}>
        Reportes y Estadísticas
      </Heading>

      <Tabs colorScheme="blue" mb={6}>
        <TabList>
          <Tab>Resumen</Tab>
          <Tab>Ventas</Tab>
          <Tab>Reportes de Usuarios</Tab>
        </TabList>

        <TabPanels>
          {/* Panel de Resumen */}
          <TabPanel>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} mb={6}>
              <Card bg={cardBg}>
                <CardBody>
                  <Stat>
                    <HStack mb={2}>
                      <Icon as={FaShoppingBag} color="green.500" />
                      <StatLabel>Ventas Totales</StatLabel>
                    </HStack>
                    <StatNumber>$72,345</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      8.5% desde la semana pasada
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>

              <Card bg={cardBg}>
                <CardBody>
                  <Stat>
                    <HStack mb={2}>
                      <Icon as={FaStore} color="blue.500" />
                      <StatLabel>Nuevas Tiendas</StatLabel>
                    </HStack>
                    <StatNumber>24</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      12% desde la semana pasada
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>

              <Card bg={cardBg}>
                <CardBody>
                  <Stat>
                    <HStack mb={2}>
                      <Icon as={FaUsers} color="purple.500" />
                      <StatLabel>Nuevos Usuarios</StatLabel>
                    </HStack>
                    <StatNumber>843</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      5.2% desde la semana pasada
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>

              <Card bg={cardBg}>
                <CardBody>
                  <Stat>
                    <HStack mb={2}>
                      <Icon as={FaExclamationTriangle} color="red.500" />
                      <StatLabel>Reportes Pendientes</StatLabel>
                    </HStack>
                    <StatNumber>18</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      3.1% desde la semana pasada
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
            </SimpleGrid>

            <Text fontSize="lg" fontWeight="bold" mb={3}>
              Acciones Rápidas
            </Text>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
              <Button leftIcon={<FaDownload />} colorScheme="blue">
                Descargar Reporte Completo
              </Button>
              <Button leftIcon={<FaEye />} colorScheme="green">
                Ver Reportes Pendientes
              </Button>
              <Button leftIcon={<FaMoneyBillWave />} colorScheme="purple">
                Reporte Financiero
              </Button>
            </SimpleGrid>
          </TabPanel>

          {/* Panel de Ventas */}
          <TabPanel>
            <Flex justify="space-between" align="center" mb={4}>
              <Heading size="md">Reporte de Ventas</Heading>
              <HStack>
                <Select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} w="150px">
                  <option value="day">Hoy</option>
                  <option value="week">Esta Semana</option>
                  <option value="month">Este Mes</option>
                  <option value="year">Este Año</option>
                </Select>
                <Button leftIcon={<FaDownload />} colorScheme="blue">
                  Exportar
                </Button>
              </HStack>
            </Flex>

            <Box overflowX="auto">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Fecha</Th>
                    <Th isNumeric>Ventas Totales</Th>
                    <Th isNumeric>Órdenes</Th>
                    <Th isNumeric>Valor Promedio</Th>
                    <Th isNumeric>Crecimiento</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {salesData.map((day) => (
                    <Tr key={day.id}>
                      <Td>{day.date}</Td>
                      <Td isNumeric>${day.total.toLocaleString()}</Td>
                      <Td isNumeric>{day.orders}</Td>
                      <Td isNumeric>${day.avgOrderValue}</Td>
                      <Td isNumeric>
                        <HStack justify="flex-end">
                          <StatArrow type={day.growth >= 0 ? "increase" : "decrease"} />
                          <Text>{Math.abs(day.growth)}%</Text>
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </TabPanel>

          {/* Panel de Reportes de Usuarios */}
          <TabPanel>
            <Flex justify="space-between" align="center" mb={4}>
              <Heading size="md">Reportes de Usuarios</Heading>
              <HStack>
                <Select
                  placeholder="Filtrar por estado"
                  value={reportFilter}
                  onChange={(e) => setReportFilter(e.target.value)}
                  w="180px"
                >
                  <option value="">Todos</option>
                  <option value="pending">Pendientes</option>
                  <option value="resolved">Resueltos</option>
                  <option value="rejected">Rechazados</option>
                </Select>
                <Button leftIcon={<FaFilter />} colorScheme="blue" variant="outline">
                  Más Filtros
                </Button>
              </HStack>
            </Flex>

            <Box overflowX="auto">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Tipo</Th>
                    <Th>Elemento</Th>
                    <Th>Razón</Th>
                    <Th>Estado</Th>
                    <Th>Fecha</Th>
                    <Th>Acciones</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredReports.map((report) => (
                    <Tr key={report.id}>
                      <Td>
                        <Badge
                          colorScheme={
                            report.type === "product"
                              ? "blue"
                              : report.type === "seller"
                                ? "orange"
                                : report.type === "buyer"
                                  ? "green"
                                  : "purple"
                          }
                        >
                          {report.type}
                        </Badge>
                      </Td>
                      <Td>{report.name}</Td>
                      <Td>{report.reason}</Td>
                      <Td>{renderStatusBadge(report.status)}</Td>
                      <Td>{report.date}</Td>
                      <Td>
                        <Menu>
                          <MenuButton as={IconButton} icon={<FaEllipsisV />} variant="ghost" size="sm" />
                          <MenuList>
                            <MenuItem icon={<FaEye />} onClick={() => handleReportAction("view", report)}>
                              Ver Detalles
                            </MenuItem>
                            {report.status === "pending" && (
                              <>
                                <MenuItem icon={<FaCheck />} onClick={() => handleReportAction("approve", report)}>
                                  Aprobar
                                </MenuItem>
                                <MenuItem icon={<FaTimes />} onClick={() => handleReportAction("reject", report)}>
                                  Rechazar
                                </MenuItem>
                              </>
                            )}
                          </MenuList>
                        </Menu>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default ReportsPage
