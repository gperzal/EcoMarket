"use client"

import {
  Box,
  Grid,
  Heading,
  Text,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Icon,
  Divider,
  Button,
} from "@chakra-ui/react"
import {
  FaUsers,
  FaStore,
  FaExclamationTriangle,
  FaChartLine,
  FaMoneyBillWave,
  FaUserShield,
  FaClipboardList,
} from "react-icons/fa"
import { useDashboardContext } from "../../context/DashboardContext"

const StatCard = ({ title, value, change, icon, colorScheme }) => {
  const isPositive = change > 0

  return (
    <Card>
      <CardHeader pb={0}>
        <Flex justify="space-between" align="center">
          <Text fontSize="md" fontWeight="medium">
            {title}
          </Text>
          <Icon as={icon} boxSize={6} color={`${colorScheme}.500`} />
        </Flex>
      </CardHeader>
      <CardBody>
        <Stat>
          <StatNumber fontSize="2xl">{value}</StatNumber>
          <StatHelpText mb={0}>
            <StatArrow type={isPositive ? "increase" : "decrease"} />
            {Math.abs(change)}% desde el mes pasado
          </StatHelpText>
        </Stat>
      </CardBody>
    </Card>
  )
}

const AdminDashboard = () => {
  const { toggleActiveView, activeView } = useDashboardContext()

  return (
    <Box p={5}>
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading size="lg">Panel de Administración</Heading>
          <Text color="gray.500">Bienvenido al panel de control administrativo</Text>
        </Box>
        <Button colorScheme={activeView === "buyer" ? "green" : "blue"} onClick={toggleActiveView}>
          Cambiar a vista de {activeView === "buyer" ? "Vendedor" : "Comprador"}
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} mb={8}>
        <StatCard title="Usuarios Totales" value="12,361" change={8.2} icon={FaUsers} colorScheme="blue" />
        <StatCard title="Tiendas Activas" value="1,247" change={12.5} icon={FaStore} colorScheme="green" />
        <StatCard title="Ventas Totales" value="$843,294" change={5.3} icon={FaMoneyBillWave} colorScheme="purple" />
        <StatCard
          title="Reportes Pendientes"
          value="24"
          change={-15.8}
          icon={FaExclamationTriangle}
          colorScheme="red"
        />
      </SimpleGrid>

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
        <Card>
          <CardHeader>
            <Heading size="md">Actividad Reciente</Heading>
          </CardHeader>
          <CardBody>
            <Box mb={4}>
              <Flex justify="space-between" mb={2}>
                <Text fontWeight="medium">Nuevos usuarios registrados (hoy)</Text>
                <Text fontWeight="bold">143</Text>
              </Flex>
              <Flex justify="space-between" mb={2}>
                <Text fontWeight="medium">Nuevas tiendas creadas (hoy)</Text>
                <Text fontWeight="bold">28</Text>
              </Flex>
              <Flex justify="space-between" mb={2}>
                <Text fontWeight="medium">Transacciones completadas (hoy)</Text>
                <Text fontWeight="bold">1,247</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="medium">Valor total de transacciones (hoy)</Text>
                <Text fontWeight="bold">$52,384</Text>
              </Flex>
            </Box>

            <Divider my={4} />

            <Heading size="sm" mb={3}>
              Acciones Rápidas
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
              <Button leftIcon={<FaUserShield />} colorScheme="blue" variant="outline">
                Revisar Permisos
              </Button>
              <Button leftIcon={<FaClipboardList />} colorScheme="green" variant="outline">
                Generar Reportes
              </Button>
              <Button leftIcon={<FaExclamationTriangle />} colorScheme="red" variant="outline">
                Ver Alertas
              </Button>
              <Button leftIcon={<FaChartLine />} colorScheme="purple" variant="outline">
                Análisis Avanzado
              </Button>
            </SimpleGrid>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <Heading size="md">Estado del Sistema</Heading>
          </CardHeader>
          <CardBody>
            <Box mb={4}>
              <Text fontWeight="medium" mb={1}>
                Rendimiento del Servidor
              </Text>
              <Flex align="center" mb={3}>
                <Box w="70%" h="8px" bg="green.500" borderRadius="full" mr={2} />
                <Text>98.7%</Text>
              </Flex>

              <Text fontWeight="medium" mb={1}>
                Uso de Base de Datos
              </Text>
              <Flex align="center" mb={3}>
                <Box w="45%" h="8px" bg="blue.500" borderRadius="full" mr={2} />
                <Text>45.2%</Text>
              </Flex>

              <Text fontWeight="medium" mb={1}>
                Espacio de Almacenamiento
              </Text>
              <Flex align="center" mb={3}>
                <Box w="62%" h="8px" bg="yellow.500" borderRadius="full" mr={2} />
                <Text>62.8%</Text>
              </Flex>

              <Text fontWeight="medium" mb={1}>
                Carga de API
              </Text>
              <Flex align="center">
                <Box w="38%" h="8px" bg="purple.500" borderRadius="full" mr={2} />
                <Text>38.4%</Text>
              </Flex>
            </Box>

            <Divider my={4} />

            <Heading size="sm" mb={3}>
              Alertas Activas
            </Heading>
            <Flex align="center" color="yellow.500" mb={2}>
              <Icon as={FaExclamationTriangle} mr={2} />
              <Text>Picos de tráfico detectados en la última hora</Text>
            </Flex>
            <Flex align="center" color="green.500">
              <Icon as={FaUserShield} mr={2} />
              <Text>Todos los sistemas de seguridad funcionando correctamente</Text>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  )
}

export default AdminDashboard
