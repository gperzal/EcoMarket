"use client"

import { useState } from "react"
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Badge,
  HStack,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useColorModeValue,
  IconButton,
  Tooltip,
  useToast,
} from "@chakra-ui/react"
import { FiHeart, FiShoppingCart, FiStar, FiTruck, FiShield, FiShare2, FiCreditCard } from "react-icons/fi"

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const textColor = useColorModeValue("gray.800", "white")
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const bgColor = useColorModeValue("white", "gray.800")

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Producto agregado",
        description: `${quantity} ${quantity > 1 ? "unidades" : "unidad"} de ${product.name} agregado al carrito`,
        status: "success",
        duration: 3000,
        isClosable: true,
      })
    }, 1000)
  }

  const handleAddToWishlist = () => {
    toast({
      title: "Agregado a favoritos",
      description: `${product.name} ha sido agregado a tu lista de favoritos`,
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box>
      {/* Product Title and Badges */}
      <Box mb={4}>
        <Flex justify="space-between" align="flex-start">
          <Box>
            <Heading size="lg" mb={2}>
              {product.name}
            </Heading>
            <Flex align="center" mb={2}>
              <Flex align="center" mr={4}>
                <Box as={FiStar} color="yellow.400" mr={1} />
                <Text fontWeight="medium" mr={1}>
                  {product.rating}
                </Text>
                <Text color={secondaryTextColor}>({product.reviews} reseñas)</Text>
              </Flex>
              <Text color={secondaryTextColor}>
                Vendido por:{" "}
                <Text as="span" color="blue.500">
                  {product.seller.name}
                </Text>
              </Text>
            </Flex>
          </Box>
          <Tooltip label="Compartir producto">
            <IconButton icon={<FiShare2 />} aria-label="Share product" variant="ghost" />
          </Tooltip>
        </Flex>

        <HStack spacing={2} mb={2}>
          {discount > 0 && (
            <Badge colorScheme="red" px={2} py={1} borderRadius="md">
              {discount}% OFF
            </Badge>
          )}
          {product.freeShipping && (
            <Badge colorScheme="green" px={2} py={1} borderRadius="md">
              Envío gratis
            </Badge>
          )}
          <Badge colorScheme="blue" px={2} py={1} borderRadius="md">
            {product.stock > 10 ? "En stock" : `¡Solo ${product.stock} disponibles!`}
          </Badge>
        </HStack>
      </Box>

      {/* Price */}
      <Box mb={6}>
        <Flex align="baseline">
          <Text fontWeight="bold" fontSize="3xl" color={textColor}>
            ${product.price.toLocaleString()}
          </Text>
          {product.originalPrice && (
            <Text fontSize="xl" color="gray.500" textDecoration="line-through" ml={2}>
              ${product.originalPrice.toLocaleString()}
            </Text>
          )}
        </Flex>
        <Text color={secondaryTextColor} fontSize="sm">
          en 12x ${Math.round(product.price / 12).toLocaleString()} sin interés
        </Text>
        <Flex align="center" mt={2}>
          <FiCreditCard />
          <Text ml={2} fontSize="sm" color="blue.500">
            Ver los medios de pago
          </Text>
        </Flex>
      </Box>

      {/* Color Selection */}
      <Box mb={6}>
        <Text fontWeight="medium" mb={2}>
          Color: {selectedColor}
        </Text>
        <HStack spacing={3}>
          {product.colors.map((color) => (
            <Button
              key={color}
              size="sm"
              variant={selectedColor === color ? "solid" : "outline"}
              colorScheme="blue"
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </Button>
          ))}
        </HStack>
      </Box>

      {/* Quantity */}
      <Box mb={6}>
        <Text fontWeight="medium" mb={2}>
          Cantidad:
        </Text>
        <NumberInput
          defaultValue={1}
          min={1}
          max={product.stock}
          onChange={(_, value) => setQuantity(value)}
          maxW="120px"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text fontSize="sm" color={secondaryTextColor} mt={1}>
          ({product.stock} disponibles)
        </Text>
      </Box>

      {/* Actions */}
      <Flex direction={{ base: "column", sm: "row" }} gap={4} mb={8}>
        <Button
          colorScheme="blue"
          size="lg"
          leftIcon={<FiShoppingCart />}
          onClick={handleAddToCart}
          isLoading={isLoading}
          flex="1"
        >
          Agregar al carrito
        </Button>
        <Button
          variant="outline"
          colorScheme="blue"
          size="lg"
          leftIcon={<FiHeart />}
          onClick={handleAddToWishlist}
          flex="1"
        >
          Agregar a favoritos
        </Button>
      </Flex>

      {/* Shipping and Warranty */}
      <Box p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor} bg={bgColor} mb={6}>
        <VStack align="stretch" spacing={4}>
          <Flex>
            <Box as={FiTruck} fontSize="xl" color="green.500" mr={3} mt={1} />
            <Box>
              <Text fontWeight="medium">Envío gratis a todo el país</Text>
              <Text fontSize="sm" color={secondaryTextColor}>
                Recíbelo en 24-48 horas hábiles
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box as={FiShield} fontSize="xl" color="blue.500" mr={3} mt={1} />
            <Box>
              <Text fontWeight="medium">{product.warranty}</Text>
              <Text fontSize="sm" color={secondaryTextColor}>
                Garantía oficial del fabricante
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  )
}

export default ProductInfo
