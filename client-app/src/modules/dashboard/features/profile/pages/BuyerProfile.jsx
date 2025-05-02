"use client"

import {
  Box,
  Button,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useToast,
  useColorModeValue,
} from "@chakra-ui/react"
import { useState } from "react"
import { useAuth } from '../../../../auth/hooks/useAuth.js'
import { Navigate } from 'react-router-dom'
import ProfileHeader from "../components/ProfileHeader"
import ProfileForm from "../components/ProfileForm"
import AddressList from "../components/AddressList"
import PaymentMethodsList from "../components/PaymentMethodsList"
import SecuritySettings from "../components/SecuritySettings"
import ActivityHistory from "../components/ActivityHistory"

const BuyerProfile = () => {
  const { user } = useAuth()
  const roles = (user?.roles || []).map(r => r.toLowerCase())
  const isBuyer = roles.includes('buyer') || roles.includes('admin')
  if (!isBuyer) return <Navigate to="/dashboard" replace />

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
                  <ProfileHeader userData={formData} />
                  <ProfileForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
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
                <AddressList addresses={addresses} />
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
                <PaymentMethodsList paymentMethods={paymentMethods} />
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Seguridad de la Cuenta</Heading>
              </CardHeader>
              <CardBody>
                <SecuritySettings />
              </CardBody>
            </Card>
          </TabPanel>

          <TabPanel px={0}>
            <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Historial de Actividad</Heading>
              </CardHeader>
              <CardBody>
                <ActivityHistory activities={activityHistory} />
              </CardBody>
            </Card>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default BuyerProfile
