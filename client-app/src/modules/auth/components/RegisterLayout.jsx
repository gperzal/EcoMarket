"use client"

import { Box, Container, VStack, Image, Button, HStack, Text, useColorModeValue } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useNavigate, Link as RouterLink } from "react-router-dom"

const RegisterLayout = ({ children }) => {
  const navigate = useNavigate()
  const secondaryColor = useColorModeValue("brand.secondary.500", "brand.secondary.300")

  const handleGoBack = () => {
    navigate("/")
  }

  return (
    <Box bg="bg.body" minH="100vh" py={8}>
      <Container maxW="md">
        <VStack spacing={4} align="center">
          <Image
            src="/logo.svg"
            alt="EcoMarket Logo"
            h="60px"
            filter="auto"
          />
          <Box w="full" bg="bg.card" rounded="md" shadow="md" p={8} border="1px" borderColor="border.default">
            {children}
          </Box>
          <VStack w="full" spacing={2}>
            <Button
              as={RouterLink}
              to="/privacy-policy"
              variant="link"
              color="brand.primary.300"
              size="xs"
              _hover={{ color: "brand.primary.200" }}
            >
              Política de Privacidad
            </Button>
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="blue"
              variant="ghost"
              size="md"
              onClick={handleGoBack}
            >
              Volver al inicio
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default RegisterLayout
