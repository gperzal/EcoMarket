import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Text,
  Flex,
  Icon,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FaExclamationTriangle,
  FaUserShield,
  FaClock,
} from "react-icons/fa"

const SystemStatusCard = () => {
  const cardBg = useColorModeValue("white", "gray.800")

  return (
    <Card bg={cardBg}>
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
        <Flex align="center" color="green.500" mb={2}>
          <Icon as={FaUserShield} mr={2} />
          <Text>Todos los sistemas de seguridad funcionando correctamente</Text>
        </Flex>
        <Flex align="center" color="blue.500">
          <Icon as={FaClock} mr={2} />
          <Text>Último mantenimiento: hace 2 días</Text>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default SystemStatusCard