"use client"

import { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Divider,
  Image,
  HStack,
  VStack,
  useToast,
  Icon,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"
import { FaArrowLeft, FaLock } from "react-icons/fa"
import CartItem from "../components/CartItem"
import CartSummary from "../components/CartSummary"
import ShippingOptions from "../components/ShippingOptions"
import EmptyCart from "../components/EmptyCart"
import RecommendedProducts from "../components/RecommendedProducts"

const CartPage = () => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [couponCode, setCouponCode] = useState("")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const toast = useToast()

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/cart')
        const data = await response.json()
        setCartItems(data)
      } catch (error) {
        console.error('Error fetching cart items:', error)
        toast({
          title: "Error",
          description: "No se pudo cargar el carrito",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      } finally {
        setLoading(false)
      }
    }

    fetchCartItems()
  }, [])

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const getShippingCost = () => {
    if (subtotal > 50000) return 0
    return shippingMethod === "express" ? 5990 : 3990
  }

  const taxes = subtotal * 0.19
  const total = subtotal + getShippingCost() + taxes

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))

    toast({
      title: "Cantidad actualizada",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    })
  }

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))

    toast({
      title: "Producto eliminado",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top-right",
    })
  }

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast({
        title: "Error",
        description: "Ingresa un código de cupón",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
      return
    }

    if (couponCode.toUpperCase() === "DESCUENTO20") {
      toast({
        title: "Cupón aplicado",
        description: "Se ha aplicado un 20% de descuento",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
    } else {
      toast({
        title: "Cupón inválido",
        description: "El código ingresado no es válido o ha expirado",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
    }
  }

  if (!loading && cartItems.length === 0) return <EmptyCart />

  return (
    <Container maxW="container.xl" py={8}>
      {/* Breadcrumbs */}
      <Breadcrumb mb={6} fontSize="sm" color="text.secondary">
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Carrito de compras</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Heading as="h1" size="xl" mb={8} color="text.primary">
        Tu Carrito de Compras
        <Badge ml={2} colorScheme="green" fontSize="md" borderRadius="full" px={2}>
          {cartItems.length} {cartItems.length === 1 ? "Producto" : "Productos"}
        </Badge>
      </Heading>

      {subtotal < 50000 && (
        <Alert status="info" mb={6} borderRadius="md">
          <AlertIcon />
          <AlertTitle mr={2}>¡Casi tienes envío gratis!</AlertTitle>
          <AlertDescription>
            Agrega ${(50000 - subtotal).toLocaleString()} más a tu compra para obtener envío gratis.
          </AlertDescription>
        </Alert>
      )}

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
        {/* Columna izquierda */}
        <GridItem>
          <Box bg="bg.card" p={6} borderRadius="lg" boxShadow="sm" borderWidth="1px" borderColor="border.default">
            <Flex justify="space-between" align="center" mb={4}>
              <Heading as="h2" size="md" color="text.primary">Productos</Heading>
              <Button
                as={RouterLink}
                to="/catalog/all"
                variant="link"
                leftIcon={<FaArrowLeft />}
                color="accent.primary"
              >
                Seguir comprando
              </Button>
            </Flex>

            <Divider mb={6} borderColor="border.default" />

            <VStack spacing={6} align="stretch" divider={<Divider borderColor="border.default" />}>
              {loading
                ? Array(3)
                    .fill("")
                    .map((_, i) => (
                      <Box key={i} p={4} bg="bg.surface" borderRadius="md">
                        <Text>Cargando...</Text>
                      </Box>
                    ))
                : cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onQuantityChange={handleQuantityChange}
                      onRemove={handleRemoveItem}
                    />
                  ))}
            </VStack>
          </Box>

          <Box mt={8}>
            <ShippingOptions
              selectedMethod={shippingMethod}
              onSelectMethod={setShippingMethod}
              freeShippingEligible={subtotal > 50000}
            />
          </Box>
        </GridItem>

        {/* Columna derecha */}
        <GridItem>
          <CartSummary
            subtotal={subtotal}
            shipping={getShippingCost()}
            taxes={taxes}
            total={total}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            onApplyCoupon={handleApplyCoupon}
          />

          {/* Métodos de pago */}
          <Box mt={6} p={4} bg="bg.card" borderRadius="lg" boxShadow="sm" borderWidth="1px" borderColor="border.default">
            <Heading as="h3" size="sm" mb={3} color="text.primary">Métodos de pago aceptados</Heading>
            <Flex wrap="wrap" gap={3} justify="center">
              <Image src="/BancoSimpleLogo.svg" alt="BancoSimple" h="40px" />
              <Image src="/Visa_Brandmark_Blue_RGB_2021.png" alt="Visa" h="30px" />
              <Image src="/ma_symbol.svg" alt="Mastercard" h="50px" />
              <Image src="/1.Webpay_FB_800.svg" alt="WebPay" h="40px" />
            </Flex>
          </Box>

          {/* Seguridad */}
          <Box mt={6} p={4} bg="bg.card" borderRadius="lg" boxShadow="sm" borderWidth="1px" borderColor="border.default">
            <HStack spacing={3} mb={2}>
              <Icon as={FaLock} color="green.500" />
              <Text fontWeight="medium" color="text.primary">Compra 100% segura</Text>
            </HStack>
            <Text fontSize="sm" color="text.secondary">
              Tus datos están protegidos y encriptados con los más altos estándares de seguridad.
            </Text>
          </Box>
        </GridItem>
      </Grid>

      {/* Productos recomendados */}
      <Box mt={16}>
        <RecommendedProducts />
      </Box>
    </Container>
  )
}

export default CartPage
