import {
  SimpleGrid,
  Card,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaShoppingBag, FaBox, FaChartLine, FaMoneyBillWave, FaArrowUp, FaArrowDown } from "react-icons/fa"

const SellerStatCards = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
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
  )
}

export default SellerStatCards
