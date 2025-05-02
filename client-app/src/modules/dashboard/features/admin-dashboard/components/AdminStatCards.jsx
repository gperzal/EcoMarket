import {
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Icon,
  Text,
  Stat,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react"
import {
  FaUsers,
  FaStore,
  FaMoneyBillWave,
  FaExclamationTriangle,
} from "react-icons/fa"

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

const AdminStatCards = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} mb={8}>
      <StatCard
        title="Usuarios Totales"
        value="12,361"
        change={8.2}
        icon={FaUsers}
        colorScheme="blue"
      />
      <StatCard
        title="Tiendas Activas"
        value="1,247"
        change={12.5}
        icon={FaStore}
        colorScheme="green"
      />
      <StatCard
        title="Ventas Totales"
        value="$843,294"
        change={5.3}
        icon={FaMoneyBillWave}
        colorScheme="purple"
      />
      <StatCard
        title="Reportes Pendientes"
        value="24"
        change={-15.8}
        icon={FaExclamationTriangle}
        colorScheme="red"
      />
    </SimpleGrid>
  )
}

export default AdminStatCards