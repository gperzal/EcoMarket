import { Box, Container, VStack, Heading, Text, Button, Image, useColorModeValue } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa"
import RecommendedProducts from "./RecommendedProducts"

const EmptyCart = () => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Container maxW="container.xl" py={10}>
      <Box
        bg={bgColor}
        p={8}
        borderRadius="lg"
        boxShadow="sm"
        borderWidth="1px"
        borderColor={borderColor}
        textAlign="center"
      >
        <VStack spacing={6}>
          <Image src="/empty-cart.svg" alt="Carrito vacío" maxW="200px" />

          <Heading size="lg">Tu carrito está vacío</Heading>

          <Text fontSize="lg" maxW="600px" mx="auto">
            Parece que aún no has agregado productos a tu carrito. Explora nuestro catálogo para encontrar lo que
            necesitas.
          </Text>

          <Button
            as={RouterLink}
            to="/catalog/all"
            size="lg"
            colorScheme="blue"
            leftIcon={<FaShoppingCart />}
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            transition="all 0.2s"
          >
            Ir a comprar
          </Button>

          <Button
            as={RouterLink}
            to="/"
            variant="outline"
            leftIcon={<FaArrowLeft />}
            _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
          >
            Volver al inicio
          </Button>
        </VStack>
      </Box>

      {/* Productos recomendados */}
      <Box mt={16}>
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Productos que podrían interesarte
        </Heading>
        <RecommendedProducts />
      </Box>
    </Container>
  )
}

export default EmptyCart
