import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Progress,
  Flex,
  Button,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaChartLine } from "react-icons/fa"
import { Link } from "react-router-dom"

const SalesPerformance = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
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
  )
}

export default SalesPerformance
