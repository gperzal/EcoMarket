"use client"

import {
  Box,
  Heading,
  Badge,
  Button,
  Flex,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftElement,
  Card,
  CardBody,
  Image,
  HStack,
  VStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaSearch, FaEye } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"

const Orders = () => {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const orders = [
    {
      id: "ORD-1234",
      date: "2023-11-15",
      status: "Entregado",
      total: 1250,
      items: [{ name: "Smartphone XYZ", quantity: 1, price: 1250, image: "/placeholder.svg" }],
      seller: "TechStore",
    },
    {
      id: "ORD-1235",
      date: "2023-11-10",
      status: "En camino",
      total: 890,
      items: [{ name: "Auriculares Pro", quantity: 1, price: 890, image: "/placeholder.svg" }],
      seller: "AudioWorld",
    },
    {
      id: "ORD-1236",
      date: "2023-11-05",
      status: "Procesando",
      total: 2100,
      items: [{ name: "Laptop Ultra", quantity: 1, price: 2100, image: "/placeholder.svg" }],
      seller: "ComputerZone",
    },
    {
      id: "ORD-1237",
      date: "2023-10-28",
      status: "Cancelado",
      total: 450,
      items: [{ name: "Teclado Mecánico", quantity: 1, price: 450, image: "/placeholder.svg" }],
      seller: "GamerStore",
    },
    {
      id: "ORD-1238",
      date: "2023-10-20",
      status: "Entregado",
      total: 3500,
      items: [{ name: 'Monitor 27"', quantity: 1, price: 3500, image: "/placeholder.svg" }],
      seller: "DisplayTech",
    },
  ]

  // Filtrar órdenes
  const filteredOrders = orders.filter((order) => {
    // Filtrar por estado
    if (filter !== "all" && order.status.toLowerCase() !== filter) {
      return false
    }

    // Filtrar por término de búsqueda
    if (
      searchTerm &&
      !order.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !order.items.some((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    return true
  })

  return (
    <Box>
      <Heading mb={6}>Mis Compras</Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "stretch", md: "center" }}
        mb={6}
        gap={4}
      >
        <InputGroup maxW={{ base: "100%", md: "300px" }}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Buscar por número o producto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </InputGroup>

        <Select maxW={{ base: "100%", md: "200px" }} value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Todos los estados</option>
          <option value="entregado">Entregado</option>
          <option value="en camino">En camino</option>
          <option value="procesando">Procesando</option>
          <option value="cancelado">Cancelado</option>
        </Select>
      </Flex>

      {filteredOrders.length === 0 ? (
        <Card bg={cardBg} p={6} textAlign="center">
          <CardBody>
            <Text fontSize="lg">No se encontraron órdenes que coincidan con tu búsqueda.</Text>
          </CardBody>
        </Card>
      ) : (
        <VStack spacing={4} align="stretch">
          {filteredOrders.map((order) => (
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
      )}
    </Box>
  )
}

export default Orders
