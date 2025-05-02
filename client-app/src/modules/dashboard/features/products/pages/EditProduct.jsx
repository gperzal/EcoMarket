"use client"

import {
  Box,
  Heading,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Badge,
  useToast,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  useColorModeValue,
  Icon,
  Text,
} from "@chakra-ui/react"
import { FaArrowLeft, FaSave, FaExclamationTriangle } from "react-icons/fa"
import { Link, useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import ProductForm from "../components/ProductForm"
import ImageUploader from "../components/ImageUploader"
import VariationsManager from "../components/VariationsManager"
import { useAuth } from "../../../../auth/hooks/useAuth.js"

const EditProduct = () => {
  const { user } = useAuth()
  const roles = (user?.roles || []).map(r => r.toLowerCase())
  const isSeller = roles.includes('seller') || roles.includes('admin')
  if (!isSeller) return <Navigate to="/dashboard" replace />

  const { id } = useParams()
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

  // Simular carga de datos del producto
  useEffect(() => {
    // En un caso real, aquí se cargarían los datos del producto desde una API
    // usando el ID de la URL
    const loadProductData = () => {
      // Datos de ejemplo para el producto con ID 1
      const productData = {
        id: Number.parseInt(id),
        name: "Smartphone XYZ",
        description:
          "Smartphone de última generación con 128GB de almacenamiento y 8GB de RAM. Pantalla AMOLED de 6.5 pulgadas y cámara de 48MP.",
        category: "Electrónicos",
        price: "12999",
        stock: 15,
        sku: "SMRT-XYZ-128",
        weight: "0.18",
        dimensions: {
          length: "15",
          width: "7.5",
          height: "0.8",
        },
        images: [
          {
            id: 1,
            url: "/placeholder.svg",
            name: "smartphone-front.jpg",
          },
          {
            id: 2,
            url: "/placeholder.svg",
            name: "smartphone-back.jpg",
          },
        ],
        variations: [
          {
            id: 1,
            name: "Color",
            options: ["Negro", "Azul", "Plata"],
          },
          {
            id: 2,
            name: "Almacenamiento",
            options: ["64GB", "128GB", "256GB"],
          },
        ],
        isActive: true,
        isFeatured: true,
        hasFreeShipping: true,
      }

      setFormData(productData)
    }

    loadProductData()
  }, [id])

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

    // Aquí iría la lógica para actualizar el producto
    console.log("Producto a actualizar:", formData)

    toast({
      title: "Producto actualizado",
      description: "El producto ha sido actualizado correctamente.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
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
          <Heading size="lg">Editar Producto</Heading>
          <Badge ml={2} colorScheme={formData.isActive ? "green" : "red"}>
            {formData.isActive ? "Activo" : "Inactivo"}
          </Badge>
        </Flex>

        <HStack>
          <Button variant="outline" mr={2}>
            Vista Previa
          </Button>
          <Button type="submit" colorScheme="blue" leftIcon={<FaSave />}>
            Guardar Cambios
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
              <Flex justify="space-between" align="center">
                <Heading size="md">Imágenes del Producto</Heading>
                <Badge colorScheme="blue">{formData.images.length} de 8</Badge>
              </Flex>
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

          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Historial del Producto</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Flex
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  borderColor={borderColor}
                  bg="yellow.50"
                  _dark={{ bg: "yellow.900", borderColor: "yellow.800" }}
                >
                  <Icon as={FaExclamationTriangle} color="yellow.500" boxSize={5} mr={3} mt={1} />
                  <Box>
                    <Text fontWeight="bold">Producto con bajo stock</Text>
                    <Text fontSize="sm">
                      Este producto tiene menos de 20 unidades en stock. Considera reabastecer pronto.
                    </Text>
                  </Box>
                </Flex>

                <Box>
                  <Text fontWeight="bold" mb={2}>
                    Estadísticas de Ventas
                  </Text>
                  <SimpleGrid columns={3} spacing={4}>
                    <Box p={3} borderWidth="1px" borderRadius="md" borderColor={borderColor} textAlign="center">
                      <Text fontSize="sm" color="text.secondary">
                        Vendidos
                      </Text>
                      <Text fontSize="xl" fontWeight="bold">
                        28
                      </Text>
                    </Box>
                    <Box p={3} borderWidth="1px" borderRadius="md" borderColor={borderColor} textAlign="center">
                      <Text fontSize="sm" color="text.secondary">
                        Vistas
                      </Text>
                      <Text fontSize="xl" fontWeight="bold">
                        1,245
                      </Text>
                    </Box>
                    <Box p={3} borderWidth="1px" borderRadius="md" borderColor={borderColor} textAlign="center">
                      <Text fontSize="sm" color="text.secondary">
                        Conversión
                      </Text>
                      <Text fontSize="xl" fontWeight="bold">
                        2.2%
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </VStack>
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
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default EditProduct
