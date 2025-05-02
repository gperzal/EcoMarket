import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Badge,
  Button,
  Flex,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch,
  FormControl,
  FormLabel,
  Divider,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  VStack,
  HStack,
} from "@chakra-ui/react"
import {
  FaShieldAlt,
  FaUserShield,
  FaLock,
  FaKey,
  FaExclamationTriangle,
  FaCheck,
  FaHistory,
  FaServer,
  FaDatabase,
  FaCloudDownloadAlt,
} from "react-icons/fa"

// Datos de ejemplo
const securityLogs = [
  {
    id: 1,
    event: "Intento de inicio de sesión fallido",
    user: "unknown@mail.com",
    ip: "192.168.1.45",
    date: "2023-04-15 10:30:15",
    severity: "high",
  },
  {
    id: 2,
    event: "Cambio de contraseña",
    user: "admin@ecomarket.com",
    ip: "192.168.1.1",
    date: "2023-04-15 09:15:22",
    severity: "low",
  },
  {
    id: 3,
    event: "Actualización de permisos",
    user: "admin@ecomarket.com",
    ip: "192.168.1.1",
    date: "2023-04-14 16:45:30",
    severity: "medium",
  },
  {
    id: 4,
    event: "Bloqueo de cuenta",
    user: "user123@mail.com",
    ip: "192.168.1.78",
    date: "2023-04-14 14:20:10",
    severity: "medium",
  },
  {
    id: 5,
    event: "Intento de acceso a API no autorizado",
    user: "unknown",
    ip: "192.168.1.120",
    date: "2023-04-13 23:10:45",
    severity: "high",
  },
]

const SecurityPage = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Renderizar badge de severidad
  const renderSeverityBadge = (severity) => {
    switch (severity) {
      case "low":
        return <Badge colorScheme="green">Baja</Badge>
      case "medium":
        return <Badge colorScheme="yellow">Media</Badge>
      case "high":
        return <Badge colorScheme="red">Alta</Badge>
      default:
        return null
    }
  }

  return (
    <Box p={5}>
      <Heading size="lg" mb={6}>
        Seguridad del Sistema
      </Heading>

      <Alert status="info" mb={6}>
        <AlertIcon />
        <Box>
          <AlertTitle>Actualización de seguridad disponible</AlertTitle>
          <AlertDescription>
            Hay una nueva actualización de seguridad disponible para el sistema. Se recomienda aplicarla lo antes
            posible.
          </AlertDescription>
        </Box>
        <Button ml="auto" colorScheme="blue" size="sm">
          Actualizar Ahora
        </Button>
      </Alert>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} mb={6}>
        <Card bg={cardBg}>
          <CardBody>
            <Stat>
              <HStack mb={2}>
                <Icon as={FaShieldAlt} color="green.500" />
                <StatLabel>Estado de Seguridad</StatLabel>
              </HStack>
              <StatNumber>Bueno</StatNumber>
              <StatHelpText>
                <Badge colorScheme="green">Protegido</Badge>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg}>
          <CardBody>
            <Stat>
              <HStack mb={2}>
                <Icon as={FaExclamationTriangle} color="red.500" />
                <StatLabel>Alertas Activas</StatLabel>
              </HStack>
              <StatNumber>3</StatNumber>
              <StatHelpText>
                <Badge colorScheme="red">Requiere atención</Badge>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg}>
          <CardBody>
            <Stat>
              <HStack mb={2}>
                <Icon as={FaUserShield} color="blue.500" />
                <StatLabel>Usuarios Protegidos</StatLabel>
              </HStack>
              <StatNumber>12,361</StatNumber>
              <StatHelpText>
                <Badge colorScheme="blue">100%</Badge>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg}>
          <CardBody>
            <Stat>
              <HStack mb={2}>
                <Icon as={FaHistory} color="purple.500" />
                <StatLabel>Último Escaneo</StatLabel>
              </HStack>
              <StatNumber>Hace 2h</StatNumber>
              <StatHelpText>
                <Badge colorScheme="purple">Automático</Badge>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6} mb={6}>
        <Card bg={cardBg}>
          <CardHeader>
            <Heading size="md">Configuración de Seguridad</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <FormLabel htmlFor="2fa" mb="0">
                    Autenticación de dos factores (2FA)
                  </FormLabel>
                  <Text fontSize="sm" color="gray.500">
                    Requerir 2FA para todos los administradores
                  </Text>
                </Box>
                <Switch id="2fa" colorScheme="green" defaultChecked />
              </FormControl>

              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <FormLabel htmlFor="ip-restrict" mb="0">
                    Restricción de IP
                  </FormLabel>
                  <Text fontSize="sm" color="gray.500">
                    Limitar acceso administrativo a IPs específicas
                  </Text>
                </Box>
                <Switch id="ip-restrict" colorScheme="green" defaultChecked />
              </FormControl>

              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <FormLabel htmlFor="session-timeout" mb="0">
                    Tiempo de espera de sesión
                  </FormLabel>
                  <Text fontSize="sm" color="gray.500">
                    Cerrar sesión después de 30 minutos de inactividad
                  </Text>
                </Box>
                <Switch id="session-timeout" colorScheme="green" defaultChecked />
              </FormControl>

              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <FormLabel htmlFor="password-policy" mb="0">
                    Política de contraseñas estricta
                  </FormLabel>
                  <Text fontSize="sm" color="gray.500">
                    Requerir contraseñas complejas para todos los usuarios
                  </Text>
                </Box>
                <Switch id="password-policy" colorScheme="green" defaultChecked />
              </FormControl>

              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <FormLabel htmlFor="audit-log" mb="0">
                    Registro de auditoría
                  </FormLabel>
                  <Text fontSize="sm" color="gray.500">
                    Registrar todas las acciones administrativas
                  </Text>
                </Box>
                <Switch id="audit-log" colorScheme="green" defaultChecked />
              </FormControl>
            </VStack>
          </CardBody>
        </Card>

        <Card bg={cardBg}>
          <CardHeader>
            <Heading size="md">Copias de Seguridad y Recuperación</Heading>
          </CardHeader>
          <CardBody>
            <VStack align="stretch" spacing={4}>
              <Flex justify="space-between" align="center">
                <HStack>
                  <Icon as={FaDatabase} color="blue.500" />
                  <Box>
                    <Text fontWeight="medium">Base de datos principal</Text>
                    <Text fontSize="sm" color="gray.500">
                      Última copia: Hoy, 04:00 AM
                    </Text>
                  </Box>
                </HStack>
                <Badge colorScheme="green">Actualizado</Badge>
              </Flex>

              <Flex justify="space-between" align="center">
                <HStack>
                  <Icon as={FaServer} color="purple.500" />
                  <Box>
                    <Text fontWeight="medium">Configuración del servidor</Text>
                    <Text fontSize="sm" color="gray.500">
                      Última copia: Ayer, 11:30 PM
                    </Text>
                  </Box>
                </HStack>
                <Badge colorScheme="green">Actualizado</Badge>
              </Flex>

              <Flex justify="space-between" align="center">
                <HStack>
                  <Icon as={FaCloudDownloadAlt} color="orange.500" />
                  <Box>
                    <Text fontWeight="medium">Archivos de usuario</Text>
                    <Text fontSize="sm" color="gray.500">
                      Última copia: Hace 2 días
                    </Text>
                  </Box>
                </HStack>
                <Badge colorScheme="yellow">Pendiente</Badge>
              </Flex>

              <Divider my={2} />

              <Button leftIcon={<FaCloudDownloadAlt />} colorScheme="blue" w="full">
                Crear Copia de Seguridad Manual
              </Button>

              <Button leftIcon={<FaHistory />} variant="outline" w="full">
                Ver Historial de Copias
              </Button>
            </VStack>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Card bg={cardBg} mb={6}>
        <CardHeader>
          <Heading size="md">Registro de Eventos de Seguridad</Heading>
        </CardHeader>
        <CardBody>
          <Box overflowX="auto">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Evento</Th>
                  <Th>Usuario</Th>
                  <Th>Dirección IP</Th>
                  <Th>Fecha y Hora</Th>
                  <Th>Severidad</Th>
                </Tr>
              </Thead>
              <Tbody>
                {securityLogs.map((log) => (
                  <Tr key={log.id}>
                    <Td>{log.event}</Td>
                    <Td>{log.user}</Td>
                    <Td>{log.ip}</Td>
                    <Td>{log.date}</Td>
                    <Td>{renderSeverityBadge(log.severity)}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          <Flex justify="center" mt={4}>
            <Button variant="outline">Ver Todos los Registros</Button>
          </Flex>
        </CardBody>
      </Card>

      <Flex justify="space-between">
        <Button leftIcon={<FaLock />} colorScheme="red">
          Bloquear Sistema
        </Button>
        <Button leftIcon={<FaKey />} colorScheme="blue">
          Gestionar Claves de API
        </Button>
        <Button leftIcon={<FaCheck />} colorScheme="green">
          Ejecutar Escaneo de Seguridad
        </Button>
      </Flex>
    </Box>
  )
}

export default SecurityPage
