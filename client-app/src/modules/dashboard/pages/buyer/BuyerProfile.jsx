"use client"

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Flex,
  Text,
  Divider,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  useToast,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react"
import { FaCamera, FaEdit, FaKey, FaMapMarkerAlt, FaCreditCard, FaShield, FaHistory } from "react-icons/fa"
import { useState } from "react"

const BuyerProfile = () => {
  const toast = useToast()
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    phone: "+1234567890",
    birthdate: "1990-01-01",
  })

  // Direcciones de ejemplo
  const addresses = [
    {
      id: 1,
      name: "Casa",
      address: "Calle Principal 123",
      city: "Ciudad Ejemplo",
      state: "Estado Ejemplo",
      zip: "12345",
      country: "País Ejemplo",
      isDefault: true,
    },
    {
      id: 2,
      name: "Trabajo",
      address: "Av. Comercial 456",
      city: "Ciudad Trabajo",
      state: "Estado Ejemplo",
      zip: "54321",
      country: "País Ejemplo",
      isDefault: false,
    },
  ]

  // Métodos de pago de ejemplo
  const paymentMethods = [
    {
      id: 1,
      type: "credit",
      name: "Visa terminada en 1234",
      expiry: "12/25",
      isDefault: true,
    },
    {
      id: 2,
      type: "debit",
      name: "Mastercard terminada en 5678",
      expiry: "10/24",
      isDefault: false,
    },
  ]

  // Historial de actividad
  const activityHistory = [
    {
      id: 1,
      action: "Compra realizada",
      details: "Orden #ORD-1234",
      date: "2023-11-15 14:30",
    },
    {
      id: 2,
      action: "Producto añadido a favoritos",
      details: "Smartphone XYZ",
      date: "2023-11-14 10:15",
    },
    {
      id: 3,
      action: "Cambio de contraseña",
      details: "",
      date: "2023-11-10 09:45",
    },
    {
      id: 4,
      action: "Dirección actualizada",
      details: "Casa",
      date: "2023-11-05 16:20",
    },
  ]

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    toast({
      title: "Perfil actualizado",
      description: "Tu información ha sido actualizada correctamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  return (
    <Box>
      <Heading mb={6}>Mi Perfil</Heading>

      <Tabs colorScheme="blue" mb={6}>
        <TabList>
          <Tab>Información Personal</Tab>
          <Tab>Direcciones</Tab>
          <Tab>Métodos de Pago</Tab>
          <Tab>Seguridad</Tab>
          <Tab>Actividad</Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Información Personal</Heading>
              </CardHeader>
              <CardBody>
                <Flex
                  direction={{ base: "column", md: "row" }}
                  align={{ base: "center", md: "flex-start" }}
                  gap={{ base: 6, md: 10 }}
                >
                  <Box textAlign="center">
                    <Avatar size="2xl" name={formData.name} src="/placeholder-user.jpg">
                      <AvatarBadge
                        as={IconButton}
                        size="sm"
                        rounded="full"
                        top="-10px"
                        colorScheme="blue"
                        aria-label="Cambiar foto"
                        icon={<FaCamera />}
                      />
                    </Avatar>
                    <Text mt={2} fontWeight="medium">
                      {formData.name}
                    </Text>
                    <Text fontSize="sm" color="text.secondary">
                      Cliente desde 2022
                    </Text>
                  </Box>

                  <VStack as="form" onSubmit={handleSubmit} spacing={6} align="stretch" flex="1">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                      <FormControl isRequired>
                        <FormLabel>Nombre Completo</FormLabel>
                        <Input name="name" value={formData.name} onChange={handleChange} />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <Input name="email" type="email" value={formData.email} onChange={handleChange} />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Teléfono</FormLabel>
                        <Input name="phone" value={formData.phone} onChange={handleChange} />
                      </FormControl>

                      <FormControl>
                        <FormLabel>Fecha de Nacimiento</FormLabel>
                        <Input name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} />
                      </FormControl>
                    </SimpleGrid>

                    <Flex justify="flex-end">
                      <Button type="submit" colorScheme="blue" leftIcon={<FaEdit />}>
                        Guardar Cambios
                      </Button>
                    </Flex>
                  </VStack>
                </Flex>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Flex justify="space-between" align="center">
                  <Heading size="md">Mis Direcciones</Heading>
                  <Button colorScheme="blue" size="sm">
                    Añadir Dirección
                  </Button>
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {addresses.map((address) => (
                    <Box
                      key={address.id}
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      position="relative"
                    >
                      <Flex justify="space-between" align="flex-start">
                        <Box>
                          <Flex align="center" mb={1}>
                            <Text fontWeight="bold" mr={2}>
                              {address.name}
                            </Text>
                            {address.isDefault && (
                              <Badge colorScheme="green" fontSize="xs">
                                Predeterminada
                              </Badge>
                            )}
                          </Flex>
                          <HStack align="flex-start" spacing={1} mb={1}>
                            <FaMapMarkerAlt />
                            <Text>{address.address}</Text>
                          </HStack>
                          <Text>
                            {address.city}, {address.state} {address.zip}
                          </Text>
                          <Text>{address.country}</Text>
                        </Box>
                        <HStack>
                          <Button size="sm" leftIcon={<FaEdit />} variant="ghost">
                            Editar
                          </Button>
                          {!address.isDefault && (
                            <Button size="sm" variant="ghost">
                              Eliminar
                            </Button>
                          )}
                        </HStack>
                      </Flex>
                    </Box>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Flex justify="space-between" align="center">
                  <Heading size="md">Métodos de Pago</Heading>
                  <Button colorScheme="blue" size="sm">
                    Añadir Método de Pago
                  </Button>
                </Flex>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {paymentMethods.map((method) => (
                    <Box
                      key={method.id}
                      p={4}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      position="relative"
                    >
                      <Flex justify="space-between" align="center">
                        <Flex align="center">
                          <Box mr={4} fontSize="2xl" color="brand.primary.500">
                            <FaCreditCard />
                          </Box>
                          <Box>
                            <Flex align="center" mb={1}>
                              <Text fontWeight="bold" mr={2}>
                                {method.name}
                              </Text>
                              {method.isDefault && (
                                <Badge colorScheme="green" fontSize="xs">
                                  Predeterminada
                                </Badge>
                              )}
                            </Flex>
                            <Text fontSize="sm" color="text.secondary">
                              Vence: {method.expiry}
                            </Text>
                          </Box>
                        </Flex>
                        <HStack>
                          <Button size="sm" leftIcon={<FaEdit />} variant="ghost">
                            Editar
                          </Button>
                          {!method.isDefault && (
                            <Button size="sm" variant="ghost">
                              Eliminar
                            </Button>
                          )}
                        </HStack>
                      </Flex>
                    </Box>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Seguridad de la Cuenta</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={6} align="stretch">
                  <Box>
                    <Flex align="center" mb={4}>
                      <Box fontSize="xl" color="brand.primary.500" mr={3}>
                        <FaKey />
                      </Box>
                      <Box flex="1">
                        <Text fontWeight="bold">Contraseña</Text>
                        <Text fontSize="sm" color="text.secondary">
                          Última actualización: hace 35 días
                        </Text>
                      </Box>
                      <Button size="sm" colorScheme="blue">
                        Cambiar
                      </Button>
                    </Flex>
                    <Divider />
                  </Box>

                  <Box>
                    <Flex align="center" mb={4}>
                      <Box fontSize="xl" color="brand.primary.500" mr={3}>
                        <FaShield />
                      </Box>
                      <Box flex="1">
                        <Text fontWeight="bold">Autenticación de dos factores</Text>
                        <Text fontSize="sm" color="text.secondary">
                          Añade una capa extra de seguridad a tu cuenta
                        </Text>
                      </Box>
                      <Button size="sm" colorScheme="blue">
                        Activar
                      </Button>
                    </Flex>
                    <Divider />
                  </Box>

                  <Box>
                    <Heading size="sm" mb={4}>
                      Sesiones Activas
                    </Heading>
                    <Box p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Text fontWeight="bold">Este dispositivo</Text>
                          <Text fontSize="sm" color="text.secondary">
                            Última actividad: Hace 5 minutos
                          </Text>
                        </Box>
                        <Badge colorScheme="green">Activo</Badge>
                      </Flex>
                    </Box>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Historial de Actividad</Heading>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {activityHistory.map((activity) => (
                    <Box key={activity.id} p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
                      <Flex align="center">
                        <Box fontSize="xl" color="brand.primary.500" mr={3}>
                          <FaHistory />
                        </Box>
                        <Box flex="1">
                          <Text fontWeight="bold">{activity.action}</Text>
                          {activity.details && <Text fontSize="sm">{activity.details}</Text>}
                          <Text fontSize="xs" color="text.secondary">
                            {activity.date}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default BuyerProfile
