import { VStack, Box, Flex, Text, HStack, Button, Badge, useColorModeValue } from "@chakra-ui/react"
import { FaCreditCard, FaEdit } from "react-icons/fa"

const PaymentMethodsList = ({ paymentMethods }) => {
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <VStack spacing={4} align="stretch">
      {paymentMethods.map((method) => (
        <Box key={method.id} p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor} position="relative">
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Box mr={4} fontSize="2xl" color="brand.primary.500">
                <FaCreditCard />
              </Box>
              <Box>
                <Flex align="center" mb={1}>
                  <Text fontWeight="bold" mr={2}>
                    {method.name}
                  </Text>
                  {method.isDefault && (
                    <Badge colorScheme="green" fontSize="xs">
                      Predeterminada
                    </Badge>
                  )}
                </Flex>
                <Text fontSize="sm" color="text.secondary">
                  Vence: {method.expiry}
                </Text>
              </Box>
            </Flex>
            <HStack>
              <Button size="sm" leftIcon={<FaEdit />} variant="ghost">
                Editar
              </Button>
              {!method.isDefault && (
                <Button size="sm" variant="ghost">
                  Eliminar
                </Button>
              )}
            </HStack>
          </Flex>
        </Box>
      ))}
    </VStack>
  )
}

export default PaymentMethodsList
