import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Text,
  Flex,
  Button,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FaUserShield,
  FaClipboardList,
  FaExclamationTriangle,
  FaChartLine,
} from "react-icons/fa"

const RecentActivityCard = () => {
  const cardBg = useColorModeValue("white", "gray.800")

  return (
    <Card bg={cardBg}>
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
  )
}

export default RecentActivityCard