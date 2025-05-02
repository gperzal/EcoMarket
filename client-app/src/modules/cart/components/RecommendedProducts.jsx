"use client"

import { useState, useEffect } from "react"
import { Box, Heading, SimpleGrid, Button, useColorModeValue, Flex, Text, Skeleton } from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"
import { Link as RouterLink } from "react-router-dom"
import catalogService from "../../catalog/services/catalogService"

// Importamos el componente ProductCard desde el módulo de catálogo
// Nota: En una implementación real, este componente debería ser importado desde el módulo de catálogo
const ProductCard = ({ product }) => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "md" }}
    >
      <Box position="relative">
        <Box height="200px" bg="gray.100" overflow="hidden">
          <Box
            as="img"
            src={product.image}
            alt={product.name}
            width="100%"
            height="100%"
            objectFit="contain"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
        {product.discount > 0 && (
          <Box
            position="absolute"
            top="10px"
            right="10px"
            bg="red.500"
            color="white"
            borderRadius="full"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="bold"
          >
            {product.discount}% OFF
          </Box>
        )}
      </Box>

      <Box p={4}>
        <Text fontSize="sm" color="gray.500">
          {product.brand}
        </Text>
        <Text fontWeight="semibold" lineHeight="tight" noOfLines={2} height="40px">
          {product.name}
        </Text>
        <Flex mt={2} align="center">
          {product.discount > 0 ? (
            <>
              <Text textDecoration="line-through" color="gray.500" fontSize="sm">
                ${product.price.toLocaleString()}
              </Text>
              <Text fontWeight="bold" color="red.500" ml={2}>
                ${(product.price * (1 - product.discount / 100)).toLocaleString()}
              </Text>
            </>
          ) : (
            <Text fontWeight="bold">${product.price.toLocaleString()}</Text>
          )}
        </Flex>
      </Box>
    </Box>
  )
}

const RecommendedProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        setLoading(true)
        // En una implementación real, esto podría tener un endpoint específico para recomendaciones
        const data = await catalogService.getProducts({ limit: 4, recommended: true })
        setProducts(data)
      } catch (error) {
        console.error("Error al cargar productos recomendados:", error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendedProducts()
  }, [])

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h3" size="md">
          Productos recomendados
        </Heading>
        <Button
          as={RouterLink}
          to="/catalog/all"
          variant="link"
          rightIcon={<FaArrowRight />}
          color={useColorModeValue("brand.primary.500", "brand.primary.300")}
        >
          Ver más
        </Button>
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {loading
          ? Array(4)
              .fill("")
              .map((_, i) => <Skeleton key={i} height="300px" borderRadius="lg" />)
          : products.map((product) => <ProductCard key={product.id} product={product} />)}
      </SimpleGrid>
    </Box>
  )
}

export default RecommendedProducts
