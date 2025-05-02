"use client"

import { Box, Heading, RadioGroup, Radio, Stack, Flex, Text, Icon, useColorModeValue, Badge } from "@chakra-ui/react"
import { FaTruck, FaBolt, FaMapMarkerAlt } from "react-icons/fa"

const ShippingOptions = ({ selectedMethod, onSelectMethod, freeShippingEligible }) => {
  // Colores según el tema usando tokens semánticos
  const bgColor = useColorModeValue("bg.card", "bg.card")
  const borderColor = useColorModeValue("border.default", "border.default")
  const textColor = useColorModeValue("text.primary", "text.primary")
  const secondaryTextColor = useColorModeValue("text.secondary", "text.secondary")
  const highlightBg = useColorModeValue("brand.primary.50", "rgba(77, 136, 202, 0.15)")
  const highlightBorder = useColorModeValue("brand.primary.200", "brand.primary.700")
  const standardIconColor = useColorModeValue("brand.primary.500", "brand.primary.300")
  const expressIconColor = useColorModeValue("brand.secondary.500", "brand.secondary.300")
  const pickupIconColor = useColorModeValue("brand.primary.600", "brand.primary.400")
  const badgeColor = useColorModeValue("brand.secondary", "brand.secondary")
  const badgeBgColor = useColorModeValue("brand.secondary.100", "brand.secondary.900")
  const badgeTextColor = useColorModeValue("brand.secondary.800", "brand.secondary.100")

  return (
    <Box bg={bgColor} p={6} borderRadius="lg" boxShadow="sm" borderWidth="1px" borderColor={borderColor}>
      <Heading as="h2" size="md" mb={4} color={textColor}>
        Opciones de envío
      </Heading>

      <RadioGroup onChange={onSelectMethod} value={selectedMethod}>
        <Stack spacing={4}>
          {/* Envío estándar */}
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderColor={selectedMethod === "standard" ? highlightBorder : borderColor}
            bg={selectedMethod === "standard" ? highlightBg : "transparent"}
            transition="all 0.2s"
          >
            <Radio value="standard" colorScheme="brand">
              <Flex align="center" wrap="wrap">
                <Icon as={FaTruck} mr={2} color={standardIconColor} />
                <Text fontWeight="medium" color={textColor}>
                  Envío estándar
                </Text>
                {freeShippingEligible && (
                  <Badge colorScheme={badgeColor} ml={2} bg={badgeBgColor} color={badgeTextColor}>
                    GRATIS
                  </Badge>
                )}
              </Flex>
            </Radio>
            <Text fontSize="sm" color={secondaryTextColor} mt={2} ml={6}>
              Entrega estimada: 3-5 días hábiles
            </Text>
            {!freeShippingEligible && (
              <Text fontWeight="medium" mt={1} ml={6} color={textColor}>
                $3.990
              </Text>
            )}
          </Box>

          {/* Envío express */}
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderColor={selectedMethod === "express" ? highlightBorder : borderColor}
            bg={selectedMethod === "express" ? highlightBg : "transparent"}
            transition="all 0.2s"
          >
            <Radio value="express" colorScheme="brand">
              <Flex align="center">
                <Icon as={FaBolt} mr={2} color={expressIconColor} />
                <Text fontWeight="medium" color={textColor}>
                  Envío express
                </Text>
              </Flex>
            </Radio>
            <Text fontSize="sm" color={secondaryTextColor} mt={2} ml={6}>
              Entrega estimada: 24-48 horas (días hábiles)
            </Text>
            <Text fontWeight="medium" mt={1} ml={6} color={textColor}>
              {freeShippingEligible ? "$1.990" : "$5.990"}
            </Text>
          </Box>

          {/* Retiro en tienda */}
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderColor={selectedMethod === "pickup" ? highlightBorder : borderColor}
            bg={selectedMethod === "pickup" ? highlightBg : "transparent"}
            transition="all 0.2s"
          >
            <Radio value="pickup" colorScheme="brand">
              <Flex align="center">
                <Icon as={FaMapMarkerAlt} mr={2} color={pickupIconColor} />
                <Text fontWeight="medium" color={textColor}>
                  Retiro en tienda
                </Text>
                <Badge colorScheme={badgeColor} ml={2} bg={badgeBgColor} color={badgeTextColor}>
                  GRATIS
                </Badge>
              </Flex>
            </Radio>
            <Text fontSize="sm" color={secondaryTextColor} mt={2} ml={6}>
              Disponible para retiro: 24 horas después de la compra
            </Text>
            <Text fontSize="sm" color={secondaryTextColor} mt={1} ml={6}>
              Ubicaciones disponibles: 5 tiendas
            </Text>
          </Box>
        </Stack>
      </RadioGroup>
    </Box>
  )
}

export default ShippingOptions
