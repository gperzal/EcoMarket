import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  VStack,
  Flex,
  Icon,
  Box,
  Text,
  HStack,
  Badge,
  Button,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaStore } from "react-icons/fa"

const SellerInfo = ({ seller }) => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
      <CardHeader>
        <Heading size="md">Información del Vendedor</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align="stretch">
          <Flex align="center">
            <Icon as={FaStore} boxSize={10} mr={4} color="brand.primary.500" />
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                {seller.name}
              </Text>
              <HStack>
                <Badge colorScheme="green">{seller.rating} ★</Badge>
                <Text fontSize="sm">{seller.sales} ventas</Text>
              </HStack>
            </Box>
          </Flex>
          <Button colorScheme="blue" size="sm">
            Contactar al Vendedor
          </Button>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default SellerInfo
