import { Box, Image, Text, Badge, Flex, Button, IconButton, useColorModeValue, Tooltip, HStack } from "@chakra-ui/react"
import { FiHeart, FiShoppingCart, FiStar } from "react-icons/fi"
import { Link as RouterLink } from "react-router-dom"

const ProductCard = ({ product }) => {
  // Usar la primera imagen del arreglo images si existe, si no usar image o placeholder
  const imageUrl =
    (Array.isArray(product.images) && product.images.length > 0 && product.images[0]) ||
    product.image ||
    "/placeholder.svg"

  const { id, name, description, price, originalPrice, rating, reviews, freeShipping, stock, seller } = product

  const cardBg = useColorModeValue("gray.50", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.800", "white")
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400")

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={cardBg}
      borderColor={borderColor}
      transition="transform 0.3s, box-shadow 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "lg",
        borderColor: "blue.300",
      }}
      position="relative"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      {/* Wishlist Button */}
      <Tooltip label="Agregar a favoritos" placement="top">
        <IconButton
          icon={<FiHeart />}
          aria-label="Add to wishlist"
          position="absolute"
          top={2}
          right={2}
          size="sm"
          borderRadius="full"
          colorScheme="gray"
          variant="ghost"
          zIndex={2}
        />
      </Tooltip>

      {/* Discount Badge */}
      {discount > 0 && (
        <Badge
          colorScheme="red"
          position="absolute"
          top={2}
          left={2}
          zIndex={2}
          px={2}
          py={1}
          borderRadius="md"
          fontWeight="bold"
        >
          {discount}% OFF
        </Badge>
      )}

      {/* Product Image */}
      <RouterLink to={`/product/${id}`}>
        <Box position="relative" overflow="hidden" height="200px">
          <Image
            src={imageUrl}
            alt={name}
            objectFit="contain"
            w="100%"
            h="100%"
            py={4}
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
            onError={(e) => { e.target.src = "/placeholder.svg" }}
          />
        </Box>
      </RouterLink>

      {/* Product Info */}
      <Box p={4} flex="1" display="flex" flexDirection="column">
        <Box flex="1">
          <RouterLink to={`/product/${id}`}>
            <Text
              fontWeight="semibold"
              fontSize="md"
              lineHeight="tight"
              noOfLines={2}
              mb={1}
              color={textColor}
              _hover={{ color: "blue.500" }}
            >
              {name}
            </Text>
          </RouterLink>

          <Text fontSize="sm" color={secondaryTextColor} noOfLines={2} mb={2}>
            {description}
          </Text>

          {/* Price */}
          <Box mb={2}>
            <Flex align="baseline">
              <Text fontWeight="bold" fontSize="xl" color={textColor}>
                ${price.toLocaleString()}
              </Text>
              {originalPrice && (
                <Text fontSize="md" color="gray.500" textDecoration="line-through" ml={2}>
                  ${originalPrice.toLocaleString()}
                </Text>
              )}
            </Flex>

            {/* Free Shipping Badge */}
            {freeShipping && (
              <Badge colorScheme="green" mt={1}>
                Envío gratis
              </Badge>
            )}
          </Box>

          {/* Rating */}
          <Flex align="center" mb={2}>
            <Box as={FiStar} color="yellow.400" mr={1} />
            <Text fontSize="sm" fontWeight="medium" mr={1}>
              {rating}
            </Text>
            <Text fontSize="sm" color={secondaryTextColor}>
              ({reviews} reseñas)
            </Text>
          </Flex>

          {/* Seller */}
          <Text fontSize="sm" color={secondaryTextColor} mb={3}>
            Vendido por: {seller}
          </Text>
        </Box>

        {/* Actions */}
        <HStack spacing={2} mt={2}>
          <Button colorScheme="blue" size="sm" leftIcon={<FiShoppingCart />} flex="1" isDisabled={stock === 0}>
            Agregar
          </Button>
          <Button as={RouterLink} to={`/product/${id}`} variant="outline" colorScheme="blue" size="sm" flex="1">
            Ver detalles
          </Button>
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard
