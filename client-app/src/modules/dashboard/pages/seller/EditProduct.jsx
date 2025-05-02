"use client"

import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Text,
  Icon,
  useToast,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Switch,
  FormHelperText,
  useColorModeValue,
  Badge,
  IconButton,
} from "@chakra-ui/react"
import { FaArrowLeft, FaSave, FaImage, FaTrash, FaTimes, FaPlus, FaExclamationTriangle } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const EditProduct = () => {
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
              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel>Nombre del Producto</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Smartphone XYZ 128GB"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Descripción</FormLabel>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe tu producto detalladamente..."
                    rows={6}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Categoría</FormLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Selecciona una categoría"
                  >
                    <option value="Electrónicos">Electrónicos</option>
                    <option value="Computadoras">Computadoras</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Ropa">Ropa</option>
                    <option value="Hogar">Hogar</option>
                  </Select>
                </FormControl>
              </VStack>
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
              <VStack spacing={4} align="stretch">
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
                  {formData.images.map((image) => (
                    <Box
                      key={image.id}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      overflow="hidden"
                      position="relative"
                    >
                      <Box as="img" src={image.url} alt={image.name} w="100%" h="120px" objectFit="cover" />
                      <IconButton
                        position="absolute"
                        top="2"
                        right="2"
                        size="xs"
                        colorScheme="red"
                        borderRadius="full"
                        icon={<FaTrash />}
                        onClick={() => handleRemoveImage(image.id)}
                      />
                      <Text fontSize="xs" p={2} noOfLines={1}>
                        {image.name}
                      </Text>
                    </Box>
                  ))}

                  {formData.images.length < 8 && (
                    <Flex
                      borderWidth="2px"
                      borderRadius="md"
                      borderStyle="dashed"
                      borderColor={borderColor}
                      h="120px"
                      justify="center"
                      align="center"
                      direction="column"
                      cursor="pointer"
                      onClick={handleImageUpload}
                      _hover={{ bg: "bg.surface" }}
                    >
                      <Icon as={FaImage} boxSize={8} color="text.secondary" mb={2} />
                      <Text fontSize="sm">Añadir Imagen</Text>
                    </Flex>
                  )}
                </SimpleGrid>

                <Text fontSize="sm" color="text.secondary">
                  Puedes subir hasta 8 imágenes. La primera imagen será la principal.
                </Text>
              </VStack>
            </CardBody>
          </Card>

          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Variaciones del Producto</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={6} align="stretch">
                {formData.variations.length === 0 ? (
                  <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    py={8}
                    borderWidth="2px"
                    borderRadius="md"
                    borderStyle="dashed"
                    borderColor={borderColor}
                  >
                    <Text mb={4} color="text.secondary">
                      No has agregado variaciones al producto
                    </Text>
                    <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={addVariation}>
                      Agregar Variación
                    </Button>
                  </Flex>
                ) : (
                  <>
                    {formData.variations.map((variation) => (
                      <Box key={variation.id} borderWidth="1px" borderRadius="md" borderColor={borderColor} p={4}>
                        <Flex justify="space-between" align="center" mb={4}>
                          <FormControl isRequired>
                            <FormLabel>Nombre de la Variación</FormLabel>
                            <Input
                              value={variation.name}
                              onChange={(e) => updateVariation(variation.id, "name", e.target.value)}
                              placeholder="Ej: Color, Tamaño, etc."
                            />
                          </FormControl>
                          <Button
                            colorScheme="red"
                            variant="ghost"
                            onClick={() => removeVariation(variation.id)}
                            ml={4}
                          >
                            <FaTrash />
                          </Button>
                        </Flex>

                        <Text fontWeight="medium" mb={2}>
                          Opciones:
                        </Text>
                        <VStack spacing={2} align="stretch">
                          {variation.options.map((option, optionIndex) => (
                            <Flex key={optionIndex} align="center">
                              <Input
                                value={option}
                                onChange={(e) => updateVariationOption(variation.id, optionIndex, e.target.value)}
                                placeholder={`Opción ${optionIndex + 1}`}
                                size="sm"
                              />
                              {variation.options.length > 1 && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  colorScheme="red"
                                  ml={2}
                                  onClick={() => removeOptionFromVariation(variation.id, optionIndex)}
                                >
                                  <FaTimes />
                                </Button>
                              )}
                            </Flex>
                          ))}
                          <Button
                            size="sm"
                            leftIcon={<FaPlus />}
                            variant="outline"
                            onClick={() => addOptionToVariation(variation.id)}
                          >
                            Añadir Opción
                          </Button>
                        </VStack>
                      </Box>
                    ))}

                    <Button leftIcon={<FaPlus />} colorScheme="blue" variant="outline" onClick={addVariation}>
                      Agregar Otra Variación
                    </Button>
                  </>
                )}
              </VStack>
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
                  _dark={{ bg: "yellow.900" }}
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
          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Precio y Stock</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                  <FormLabel>Precio ($)</FormLabel>
                  <NumberInput min={0} precision={2}>
                    <NumberInputField name="price" value={formData.price} onChange={handleChange} placeholder="0.00" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Stock</FormLabel>
                  <NumberInput min={0} defaultValue={1}>
                    <NumberInputField name="stock" value={formData.stock} onChange={handleChange} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl>
                  <FormLabel>SKU</FormLabel>
                  <Input
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    placeholder="Código único de producto"
                  />
                  <FormHelperText>Código único para identificar tu producto</FormHelperText>
                </FormControl>
              </VStack>
            </CardBody>
          </Card>

          <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Envío</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Peso (kg)</FormLabel>
                  <NumberInput min={0} precision={2}>
                    <NumberInputField
                      name="weight"
                      value={formData.weight}
                      onChange={handleChange}
                      placeholder="0.00"
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <Text fontWeight="medium" mb={2}>
                  Dimensiones (cm)
                </Text>
                <SimpleGrid columns={3} spacing={2}>
                  <FormControl>
                    <FormLabel fontSize="sm">Largo</FormLabel>
                    <NumberInput min={0} precision={1}>
                      <NumberInputField
                        value={formData.dimensions.length}
                        onChange={(e) => handleDimensionChange("length", e.target.value)}
                      />
                    </NumberInput>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm">Ancho</FormLabel>
                    <NumberInput min={0} precision={1}>
                      <NumberInputField
                        value={formData.dimensions.width}
                        onChange={(e) => handleDimensionChange("width", e.target.value)}
                      />
                    </NumberInput>
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm">Alto</FormLabel>
                    <NumberInput min={0} precision={1}>
                      <NumberInputField
                        value={formData.dimensions.height}
                        onChange={(e) => handleDimensionChange("height", e.target.value)}
                      />
                    </NumberInput>
                  </FormControl>
                </SimpleGrid>

                <FormControl display="flex" alignItems="center">
                  <Switch
                    id="free-shipping"
                    isChecked={formData.hasFreeShipping}
                    onChange={() => handleSwitchChange("hasFreeShipping")}
                    colorScheme="blue"
                    mr={3}
                  />
                  <FormLabel htmlFor="free-shipping" mb="0">
                    Envío gratis
                  </FormLabel>
                </FormControl>
              </VStack>
            </CardBody>
          </Card>

          <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
            <CardHeader>
              <Heading size="md">Estado y Visibilidad</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <FormControl display="flex" alignItems="center">
                  <Switch
                    id="active-status"
                    isChecked={formData.isActive}
                    onChange={() => handleSwitchChange("isActive")}
                    colorScheme="green"
                    mr={3}
                  />
                  <FormLabel htmlFor="active-status" mb="0">
                    Producto activo
                  </FormLabel>
                </FormControl>

                <FormControl display="flex" alignItems="center">
                  <Switch
                    id="featured-status"
                    isChecked={formData.isFeatured}
                    onChange={() => handleSwitchChange("isFeatured")}
                    colorScheme="blue"
                    mr={3}
                  />
                  <FormLabel htmlFor="featured-status" mb="0">
                    Producto destacado
                  </FormLabel>
                </FormControl>
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
