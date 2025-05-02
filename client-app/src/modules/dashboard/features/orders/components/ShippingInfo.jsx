import { Card, CardHeader, CardBody, Heading, VStack, Flex, Icon, Box, Text, useColorModeValue } from "@chakra-ui/react"
import { FaMapMarkerAlt, FaTruck, FaBox, FaCheckCircle } from "react-icons/fa"

const ShippingInfo = ({ shipping }) => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Card bg={cardBg} boxShadow="md" borderColor={borderColor}>
      <CardHeader>
        <Heading size="md">Información de Envío</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align="stretch">
          <Flex align="center">
            <Icon as={FaMapMarkerAlt} mr={2} color="brand.primary.500" />
            <Box>
              <Text fontWeight="bold">Dirección de Entrega</Text>
              <Text>{shipping.address}</Text>
            </Box>
          </Flex>

          <Flex align="center">
            <Icon as={FaTruck} mr={2} color="brand.primary.500" />
            <Box>
              <Text fontWeight="bold">Método de Envío</Text>
              <Text>{shipping.method}</Text>
            </Box>
          </Flex>

          {shipping.trackingNumber && (
            <Flex align="center">
              <Icon as={FaBox} mr={2} color="brand.primary.500" />
              <Box>
                <Text fontWeight="bold">Número de Seguimiento</Text>
                <Text>{shipping.trackingNumber}</Text>
              </Box>
            </Flex>
          )}

          <Flex align="center">
            <Icon as={FaCheckCircle} mr={2} color="brand.primary.500" />
            <Box>
              <Text fontWeight="bold">Entrega Estimada</Text>
              <Text>{shipping.estimatedDelivery}</Text>
            </Box>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default ShippingInfo
