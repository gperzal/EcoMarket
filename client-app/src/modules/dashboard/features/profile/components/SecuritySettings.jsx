import { VStack, Box, Flex, Text, Button, Divider, Badge, useColorModeValue, Heading } from "@chakra-ui/react"
import { FaKey } from "react-icons/fa"
import { FaShield } from "react-icons/fa6";


const SecuritySettings = () => {
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <VStack spacing={6} align="stretch">
      <Box>
        <Flex align="center" mb={4}>
          <Box fontSize="xl" color="brand.primary.500" mr={3}>
            <FaKey />
          </Box>
          <Box flex="1">
            <Text fontWeight="bold">Contraseña</Text>
            <Text fontSize="sm" color="text.secondary">
              Última actualización: hace 35 días
            </Text>
          </Box>
          <Button size="sm" colorScheme="blue">
            Cambiar
          </Button>
        </Flex>
        <Divider />
      </Box>

      <Box>
        <Flex align="center" mb={4}>
          <Box fontSize="xl" color="brand.primary.500" mr={3}>
            <FaShield />
          </Box>
          <Box flex="1">
            <Text fontWeight="bold">Autenticación de dos factores</Text>
            <Text fontSize="sm" color="text.secondary">
              Añade una capa extra de seguridad a tu cuenta
            </Text>
          </Box>
          <Button size="sm" colorScheme="blue">
            Activar
          </Button>
        </Flex>
        <Divider />
      </Box>

      <Box>
        <Heading size="sm" mb={4}>
          Sesiones Activas
        </Heading>
        <Box p={4} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
          <Flex justify="space-between" align="center">
            <Box>
              <Text fontWeight="bold">Este dispositivo</Text>
              <Text fontSize="sm" color="text.secondary">
                Última actividad: Hace 5 minutos
              </Text>
            </Box>
            <Badge colorScheme="green">Activo</Badge>
          </Flex>
        </Box>
      </Box>
    </VStack>
  )
}

export default SecuritySettings
