"use client"

import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Select,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  Icon,
  useColorModeValue,
  VStack,
  Divider,
} from "@chakra-ui/react"
import {
  FaMoneyBillWave,
  FaArrowUp,
  FaArrowDown,
  FaDownload,
  FaFileInvoice,
  FaWallet,
  FaExchangeAlt,
  FaChartLine,
  FaCalendarAlt,
  FaInfoCircle,
  FaPlus,
} from "react-icons/fa"
import { useState } from "react"

const Finances = () => {
  const [timeRange, setTimeRange] = useState("30days")
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo para transacciones
  const transactions = [
    {
      id: "TRX-1234",
      date: "2023-11-15",
      type: "Venta",
      description: "Orden #ORD-1234",
      amount: 1250,
      status: "Completado",
    },
    {
      id: "TRX-1235",
      date: "2023-11-14",
      type: "Venta",
      description: "Orden #ORD-1235",
      amount: 890,
      status: "Completado",
    },
    {
      id: "TRX-1236",
      date: "2023-11-13",
      type: "Retiro",
      description: "Transferencia bancaria",
      amount: -2000,
      status: "Completado",
    },
    {
      id: "TRX-1237",
      date: "2023-11-10",
      type: "Venta",
      description: "Orden #ORD-1237",
      amount: 1500,
      status: "Completado",
    },
    {
      id: "TRX-1238",
      date: "2023-11-08",
      type: "Comisión",
      description: "Comisión de plataforma",
      amount: -125,
      status: "Completado",
    },
    {
      id: "TRX-1239",
      date: "2023-11-05",
      type: "Venta",
      description: "Orden #ORD-1239",
      amount: 3200,
      status: "Completado",
    },
    {
      id: "TRX-1240",
      date: "2023-11-01",
      type: "Retiro",
      description: "Transferencia bancaria",
      amount: -3000,
      status: "Completado",
    },
  ]

  // Datos de ejemplo para facturas
  const invoices = [
    {
      id: "INV-1234",
      date: "2023-11-30",
      period: "Noviembre 2023",
      amount: 125,
      status: "Pendiente",
    },
    {
      id: "INV-1233",
      date: "2023-10-31",
      period: "Octubre 2023",
      amount: 98,
      status: "Pagado",
    },
    {
      id: "INV-1232",
      date: "2023-09-30",
      period: "Septiembre 2023",
      amount: 112,
      status: "Pagado",
    },
  ]

  // Datos de ejemplo para métodos de pago
  const paymentMethods = [
    {
      id: 1,
      type: "bank",
      name: "Banco Nacional",
      accountNumber: "****5678",
      isDefault: true,
    },
    {
      id: 2,
      type: "paypal",
      name: "PayPal",
      accountNumber: "usuario@ejemplo.com",
      isDefault: false,
    },
  ]

  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={6}
      >
        <Heading mb={{ base: 4, md: 0 }}>Finanzas</Heading>
        <HStack>
          <Select maxW="200px" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
            <option value="7days">Últimos 7 días</option>
            <option value="30days">Últimos 30 días</option>
            <option value="90days">Últimos 90 días</option>
            <option value="year">Este año</option>
          </Select>
          <Button leftIcon={<FaDownload />} variant="outline">
            Exportar
          </Button>
        </HStack>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <Flex align="center" mb={2}>
                <Icon as={FaMoneyBillWave} color="green.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Balance Disponible</StatLabel>
              </Flex>
              <StatNumber>$4,523</StatNumber>
              <Flex justify="flex-end" mt={2}>
                <Button size="xs" colorScheme="blue">
                  Retirar Fondos
                </Button>
              </Flex>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <Flex align="center" mb={2}>
                <Icon as={FaArrowUp} color="brand.primary.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Ingresos</StatLabel>
              </Flex>
              <StatNumber>$6,840</StatNumber>
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
                <Icon as={FaArrowDown} color="red.500" boxSize={5} mr={2} />
                <StatLabel fontSize="lg">Gastos</StatLabel>
              </Flex>
              <StatNumber>$2,317</StatNumber>
              <StatHelpText>
                <Flex align="center" color="red.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>5% vs. periodo anterior</Text>
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
                <StatLabel fontSize="lg">Ganancias Netas</StatLabel>
              </Flex>
              <StatNumber>$4,523</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>18% vs. periodo anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Tabs colorScheme="blue" mb={8}>
        <TabList>
          <Tab>Transacciones</Tab>
          <Tab>Facturas</Tab>
          <Tab>Métodos de Pago</Tab>
          <Tab>Informes</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Historial de Transacciones</Heading>
              </CardHeader>
              <CardBody>
                <Box overflowX="auto">
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>ID</Th>
                        <Th>Fecha</Th>
                        <Th>Tipo</Th>
                        <Th>Descripción</Th>
                        <Th isNumeric>Monto</Th>
                        <Th>Estado</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {transactions.map((transaction) => (
                        <Tr key={transaction.id}>
                          <Td fontWeight="medium">{transaction.id}</Td>
                          <Td>{transaction.date}</Td>
                          <Td>
                            <Badge
                              colorScheme={
                                transaction.type === "Venta"
                                  ? "green"
                                  : transaction.type === "Retiro"
                                    ? "blue"
                                    : "orange"
                              }
                            >
                              {transaction.type}
                            </Badge>
                          </Td>
                          <Td>{transaction.description}</Td>
                          <Td isNumeric color={transaction.amount > 0 ? "green.500" : "red.500"} fontWeight="bold">
                            {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount)}
                          </Td>
                          <Td>
                            <Badge
                              colorScheme={
                                transaction.status === "Completado"
                                  ? "green"
                                  : transaction.status === "Pendiente"
                                    ? "orange"
                                    : "red"
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Facturas</Heading>
              </CardHeader>
              <CardBody>
                <Box overflowX="auto">
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>ID</Th>
                        <Th>Fecha</Th>
                        <Th>Periodo</Th>
                        <Th isNumeric>Monto</Th>
                        <Th>Estado</Th>
                        <Th>Acciones</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {invoices.map((invoice) => (
                        <Tr key={invoice.id}>
                          <Td fontWeight="medium">{invoice.id}</Td>
                          <Td>{invoice.date}</Td>
                          <Td>{invoice.period}</Td>
                          <Td isNumeric>${invoice.amount}</Td>
                          <Td>
                            <Badge
                              colorScheme={
                                invoice.status === "Pagado"
                                  ? "green"
                                  : invoice.status === "Pendiente"
                                    ? "orange"
                                    : "red"
                              }
                            >
                              {invoice.status}
                            </Badge>
                          </Td>
                          <Td>
                            <Button leftIcon={<FaFileInvoice />} size="sm" variant="ghost">
                              Ver
                            </Button>
                            <Button leftIcon={<FaDownload />} size="sm" variant="ghost">
                              Descargar
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </Box>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Flex justify="space-between" align="center">
                  <Heading size="md">Métodos de Pago</Heading>
                  <Button leftIcon={<FaPlus />} colorScheme="blue" size="sm">
                    Añadir Método
                  </Button>
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {paymentMethods.map((method) => (
                    <Box
                      key={method.id}
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      position="relative"
                    >
                      <Flex justify="space-between" align="center">
                        <Flex align="center">
                          <Box mr={4} fontSize="2xl" color="brand.primary.500">
                            <FaWallet />
                          </Box>
                          <Box>
                            <Flex align="center" mb={1}>
                              <Text fontWeight="bold" mr={2}>
                                {method.name}
                              </Text>
                              {method.isDefault && (
                                <Badge colorScheme="green" fontSize="xs">
                                  Predeterminado
                                </Badge>
                              )}
                            </Flex>
                            <Text fontSize="sm" color="text.secondary">
                              {method.accountNumber}
                            </Text>
                          </Box>
                        </Flex>
                        <HStack>
                          <Button size="sm" variant="ghost">
                            Editar
                          </Button>
                          {!method.isDefault && (
                            <Button size="sm" variant="ghost">
                              Eliminar
                            </Button>
                          )}
                        </HStack>
                      </Flex>
                    </Box>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
                <CardHeader>
                  <Heading size="md">Informes Disponibles</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    <Flex
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      justify="space-between"
                      align="center"
                    >
                      <Flex align="center">
                        <Icon as={FaChartLine} mr={3} color="brand.primary.500" />
                        <Text fontWeight="bold">Informe de Ventas</Text>
                      </Flex>
                      <Button size="sm" leftIcon={<FaDownload />}>
                        Descargar
                      </Button>
                    </Flex>

                    <Flex
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      justify="space-between"
                      align="center"
                    >
                      <Flex align="center">
                        <Icon as={FaExchangeAlt} mr={3} color="brand.primary.500" />
                        <Text fontWeight="bold">Informe de Transacciones</Text>
                      </Flex>
                      <Button size="sm" leftIcon={<FaDownload />}>
                        Descargar
                      </Button>
                    </Flex>

                    <Flex
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      justify="space-between"
                      align="center"
                    >
                      <Flex align="center">
                        <Icon as={FaFileInvoice} mr={3} color="brand.primary.500" />
                        <Text fontWeight="bold">Informe de Impuestos</Text>
                      </Flex>
                      <Button size="sm" leftIcon={<FaDownload />}>
                        Descargar
                      </Button>
                    </Flex>

                    <Flex
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      justify="space-between"
                      align="center"
                    >
                      <Flex align="center">
                        <Icon as={FaCalendarAlt} mr={3} color="brand.primary.500" />
                        <Text fontWeight="bold">Informe Anual</Text>
                      </Flex>
                      <Button size="sm" leftIcon={<FaDownload />}>
                        Descargar
                      </Button>
                    </Flex>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
                <CardHeader>
                  <Heading size="md">Información Fiscal</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    <Box>
                      <Text fontWeight="bold" mb={1}>
                        Información de Facturación
                      </Text>
                      <Text>TechStore S.A.</Text>
                      <Text>RFC: TECH123456ABC</Text>
                      <Text>Dirección Fiscal: Calle Principal 123, Ciudad Ejemplo</Text>
                    </Box>

                    <Divider />

                    <Box>
                      <Text fontWeight="bold" mb={1}>
                        Régimen Fiscal
                      </Text>
                      <Text>Régimen General de Ley</Text>
                    </Box>

                    <Divider />

                    <Flex
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor="blue.100"
                      bg="blue.50"
                      _dark={{ bg: "blue.900", borderColor: "blue.800" }}
                    >
                      <Icon as={FaInfoCircle} mr={3} color="blue.500" mt={1} />
                      <Box>
                        <Text fontWeight="bold">Recordatorio</Text>
                        <Text fontSize="sm">
                          Recuerda que debes declarar tus ingresos según las regulaciones fiscales de tu país. Consulta
                          con un contador para más información.
                        </Text>
                      </Box>
                    </Flex>

                    <Button leftIcon={<FaFileInvoice />} colorScheme="blue" alignSelf="flex-start">
                      Actualizar Información Fiscal
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Finances
