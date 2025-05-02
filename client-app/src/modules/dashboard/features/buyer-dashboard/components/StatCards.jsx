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
  useColorModeValue,
} from "@chakra-ui/react"
import { FaShoppingBag, FaHeart, FaEye } from "react-icons/fa"

const StatCards = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
      <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
        <CardBody>
          <Stat>
            <Flex align="center" mb={2}>
              <Icon as={FaShoppingBag} color="brand.primary.500" boxSize={5} mr={2} />
              <StatLabel fontSize="lg">Compras Totales</StatLabel>
            </Flex>
            <StatNumber>12</StatNumber>
            <StatHelpText>Desde que te uniste</StatHelpText>
          </Stat>
        </CardBody>
      </Card>

      <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
        <CardBody>
          <Stat>
            <Flex align="center" mb={2}>
              <Icon as={FaHeart} color="red.500" boxSize={5} mr={2} />
              <StatLabel fontSize="lg">Favoritos</StatLabel>
            </Flex>
            <StatNumber>8</StatNumber>
            <StatHelpText>Productos guardados</StatHelpText>
          </Stat>
        </CardBody>
      </Card>

      <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
        <CardBody>
          <Stat>
            <Flex align="center" mb={2}>
              <Icon as={FaEye} color="brand.secondary.500" boxSize={5} mr={2} />
              <StatLabel fontSize="lg">Vistos Recientemente</StatLabel>
            </Flex>
            <StatNumber>24</StatNumber>
            <StatHelpText>Últimos 30 días</StatHelpText>
          </Stat>
        </CardBody>
      </Card>
    </SimpleGrid>
  )
}

export default StatCards
