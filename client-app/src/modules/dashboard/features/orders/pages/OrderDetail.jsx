"use client"

import { Box, Grid, GridItem, Card, CardHeader, CardBody, Flex, Badge, useColorModeValue } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import OrderDetailHeader from "../components/OrderDetailHeader"
import OrderStatusStepper from "../components/OrderStatusStepper"
import OrderItems from "../components/OrderItems"
import ShippingInfo from "../components/ShippingInfo"
import PaymentSummary from "../components/PaymentSummary"
import SellerInfo from "../components/SellerInfo"

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

  return (
    <Box>
      <OrderDetailHeader order={order} />

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
                  <Flex align="center" mb={1}>
                    Estado del Pedido
                  </Flex>
                  <Flex color="text.secondary">Fecha de compra: {order.date}</Flex>
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
              <OrderStatusStepper status={order.status} />
            </CardBody>
          </Card>

          <OrderItems items={order.items} />
          <ShippingInfo shipping={order.shipping} />
        </GridItem>

        <GridItem>
          <PaymentSummary payment={order.payment} />
          <SellerInfo seller={order.seller} />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default OrderDetail
