import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Flex,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const RecentOrdersTable = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const recentOrders = [
    { id: "ORD-1234", date: "2023-11-15", status: "Enviado", total: 1250, customer: "Juan Pérez" },
    { id: "ORD-1235", date: "2023-11-14", status: "Procesando", total: 890, customer: "María López" },
    { id: "ORD-1236", date: "2023-11-13", status: "Pendiente", total: 2100, customer: "Carlos Gómez" },
  ]

  return (
    <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
      <CardHeader>
        <Flex justify="space-between" align="center">
          <Heading size="md">Órdenes Recientes</Heading>
          <Button
            as={Link}
            to="/dashboard/seller/orders"
            size="sm"
            colorScheme="blue"
            variant="ghost"
            rightIcon={<FaArrowRight />}
          >
            Ver todas
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Orden</Th>
              <Th>Cliente</Th>
              <Th>Estado</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {recentOrders.map((order) => (
              <Tr key={order.id}>
                <Td>
                  <Link to={`/dashboard/seller/orders/${order.id}`}>{order.id}</Link>
                </Td>
                <Td>{order.customer}</Td>
                <Td>
                  <Badge
                    colorScheme={
                      order.status === "Enviado" ? "green" : order.status === "Procesando" ? "blue" : "orange"
                    }
                  >
                    {order.status}
                  </Badge>
                </Td>
                <Td isNumeric>${order.total}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default RecentOrdersTable
