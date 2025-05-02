"use client"

import { Box, Container, VStack, Image, Button, HStack } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"

const AuthLayout = ({ children }) => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate("/")
  }

  return (
    <Box bg="bg.body" minH="100vh" py={12}>
      <Container maxW="sm">
        <VStack spacing={6} align="center" position="relative" w="full">
          <Image src="/logo.svg" alt="Ecomarket Logo" h="60px" filter="auto" />
          <Box w="full" bg="bg.card" rounded="md" shadow="md" p={8} border="1px" borderColor="border.default">
            {children}
          </Box>
          <HStack w="full" justifyContent="center" mb={4}>
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="blue"
            variant="ghost"
            size="md"
            onClick={handleGoBack}
            mb={2}
          >
            Volver al inicio
          </Button>
        </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default AuthLayout
