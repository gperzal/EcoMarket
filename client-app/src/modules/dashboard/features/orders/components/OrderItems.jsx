import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  VStack,
  Flex,
  Image,
  Box,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react"

const OrderItems = ({ items }) => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
      <CardHeader>
        <Heading size="md">Productos</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align="stretch">
          {items.map((item) => (
            <Flex
              key={item.id}
              p={4}
              borderWidth="1px"
              borderRadius="md"
              borderColor={borderColor}
              direction={{ base: "column", sm: "row" }}
              align={{ base: "center", sm: "flex-start" }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                boxSize="100px"
                objectFit="cover"
                mr={{ base: 0, sm: 6 }}
                mb={{ base: 4, sm: 0 }}
                borderRadius="md"
              />
              <Box flex="1">
                <Text fontWeight="bold" fontSize="lg">
                  {item.name}
                </Text>
                <Text color="text.secondary" mb={2}>
                  {item.description}
                </Text>
                <HStack>
                  <Text>Cantidad: {item.quantity}</Text>
                  <Text fontWeight="bold" color="brand.primary.500">
                    ${item.price}
                  </Text>
                </HStack>
              </Box>
            </Flex>
          ))}
        </VStack>
      </CardBody>
    </Card>
  )
}

export default OrderItems
