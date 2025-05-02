"use client"

import { useState } from "react"
import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react"

const ImageGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const bgColor = useColorModeValue("white", "gray.800")

  return (
    <Flex direction="column">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={bgColor}
        borderColor={borderColor}
        mb={4}
        p={4}
        height="500px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={productName}
          objectFit="contain"
          maxH="100%"
          maxW="100%"
        />
      </Box>

      <Flex gap={4} overflowX="auto" pb={2}>
        {images.map((image, index) => (
          <Box
            key={index}
            borderWidth="2px"
            borderRadius="md"
            borderColor={selectedImage === index ? "blue.500" : borderColor}
            overflow="hidden"
            cursor="pointer"
            onClick={() => setSelectedImage(index)}
            minW="80px"
            h="80px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={1}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} - imagen ${index + 1}`}
              objectFit="contain"
              maxH="100%"
              maxW="100%"
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export default ImageGallery
