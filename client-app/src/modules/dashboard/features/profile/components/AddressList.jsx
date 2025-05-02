import { VStack, Box, Flex, Text, HStack, Button, Badge, useColorModeValue } from "@chakra-ui/react"
import { FaMapMarkerAlt, FaEdit } from "react-icons/fa"

const AddressList = ({ addresses }) => {
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <VStack spacing={4} align="stretch">
      {addresses.map((address) => (
        <Box key={address.id} p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor} position="relative">
          <Flex justify="space-between" align="flex-start">
            <Box>
              <Flex align="center" mb={1}>
                <Text fontWeight="bold" mr={2}>
                  {address.name}
                </Text>
                {address.isDefault && (
                  <Badge colorScheme="green" fontSize="xs">
                    Predeterminada
                  </Badge>
                )}
              </Flex>
              <HStack align="flex-start" spacing={1} mb={1}>
                <FaMapMarkerAlt />
                <Text>{address.address}</Text>
              </HStack>
              <Text>
                {address.city}, {address.state} {address.zip}
              </Text>
              <Text>{address.country}</Text>
            </Box>
            <HStack>
              <Button size="sm" leftIcon={<FaEdit />} variant="ghost">
                Editar
              </Button>
              {!address.isDefault && (
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

export default AddressList
