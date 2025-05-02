"use client"

import {
  Box,
  Heading,
  Text,
  Flex,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  VStack,
  HStack,
  Grid,
  GridItem,
  Icon,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaArrowLeft, FaTruck, FaBox, FaCheckCircle, FaMapMarkerAlt, FaStore } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"

const OrderDetail = () => {
  const { id } = useParams()
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const order = {
    id: id || "ORD-1234",
    date: "2023-11-15",
    status: "En camino",
    total: 1250,
    items: [
      {
        id: 1,
        name: "Smartphone XYZ",
        quantity: 1,
        price: 1250,
        image: "/placeholder.svg",
        description: "Smartphone de última generación con 128GB de almacenamiento y 8GB de RAM.",
      },
    ],
    seller: {
      name: "TechStore",
      rating: 4.8,
      sales: 1245,
    },
    shipping: {
      address: "Calle Principal 123, Ciudad, País",
      method: "Estándar",
      trackingNumber: "TRACK123456789",
      estimatedDelivery: "2023-11-20",
    },
    payment: {
      method: "Tarjeta de crédito",
      last4: "1234",
      total: 1250,
      shipping: 0,
      subtotal: 1250,
      discount: 0,
    },
  }

  // Configuración del stepper
  const steps = [
    { title: "Procesando", description: "Orden confirmada" },
    { title: "Preparando", description: "Empacando productos" },
    { title: "Enviado", description: "En camino" },
    { title: "Entregado", description: "Recibido" },
  ]

  // Determinar el paso activo basado en el estado
  let activeStep
  switch (order.status) {
    case "Procesando":
      activeStep = 0
      break
    case "Preparando":
      activeStep = 1
      break
    case "En camino":
      activeStep = 2
      break
    case "Entregado":
      activeStep = 3
      break
    default:
      activeStep = 0
  }

  const { activeStep: currentStep } = useSteps({
    index: activeStep,
    count: steps.length,
  })

  return (
    <Box>
      <Flex align="center" mb={6}>
        <Button as={Link} to="/dashboard/orders" leftIcon={<FaArrowLeft />} variant="ghost" mr={4}>
          Volver
        </Button>
        <Heading size="lg">Detalles de la Orden {order.id}</Heading>
      </Flex>

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
        <GridItem>
          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Flex
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
                align={{ base: "flex-start", sm: "center" }}
              >
                <Box>
                  <Heading size="md">Estado del Pedido</Heading>
                  <Text color="text.secondary">Fecha de compra: {order.date}</Text>
                </Box>
                <Badge
                  colorScheme={
                    order.status === "Entregado" ? "green" : order.status === "En camino" ? "blue" : "orange"
                  }
                  fontSize="md"
                  px={2}
                  py={1}
                  mt={{ base: 2, sm: 0 }}
                >
                  {order.status}
                </Badge>
              </Flex>
            </CardHeader>
            <CardBody>
              <Stepper index={currentStep} colorScheme="blue" size="sm">
                {steps.map((step, index) => (
                  <Step key={index}>
                    <StepIndicator>
                      <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                    </StepIndicator>
                    <Box flexShrink="0">
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </Box>
                    <StepSeparator />
                  </Step>
                ))}
              </Stepper>
            </CardBody>
          </Card>

          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Productos</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                {order.items.map((item) => (
                  <Flex
                    key={item.id}
                    p={4}
                    borderWidth="1px"
                    borderRadius="md"
                    borderColor={borderColor}
                    direction={{ base: "column", sm: "row" }}
                    align={{ base: "center", sm: "flex-start" }}
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      boxSize="100px"
                      objectFit="cover"
                      mr={{ base: 0, sm: 6 }}
                      mb={{ base: 4, sm: 0 }}
                      borderRadius="md"
                    />
                    <Box flex="1">
                      <Text fontWeight="bold" fontSize="lg">
                        {item.name}
                      </Text>
                      <Text color="text.secondary" mb={2}>
                        {item.description}
                      </Text>
                      <HStack>
                        <Text>Cantidad: {item.quantity}</Text>
                        <Text fontWeight="bold" color="brand.primary.500">
                          ${item.price}
                        </Text>
                      </HStack>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </CardBody>
          </Card>

          <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Información de Envío</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Flex align="center">
                  <Icon as={FaMapMarkerAlt} mr={2} color="brand.primary.500" />
                  <Box>
                    <Text fontWeight="bold">Dirección de Entrega</Text>
                    <Text>{order.shipping.address}</Text>
                  </Box>
                </Flex>

                <Flex align="center">
                  <Icon as={FaTruck} mr={2} color="brand.primary.500" />
                  <Box>
                    <Text fontWeight="bold">Método de Envío</Text>
                    <Text>{order.shipping.method}</Text>
                  </Box>
                </Flex>

                {order.shipping.trackingNumber && (
                  <Flex align="center">
                    <Icon as={FaBox} mr={2} color="brand.primary.500" />
                    <Box>
                      <Text fontWeight="bold">Número de Seguimiento</Text>
                      <Text>{order.shipping.trackingNumber}</Text>
                    </Box>
                  </Flex>
                )}

                <Flex align="center">
                  <Icon as={FaCheckCircle} mr={2} color="brand.primary.500" />
                  <Box>
                    <Text fontWeight="bold">Entrega Estimada</Text>
                    <Text>{order.shipping.estimatedDelivery}</Text>
                  </Box>
                </Flex>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem>
          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Resumen de Pago</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={3} align="stretch">
                <Flex justify="space-between">
                  <Text>Subtotal</Text>
                  <Text>${order.payment.subtotal}</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text>Envío</Text>
                  <Text>{order.payment.shipping === 0 ? "Gratis" : `$${order.payment.shipping}`}</Text>
                </Flex>
                {order.payment.discount > 0 && (
                  <Flex justify="space-between">
                    <Text>Descuento</Text>
                    <Text color="green.500">-${order.payment.discount}</Text>
                  </Flex>
                )}
                <Divider />
                <Flex justify="space-between" fontWeight="bold">
                  <Text>Total</Text>
                  <Text fontSize="lg" color="brand.primary.500">
                    ${order.payment.total}
                  </Text>
                </Flex>
                <Divider />
                <Flex align="center">
                  <Text fontWeight="bold" mr={2}>
                    Método de Pago:
                  </Text>
                  <Text>
                    {order.payment.method} **** {order.payment.last4}
                  </Text>
                </Flex>
              </VStack>
            </CardBody>
          </Card>

          <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Información del Vendedor</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Flex align="center">
                  <Icon as={FaStore} boxSize={10} mr={4} color="brand.primary.500" />
                  <Box>
                    <Text fontWeight="bold" fontSize="lg">
                      {order.seller.name}
                    </Text>
                    <HStack>
                      <Badge colorScheme="green">{order.seller.rating} ★</Badge>
                      <Text fontSize="sm">{order.seller.sales} ventas</Text>
                    </HStack>
                  </Box>
                </Flex>
                <Button colorScheme="blue" size="sm">
                  Contactar al Vendedor
                </Button>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default OrderDetail
