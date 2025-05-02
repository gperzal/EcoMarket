import { Card, CardHeader, CardBody, Heading, VStack, Flex, Text, Divider, useColorModeValue } from "@chakra-ui/react"

const PaymentSummary = ({ payment }) => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Card bg={cardBg} mb={6} boxShadow="md" borderColor={borderColor}>
      <CardHeader>
        <Heading size="md">Resumen de Pago</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={3} align="stretch">
          <Flex justify="space-between">
            <Text>Subtotal</Text>
            <Text>${payment.subtotal}</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Envío</Text>
            <Text>{payment.shipping === 0 ? "Gratis" : `${payment.shipping}`}</Text>
          </Flex>
          {payment.discount > 0 && (
            <Flex justify="space-between">
              <Text>Descuento</Text>
              <Text color="green.500">-${payment.discount}</Text>
            </Flex>
          )}
          <Divider />
          <Flex justify="space-between" fontWeight="bold">
            <Text>Total</Text>
            <Text fontSize="lg" color="brand.primary.500">
              ${payment.total}
            </Text>
          </Flex>
          <Divider />
          <Flex align="center">
            <Text fontWeight="bold" mr={2}>
              Método de Pago:
            </Text>
            <Text>
              {payment.method} **** {payment.last4}
            </Text>
          </Flex>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default PaymentSummary
