"use client"

import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Badge,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Avatar,
  IconButton,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
} from "@chakra-ui/react"
import {
  FaStore,
  FaEdit,
  FaStar,
  FaBox,
  FaShippingFast,
  FaCommentAlt,
  FaThumbsUp,
  FaCamera,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaArrowUp,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const SellerStore = () => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Datos de ejemplo para la tienda
  const storeData = {
    name: "TechStore",
    slogan: "La mejor tecnología al mejor precio",
    logo: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    rating: 4.8,
    reviews: 245,
    sales: 1245,
    followers: 320,
    since: "2020",
    location: "Ciudad Ejemplo, País",
    description:
      "Somos una tienda especializada en productos tecnológicos de alta calidad. Ofrecemos smartphones, laptops, accesorios y mucho más con garantía y servicio técnico incluido.",
    categories: ["Electrónicos", "Computadoras", "Accesorios", "Audio"],
    contact: {
      email: "contacto@techstore.com",
      phone: "+1234567890",
      address: "Calle Principal 123, Ciudad Ejemplo",
    },
    policies: {
      shipping: "Envío gratis en compras mayores a $999. Tiempo de entrega: 3-5 días hábiles. Envíos a todo el país.",
      returns:
        "Aceptamos devoluciones dentro de los 30 días posteriores a la compra. El producto debe estar en su empaque original y sin usar.",
      warranty:
        "Todos nuestros productos cuentan con garantía del fabricante. Ofrecemos garantía extendida opcional en productos seleccionados.",
    },
  }

  // Productos destacados
  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone XYZ",
      price: 12999,
      image: "/placeholder.svg",
      discount: 10,
      rating: 4.5,
      stock: 15,
    },
    {
      id: 2,
      name: "Laptop Ultra",
      price: 24999,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.8,
      stock: 8,
    },
    {
      id: 3,
      name: "Auriculares Pro",
      price: 2499,
      image: "/placeholder.svg",
      discount: 15,
      rating: 4.2,
      stock: 25,
    },
    {
      id: 4,
      name: 'Monitor 27"',
      price: 8999,
      image: "/placeholder.svg",
      discount: 5,
      rating: 4.7,
      stock: 5,
    },
  ]

  // Reseñas de clientes
  const reviews = [
    {
      id: 1,
      user: "Juan Pérez",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      date: "2023-11-10",
      comment: "Excelente servicio y productos de calidad. Envío rápido y bien empacado.",
      product: "Smartphone XYZ",
    },
    {
      id: 2,
      user: "María López",
      avatar: "/placeholder-user.jpg",
      rating: 4,
      date: "2023-11-05",
      comment: "Buen producto, pero tardó un poco más de lo esperado en llegar.",
      product: "Laptop Ultra",
    },
    {
      id: 3,
      user: "Carlos Gómez",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      date: "2023-10-28",
      comment: "Increíble calidad y precio. Definitivamente volveré a comprar.",
      product: "Auriculares Pro",
    },
  ]

  return (
    <Box>
      <Box position="relative" mb={6}>
        <Box h="200px" overflow="hidden" borderRadius="lg" position="relative" bg="gray.100" _dark={{ bg: "gray.700" }}>
          <Image
            src={storeData.coverImage || "/placeholder.svg"}
            alt="Portada de la tienda"
            w="100%"
            h="100%"
            objectFit="cover"
            fallbackSrc="/placeholder.svg"
          />
          <IconButton
            aria-label="Cambiar imagen de portada"
            icon={<FaCamera />}
            position="absolute"
            bottom="2"
            right="2"
            colorScheme="blue"
            size="sm"
          />
        </Box>

        <Flex
          position={{ base: "relative", md: "absolute" }}
          bottom={{ md: "-30px" }}
          left={{ md: "30px" }}
          mt={{ base: "-40px", md: 0 }}
          ml={{ base: 4, md: 0 }}
          align="flex-end"
        >
          <Avatar
            size="xl"
            name={storeData.name}
            src={storeData.logo}
            border="4px solid"
            borderColor={cardBg}
            bg="white"
          >
            <IconButton
              aria-label="Cambiar logo"
              icon={<FaCamera />}
              position="absolute"
              bottom="0"
              right="0"
              colorScheme="blue"
              size="xs"
              borderRadius="full"
            />
          </Avatar>
          <Box ml={4} pb={1}>
            <Heading size="lg">{storeData.name}</Heading>
            <HStack>
              <Badge colorScheme="green">Vendedor Oficial</Badge>
              <HStack spacing={1}>
                <Icon as={FaStar} color="yellow.400" />
                <Text fontWeight="bold">{storeData.rating}</Text>
                <Text color="text.secondary">({storeData.reviews} reseñas)</Text>
              </HStack>
            </HStack>
          </Box>
        </Flex>

        <Flex
          justify="flex-end"
          mt={{ base: 4, md: 0 }}
          position={{ md: "absolute" }}
          bottom={{ md: "-30px" }}
          right={{ md: "30px" }}
        >
          <Button leftIcon={<FaEdit />} colorScheme="blue">
            Editar Tienda
          </Button>
        </Flex>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mt={{ base: 6, md: 12 }} mb={8}>
        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <StatLabel fontSize="sm">Ventas Totales</StatLabel>
              <StatNumber>{storeData.sales}</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>23% vs. mes anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <StatLabel fontSize="sm">Productos</StatLabel>
              <StatNumber>24</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>5 nuevos este mes</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <StatLabel fontSize="sm">Seguidores</StatLabel>
              <StatNumber>{storeData.followers}</StatNumber>
              <StatHelpText>
                <Flex align="center" color="green.500">
                  <Icon as={FaArrowUp} mr={1} />
                  <Text>12% vs. mes anterior</Text>
                </Flex>
              </StatHelpText>
            </Stat>
          </CardBody>
        </Card>

        <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
          <CardBody>
            <Stat>
              <StatLabel fontSize="sm">Calificación</StatLabel>
              <Flex align="center">
                <StatNumber>{storeData.rating}</StatNumber>
                <Icon as={FaStar} color="yellow.400" ml={1} />
              </Flex>
              <StatHelpText>De {storeData.reviews} reseñas</StatHelpText>
            </Stat>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Tabs colorScheme="blue" mb={8}>
        <TabList>
          <Tab>Información</Tab>
          <Tab>Productos Destacados</Tab>
          <Tab>Reseñas</Tab>
          <Tab>Políticas</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Card bg={cardBg} boxShadow="md" borderColor={borderColor} gridColumn={{ md: "span 2" }}>
                <CardHeader>
                  <Heading size="md">Acerca de la Tienda</Heading>
                </CardHeader>
                <CardBody>
                  <VStack align="stretch" spacing={4}>
                    <Text>{storeData.description}</Text>
                    <Box>
                      <Text fontWeight="bold" mb={2}>
                        Categorías
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {storeData.categories.map((category) => (
                          <Badge key={category} colorScheme="blue" mb={2}>
                            {category}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                    <Box>
                      <Text fontWeight="bold" mb={2}>
                        Desde
                      </Text>
                      <Text>Vendiendo en la plataforma desde {storeData.since}</Text>
                    </Box>
                  </VStack>
                </CardBody>
              </Card>

              <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
                <CardHeader>
                  <Heading size="md">Información de Contacto</Heading>
                </CardHeader>
                <CardBody>
                  <VStack align="stretch" spacing={4}>
                    <Flex align="center">
                      <Icon as={FaMapMarkerAlt} mr={3} color="brand.primary.500" />
                      <Box>
                        <Text fontWeight="bold">Dirección</Text>
                        <Text>{storeData.contact.address}</Text>
                      </Box>
                    </Flex>
                    <Flex align="center">
                      <Icon as={FaPhone} mr={3} color="brand.primary.500" />
                      <Box>
                        <Text fontWeight="bold">Teléfono</Text>
                        <Text>{storeData.contact.phone}</Text>
                      </Box>
                    </Flex>
                    <Flex align="center">
                      <Icon as={FaEnvelope} mr={3} color="brand.primary.500" />
                      <Box>
                        <Text fontWeight="bold">Email</Text>
                        <Text>{storeData.contact.email}</Text>
                      </Box>
                    </Flex>
                    <Flex align="center">
                      <Icon as={FaClock} mr={3} color="brand.primary.500" />
                      <Box>
                        <Text fontWeight="bold">Horario de Atención</Text>
                        <Text>Lunes a Viernes: 9:00 - 18:00</Text>
                        <Text>Sábados: 10:00 - 14:00</Text>
                      </Box>
                    </Flex>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Flex justify="space-between" align="center">
                  <Heading size="md">Productos Destacados</Heading>
                  <Button as={Link} to="/dashboard/seller/products" size="sm" colorScheme="blue" variant="outline">
                    Ver Todos
                  </Button>
                </Flex>
              </CardHeader>
              <CardBody>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
                  {featuredProducts.map((product) => (
                    <Box
                      key={product.id}
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      borderColor={borderColor}
                    >
                      <Box position="relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          height="150px"
                          width="100%"
                          objectFit="cover"
                        />
                        {product.discount > 0 && (
                          <Badge colorScheme="red" position="absolute" top={2} left={2} px={2} py={1} borderRadius="md">
                            {product.discount}% OFF
                          </Badge>
                        )}
                      </Box>
                      <Box p={4}>
                        <Text fontWeight="bold" fontSize="md" mb={1} noOfLines={1}>
                          {product.name}
                        </Text>
                        <HStack mb={2}>
                          {product.discount > 0 ? (
                            <>
                              <Text fontWeight="bold" color="brand.primary.500">
                                ${(product.price * (1 - product.discount / 100)).toFixed(0)}
                              </Text>
                              <Text as="s" color="text.secondary" fontSize="sm">
                                ${product.price}
                              </Text>
                            </>
                          ) : (
                            <Text fontWeight="bold" color="brand.primary.500">
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
                      </Box>
                    </Box>
                  ))}
                </SimpleGrid>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Reseñas de Clientes</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {reviews.map((review) => (
                    <Box key={review.id} p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
                      <Flex>
                        <Avatar size="md" name={review.user} src={review.avatar} mr={4} />
                        <Box flex="1">
                          <Flex justify="space-between" align="center" mb={1}>
                            <Text fontWeight="bold">{review.user}</Text>
                            <HStack>
                              {Array(5)
                                .fill("")
                                .map((_, i) => (
                                  <Icon
                                    key={i}
                                    as={FaStar}
                                    color={i < review.rating ? "yellow.400" : "gray.300"}
                                    boxSize={3}
                                  />
                                ))}
                            </HStack>
                          </Flex>
                          <Text fontSize="sm" color="text.secondary" mb={2}>
                            {review.date} • {review.product}
                          </Text>
                          <Text>{review.comment}</Text>
                          <Flex justify="flex-end" mt={2}>
                            <Button size="xs" leftIcon={<FaThumbsUp />} variant="ghost">
                              Útil
                            </Button>
                            <Button size="xs" leftIcon={<FaCommentAlt />} variant="ghost" ml={2}>
                              Responder
                            </Button>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
              <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
                <CardHeader>
                  <Flex align="center">
                    <Icon as={FaShippingFast} mr={2} color="brand.primary.500" />
                    <Heading size="md">Política de Envíos</Heading>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>{storeData.policies.shipping}</Text>
                </CardBody>
              </Card>

              <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
                <CardHeader>
                  <Flex align="center">
                    <Icon as={FaBox} mr={2} color="brand.primary.500" />
                    <Heading size="md">Política de Devoluciones</Heading>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>{storeData.policies.returns}</Text>
                </CardBody>
              </Card>

              <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
                <CardHeader>
                  <Flex align="center">
                    <Icon as={FaStore} mr={2} color="brand.primary.500" />
                    <Heading size="md">Garantía</Heading>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>{storeData.policies.warranty}</Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Card bg={cardBg} boxShadow="md" borderColor={borderColor} mb={8}>
        <CardHeader>
          <Heading size="md">Métricas de la Tienda</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
            <Box>
              <Text fontWeight="medium" mb={2}>
                Tiempo Promedio de Respuesta
              </Text>
              <Flex align="center">
                <Icon as={FaClock} mr={2} color="green.500" />
                <Text fontWeight="bold">2 horas</Text>
              </Flex>
              <Text fontSize="sm" color="text.secondary">
                Responde el 98% de los mensajes
              </Text>
            </Box>

            <Box>
              <Text fontWeight="medium" mb={2}>
                Tiempo Promedio de Envío
              </Text>
              <Flex align="center">
                <Icon as={FaShippingFast} mr={2} color="green.500" />
                <Text fontWeight="bold">1-2 días</Text>
              </Flex>
              <Text fontSize="sm" color="text.secondary">
                Despacha el mismo día en el 90% de los casos
              </Text>
            </Box>

            <Box>
              <Text fontWeight="medium" mb={2}>
                Tasa de Cancelación
              </Text>
              <Flex align="center">
                <Icon as={FaThumbsUp} mr={2} color="green.500" />
                <Text fontWeight="bold">Menos del 2%</Text>
              </Flex>
              <Text fontSize="sm" color="text.secondary">
                Muy por debajo del promedio
              </Text>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>

      <Flex justify="center" mb={8}>
        <Button as={Link} to="/dashboard/seller/products/add" colorScheme="blue" size="lg" leftIcon={<FaBox />} mr={4}>
          Añadir Producto
        </Button>
        <Button as={Link} to="/dashboard/seller/analytics" colorScheme="blue" size="lg" variant="outline">
          Ver Estadísticas
        </Button>
      </Flex>
    </Box>
  )
}

export default SellerStore
