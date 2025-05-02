import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Flex,
  Button,
  VStack,
  Box,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const FavoritesPreview = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const favoriteProducts = [
    { id: 1, name: "Smartphone XYZ", price: 12999, image: "/placeholder.svg" },
    { id: 2, name: "Laptop Ultra", price: 24999, image: "/placeholder.svg" },
    { id: 3, name: "Auriculares Pro", price: 2499, image: "/placeholder.svg" },
  ]

  return (
    <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
      <CardHeader>
        <Flex justify="space-between" align="center">
          <Heading size="md">Favoritos</Heading>
          <Button
            as={Link}
            to="/dashboard/favorites"
            size="sm"
            colorScheme="blue"
            variant="ghost"
            rightIcon={<FaArrowRight />}
          >
            Ver todos
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align="stretch">
          {favoriteProducts.map((product) => (
            <Flex key={product.id} p={2} borderWidth="1px" borderRadius="md" borderColor={borderColor} align="center">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                boxSize="50px"
                objectFit="cover"
                mr={4}
                borderRadius="md"
              />
              <Box flex="1">
                <Text fontWeight="medium">{product.name}</Text>
                <Text color="brand.primary.500" fontWeight="bold">
                  ${product.price}
                </Text>
              </Box>
              <Button size="sm" colorScheme="blue">
                Ver
              </Button>
            </Flex>
          ))}
        </VStack>
      </CardBody>
    </Card>
  )
}

export default FavoritesPreview
