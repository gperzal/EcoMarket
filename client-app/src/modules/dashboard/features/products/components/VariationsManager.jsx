"use client"

import { VStack, Box, Flex, Text, Button, FormControl, FormLabel, Input, useColorModeValue } from "@chakra-ui/react"
import { FaPlus, FaTrash, FaTimes } from "react-icons/fa"

const VariationsManager = ({
  variations,
  addVariation,
  updateVariation,
  removeVariation,
  addOptionToVariation,
  updateVariationOption,
  removeOptionFromVariation,
}) => {
  const borderColor = useColorModeValue("gray.200", "gray.700")

  if (variations.length === 0) {
    return (
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
    )
  }

  return (
    <VStack spacing={6} align="stretch">
      {variations.map((variation) => (
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
            <Button colorScheme="red" variant="ghost" onClick={() => removeVariation(variation.id)} ml={4}>
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
    </VStack>
  )
}

export default VariationsManager
