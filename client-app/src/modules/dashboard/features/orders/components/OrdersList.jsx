import {
  VStack,
  Card,
  CardBody,
  Text,
  Flex,
  Badge,
  Button,
  Box,
  Image,
  HStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"

const OrdersList = ({ orders }) => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  if (orders.length === 0) {
    return (
      <Card bg={cardBg} p={6} textAlign="center">
        <CardBody>
          <Text fontSize="lg">No se encontraron órdenes que coincidan con tu búsqueda.</Text>
        </CardBody>
      </Card>
    )
  }

  return (
    <VStack spacing={4} align="stretch">
      {orders.map((order) => (
        <Card key={order.id} bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "flex-start", md: "center" }}
              mb={4}
            >
              <Box>
                <Flex align="center" mb={1}>
                  <Text fontWeight="bold" mr={2}>
                    Orden: {order.id}
                  </Text>
                  <Badge
                    colorScheme={
                      order.status === "Entregado"
                        ? "green"
                        : order.status === "En camino"
                          ? "blue"
                          : order.status === "Procesando"
                            ? "orange"
                            : "red"
                    }
                  >
                    {order.status}
                  </Badge>
                </Flex>
                <Text fontSize="sm" color="text.secondary">
                  Fecha: {order.date} | Vendedor: {order.seller}
                </Text>
              </Box>

              <HStack spacing={2} mt={{ base: 2, md: 0 }}>
                <Text fontWeight="bold" fontSize="lg">
                  Total: ${order.total}
                </Text>
                <Button
                  as={Link}
                  to={`/dashboard/orders/${order.id}`}
                  size="sm"
                  colorScheme="blue"
                  leftIcon={<FaEye />}
                >
                  Detalles
                </Button>
              </HStack>
            </Flex>

            <Divider mb={4} />

            {order.items.map((item, index) => (
              <Flex key={index} align="center" p={2} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  boxSize="60px"
                  objectFit="cover"
                  mr={4}
                  borderRadius="md"
                />
                <Box flex="1">
                  <Text fontWeight="medium">{item.name}</Text>
                  <Text fontSize="sm" color="text.secondary">
                    Cantidad: {item.quantity}
                  </Text>
                </Box>
                <Text fontWeight="bold">${item.price}</Text>
              </Flex>
            ))}
          </CardBody>
        </Card>
      ))}
    </VStack>
  )
}

export default OrdersList
