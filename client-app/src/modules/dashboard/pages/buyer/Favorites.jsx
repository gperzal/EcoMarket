"use client"

import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Flex,
  IconButton,
  Badge,
  useToast,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react"
import { FaHeart, FaShoppingCart, FaTrash, FaEye } from "react-icons/fa"
import { useState } from "react"
import { Link } from "react-router-dom"

const Favorites = () => {
  const toast = useToast()
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Smartphone XYZ",
      price: 12999,
      image: "/placeholder.svg",
      discount: 10,
      rating: 4.5,
      seller: "TechStore",
      stock: 15,
    },
    {
      id: 2,
      name: "Laptop Ultra",
      price: 24999,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.8,
      seller: "ComputerZone",
      stock: 8,
    },
    {
      id: 3,
      name: "Auriculares Pro",
      price: 2499,
      image: "/placeholder.svg",
      discount: 15,
      rating: 4.2,
      seller: "AudioWorld",
      stock: 25,
    },
    {
      id: 4,
      name: "Teclado Mecánico",
      price: 1899,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.0,
      seller: "GamerStore",
      stock: 0,
    },
    {
      id: 5,
      name: 'Monitor 27"',
      price: 8999,
      image: "/placeholder.svg",
      discount: 5,
      rating: 4.7,
      seller: "DisplayTech",
      stock: 5,
    },
  ])

  // Eliminar de favoritos
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id))
    toast({
      title: "Eliminado de favoritos",
      description: "El producto ha sido eliminado de tus favoritos.",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  // Añadir al carrito
  const addToCart = (product) => {
    toast({
      title: "Añadido al carrito",
      description: `${product.name} ha sido añadido a tu carrito.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box>
      <Heading mb={6}>Mis Favoritos</Heading>

      {favorites.length === 0 ? (
        <Card bg={cardBg} p={6} textAlign="center">
          <CardBody>
            <Flex direction="column" align="center" justify="center" py={10}>
              <Box fontSize="6xl" mb={4} color="red.400">
                <FaHeart />
              </Box>
              <Heading size="md" mb={2}>
                No tienes productos favoritos
              </Heading>
              <Text color="text.secondary" mb={6}>
                Explora nuestro catálogo y agrega productos a tus favoritos
              </Text>
              <Button as={Link} to="/" colorScheme="blue">
                Explorar Productos
              </Button>
            </Flex>
          </CardBody>
        </Card>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
          {favorites.map((product) => (
            <Card key={product.id} bg={cardBg} boxShadow="md" borderColor={borderColor} overflow="hidden">
              <Box position="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  height="200px"
                  width="100%"
                  objectFit="cover"
                />
                <IconButton
                  aria-label="Eliminar de favoritos"
                  icon={<FaTrash />}
                  size="sm"
                  colorScheme="red"
                  variant="solid"
                  position="absolute"
                  top={2}
                  right={2}
                  onClick={() => removeFromFavorites(product.id)}
                />
                {product.discount > 0 && (
                  <Badge
                    colorScheme="red"
                    position="absolute"
                    top={2}
                    left={2}
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontSize="sm"
                  >
                    {product.discount}% OFF
                  </Badge>
                )}
              </Box>

              <CardBody>
                <Text fontWeight="bold" fontSize="lg" mb={1} noOfLines={2}>
                  {product.name}
                </Text>
                <Text color="text.secondary" fontSize="sm" mb={2}>
                  Vendido por {product.seller}
                </Text>

                <HStack mb={4}>
                  {product.discount > 0 ? (
                    <>
                      <Text fontWeight="bold" fontSize="xl" color="brand.primary.500">
                        ${(product.price * (1 - product.discount / 100)).toFixed(0)}
                      </Text>
                      <Text as="s" color="text.secondary" fontSize="md">
                        ${product.price}
                      </Text>
                    </>
                  ) : (
                    <Text fontWeight="bold" fontSize="xl" color="brand.primary.500">
                      ${product.price}
                    </Text>
                  )}
                </HStack>

                <Flex justify="space-between" align="center">
                  <Badge colorScheme={product.stock > 0 ? "green" : "red"}>
                    {product.stock > 0 ? "En stock" : "Agotado"}
                  </Badge>
                  <Text fontSize="sm">{product.rating} ★</Text>
                </Flex>

                <Flex mt={4} gap={2}>
                  <Button
                    leftIcon={<FaShoppingCart />}
                    colorScheme="blue"
                    size="sm"
                    flex="1"
                    onClick={() => addToCart(product)}
                    isDisabled={product.stock === 0}
                  >
                    Añadir
                  </Button>
                  <Button leftIcon={<FaEye />} variant="outline" colorScheme="blue" size="sm" flex="1">
                    Ver
                  </Button>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      )}
    </Box>
  )
}

export default Favorites
