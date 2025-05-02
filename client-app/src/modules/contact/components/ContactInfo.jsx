import { Box, VStack, Heading, Text, Flex, Link, Icon, SimpleGrid } from "@chakra-ui/react"
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi"

const ContactInfo = () => {
  return (
    <VStack spacing={8} align="stretch">
      <Box>
        <Heading size="md" mb={4}>
          Información de contacto
        </Heading>
        <VStack spacing={4} align="stretch">
          <Flex align="center">
            <Icon as={FiMapPin} mr={3} color="blue.500" boxSize={5} />
            <Text>Av. Corrientes 1234, Buenos Aires, Argentina</Text>
          </Flex>

          <Flex align="center">
            <Icon as={FiPhone} mr={3} color="blue.500" boxSize={5} />
            <Link href="tel:+541112345678">+54 11 1234-5678</Link>
          </Flex>

          <Flex align="center">
            <Icon as={FiMail} mr={3} color="blue.500" boxSize={5} />
            <Link href="mailto:contacto@mitienda.com">contacto@mitienda.com</Link>
          </Flex>

          <Flex align="center">
            <Icon as={FiClock} mr={3} color="blue.500" boxSize={5} />
            <Box>
              <Text>Lunes a Viernes: 9:00 - 18:00</Text>
              <Text>Sábados: 9:00 - 13:00</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      <Box>
        <Heading size="md" mb={4}>
          Síguenos en redes sociales
        </Heading>
        <SimpleGrid columns={3} spacing={4}>
          <Link href="#" isExternal>
            <Flex
              direction="column"
              align="center"
              p={4}
              borderWidth="1px"
              borderRadius="md"
              transition="all 0.3s"
              _hover={{ bg: "blue.50", borderColor: "blue.300", transform: "translateY(-2px)" }}
              _dark={{ _hover: { bg: "blue.900" } }}
            >
              <Icon as={FiFacebook} boxSize={6} color="blue.500" mb={2} />
              <Text>Facebook</Text>
            </Flex>
          </Link>

          <Link href="#" isExternal>
            <Flex
              direction="column"
              align="center"
              p={4}
              borderWidth="1px"
              borderRadius="md"
              transition="all 0.3s"
              _hover={{ bg: "blue.50", borderColor: "blue.300", transform: "translateY(-2px)" }}
              _dark={{ _hover: { bg: "blue.900" } }}
            >
              <Icon as={FiInstagram} boxSize={6} color="blue.500" mb={2} />
              <Text>Instagram</Text>
            </Flex>
          </Link>

          <Link href="#" isExternal>
            <Flex
              direction="column"
              align="center"
              p={4}
              borderWidth="1px"
              borderRadius="md"
              transition="all 0.3s"
              _hover={{ bg: "blue.50", borderColor: "blue.300", transform: "translateY(-2px)" }}
              _dark={{ _hover: { bg: "blue.900" } }}
            >
              <Icon as={FiTwitter} boxSize={6} color="blue.500" mb={2} />
              <Text>Twitter</Text>
            </Flex>
          </Link>
        </SimpleGrid>
      </Box>
    </VStack>
  )
}

export default ContactInfo
