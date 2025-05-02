import { Card, CardBody, Flex, Box, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react"
import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"

const EmptyFavorites = () => {
  const cardBg = useColorModeValue("white", "gray.800")

  return (
    <Card bg={cardBg} p={6} textAlign="center">
      <CardBody>
        <Flex direction="column" align="center" justify="center" py={10}>
          <Box fontSize="6xl" mb={4} color="red.400">
            <FaHeart />
          </Box>
          <Heading size="md" mb={2}>
            No tienes productos favoritos
          </Heading>
          <Text color="text.secondary" mb={6}>
            Explora nuestro catálogo y agrega productos a tus favoritos
          </Text>
          <Button as={Link} to="/" colorScheme="blue">
            Explorar Productos
          </Button>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default EmptyFavorites
