"use client"

import { VStack, SimpleGrid, Box, Text, Flex, Icon, IconButton, useColorModeValue } from "@chakra-ui/react"
import { FaImage, FaTrash } from "react-icons/fa"

const ImageUploader = ({ images, handleImageUpload, handleRemoveImage }) => {
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <VStack spacing={4} align="stretch">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {images.map((image) => (
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
      </SimpleGrid>

      <Text fontSize="sm" color="text.secondary">
        Puedes subir hasta 8 imágenes. La primera imagen será la principal.
      </Text>
    </VStack>
  )
}

export default ImageUploader
