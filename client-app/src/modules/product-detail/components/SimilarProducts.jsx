import { Box, Grid, Heading, Image, Text, Flex, useColorModeValue } from "@chakra-ui/react"
import { FiStar } from "react-icons/fi"
import { Link as RouterLink } from "react-router-dom"
import { similarProducts } from "../../catalog/utils/mockData"

const SimilarProducts = () => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.800", "white")

  return (
    <Box mb={8}>
      <Heading size="lg" mb={6}>
        Productos similares
      </Heading>
      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={6}>
        {similarProducts.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={bgColor}
            borderColor={borderColor}
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "lg",
              borderColor: "blue.300",
            }}
          >
            <RouterLink to={`/product/${product.id}`}>
              <Box p={4} textAlign="center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  mx="auto"
                  h="120px"
                  objectFit="contain"
                />
              </Box>
              <Box p={4}>
                <Text fontWeight="medium" noOfLines={2} mb={2}>
                  {product.name}
                </Text>
                <Text fontWeight="bold" color={textColor}>
                  ${product.price.toLocaleString()}
                </Text>
                <Flex align="center" mt={1}>
                  <Box as={FiStar} color="yellow.400" mr={1} />
                  <Text fontSize="sm">{product.rating}</Text>
                </Flex>
              </Box>
            </RouterLink>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default SimilarProducts
