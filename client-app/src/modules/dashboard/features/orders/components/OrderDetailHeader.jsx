import { Flex, Button, Heading, Badge } from "@chakra-ui/react"
import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const OrderDetailHeader = ({ order }) => {
  return (
    <Flex align="center" mb={6}>
      <Button as={Link} to="/dashboard/orders" leftIcon={<FaArrowLeft />} variant="ghost" mr={4}>
        Volver
      </Button>
      <Heading size="lg">Detalles de la Orden {order.id}</Heading>
      <Badge
        ml={2}
        colorScheme={order.status === "Entregado" ? "green" : order.status === "En camino" ? "blue" : "orange"}
      >
        {order.status}
      </Badge>
    </Flex>
  )
}

export default OrderDetailHeader
