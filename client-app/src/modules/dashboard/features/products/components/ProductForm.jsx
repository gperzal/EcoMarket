"use client"

import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
  FormHelperText,
} from "@chakra-ui/react"

const ProductForm = ({ formData, handleChange, handleDimensionChange, handleSwitchChange }) => {
  return (
    <VStack spacing={4} align="stretch">
      <FormControl isRequired>
        <FormLabel>Nombre del Producto</FormLabel>
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Ej: Smartphone XYZ 128GB" />
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
        <Input name="sku" value={formData.sku} onChange={handleChange} placeholder="Código único de producto" />
        <FormHelperText>Código único para identificar tu producto</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Peso (kg)</FormLabel>
        <NumberInput min={0} precision={2}>
          <NumberInputField name="weight" value={formData.weight} onChange={handleChange} placeholder="0.00" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

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
  )
}

export default ProductForm
