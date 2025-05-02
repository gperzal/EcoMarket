"use client"

import {
  Box,
  Heading,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  useToast,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaArrowLeft, FaSave } from "react-icons/fa"
import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../../../auth/hooks/useAuth.js"
import ProductForm from "../components/ProductForm"
import ImageUploader from "../components/ImageUploader"
import VariationsManager from "../components/VariationsManager"

const AddProduct = () => {
  const { user } = useAuth()
  const roles = (user?.roles || []).map(r => r.toLowerCase())
  const isSeller = roles.includes('seller') || roles.includes('admin')
  if (!isSeller) return <Navigate to="/dashboard" replace />

  const toast = useToast()
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: 1,
    sku: "",
    weight: "",
    dimensions: {
      length: "",
      width: "",
      height: "",
    },
    images: [],
    variations: [],
    isActive: true,
    isFeatured: false,
    hasFreeShipping: false,
  })

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Manejar cambios en dimensiones
  const handleDimensionChange = (dimension, value) => {
    setFormData({
      ...formData,
      dimensions: {
        ...formData.dimensions,
        [dimension]: value,
      },
    })
  }

  // Manejar cambios en switches
  const handleSwitchChange = (name) => {
    setFormData({
      ...formData,
      [name]: !formData[name],
    })
  }

  // Simular carga de imágenes
  const handleImageUpload = () => {
    // En un caso real, aquí se manejaría la carga de archivos
    const newImage = {
      id: Date.now(),
      url: "/placeholder.svg",
      name: `imagen-${formData.images.length + 1}.jpg`,
    }

    setFormData({
      ...formData,
      images: [...formData.images, newImage],
    })
  }

  // Eliminar imagen
  const handleRemoveImage = (id) => {
    setFormData({
      ...formData,
      images: formData.images.filter((img) => img.id !== id),
    })
  }

  // Agregar variación
  const addVariation = () => {
    const newVariation = {
      id: Date.now(),
      name: "",
      options: [""],
    }

    setFormData({
      ...formData,
      variations: [...formData.variations, newVariation],
    })
  }

  // Actualizar variación
  const updateVariation = (id, field, value) => {
    setFormData({
      ...formData,
      variations: formData.variations.map((v) => (v.id === id ? { ...v, [field]: value } : v)),
    })
  }

  // Agregar opción a variación
  const addOptionToVariation = (variationId) => {
    setFormData({
      ...formData,
      variations: formData.variations.map((v) => (v.id === variationId ? { ...v, options: [...v.options, ""] } : v)),
    })
  }

  // Actualizar opción de variación
  const updateVariationOption = (variationId, optionIndex, value) => {
    setFormData({
      ...formData,
      variations: formData.variations.map((v) =>
        v.id === variationId
          ? {
              ...v,
              options: v.options.map((opt, idx) => (idx === optionIndex ? value : opt)),
            }
          : v,
      ),
    })
  }

  // Eliminar opción de variación
  const removeOptionFromVariation = (variationId, optionIndex) => {
    setFormData({
      ...formData,
      variations: formData.variations.map((v) =>
        v.id === variationId
          ? {
              ...v,
              options: v.options.filter((_, idx) => idx !== optionIndex),
            }
          : v,
      ),
    })
  }

  // Eliminar variación
  const removeVariation = (id) => {
    setFormData({
      ...formData,
      variations: formData.variations.filter((v) => v.id !== id),
    })
  }

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    // Aquí iría la lógica para guardar el producto
    console.log("Producto a guardar:", formData)

    toast({
      title: "Producto creado",
      description: "El producto ha sido creado correctamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })

    // Redireccionar a la lista de productos (simulado)
    // history.push("/dashboard/seller/products");
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={6}
      >
        <Flex align="center" mb={{ base: 4, md: 0 }}>
          <Button as={Link} to="/dashboard/seller/products" leftIcon={<FaArrowLeft />} variant="ghost" mr={4}>
            Volver
          </Button>
          <Heading size="lg">Añadir Nuevo Producto</Heading>
        </Flex>

        <HStack>
          <Button variant="outline" mr={2}>
            Vista Previa
          </Button>
          <Button type="submit" colorScheme="blue" leftIcon={<FaSave />}>
            Guardar Producto
          </Button>
        </HStack>
      </Flex>

      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
        <Box gridColumn="span 2">
          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Información Básica</Heading>
            </CardHeader>
            <CardBody>
              <ProductForm
                formData={formData}
                handleChange={handleChange}
                handleDimensionChange={handleDimensionChange}
                handleSwitchChange={handleSwitchChange}
              />
            </CardBody>
          </Card>

          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Imágenes del Producto</Heading>
            </CardHeader>
            <CardBody>
              <ImageUploader
                images={formData.images}
                handleImageUpload={handleImageUpload}
                handleRemoveImage={handleRemoveImage}
              />
            </CardBody>
          </Card>

          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Variaciones del Producto</Heading>
            </CardHeader>
            <CardBody>
              <VariationsManager
                variations={formData.variations}
                addVariation={addVariation}
                updateVariation={updateVariation}
                removeVariation={removeVariation}
                addOptionToVariation={addOptionToVariation}
                updateVariationOption={updateVariationOption}
                removeOptionFromVariation={removeOptionFromVariation}
              />
            </CardBody>
          </Card>
        </Box>

        <Box>
          <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Estado y Visibilidad</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <ProductForm formData={formData} handleChange={handleChange} handleSwitchChange={handleSwitchChange} />
              </VStack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button type="submit" colorScheme="blue" leftIcon={<FaSave />} w="full">
                Guardar Producto
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default AddProduct
