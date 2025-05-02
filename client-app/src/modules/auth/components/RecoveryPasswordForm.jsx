"use client"

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  VStack,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react"
import { useState } from "react"
import { useColorModeValue } from "@chakra-ui/react"
import { useRecoveryPassword } from "../hooks/useRecoveryPassword.js"
import { validateWithSchema, recoveryEmailSchema } from "../utils/validations"

const RecoveryPasswordForm = () => {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const { requestRecovery, isLoading, isSubmitted, error } = useRecoveryPassword()

  const inputBg = useColorModeValue("bg.surface", "bg.surface")

  const handleChange = (e) => {
    setEmail(e.target.value)
    setErrors({})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validar con Zod
    const validation = validateWithSchema(recoveryEmailSchema, { email })

    if (!validation.success) {
      setErrors(validation.errors)
      return
    }

    await requestRecovery(email)
  }

  if (isSubmitted) {
    return (
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        borderRadius="md"
        py={6}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          ¡Correo enviado!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Hemos enviado un correo a <strong>{email}</strong> con instrucciones para recuperar tu contraseña. Por favor
          revisa tu bandeja de entrada y sigue los pasos indicados.
        </AlertDescription>
        <Box mt={4}>
          <Text fontSize="sm" color="text.secondary">
            Si no encuentras el correo, revisa tu carpeta de spam o correo no deseado.
          </Text>
        </Box>
      </Alert>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={6}>
        <Text fontSize="xl" fontWeight="bold" textAlign="center" color="text.primary">
          Recuperar contraseña
        </Text>

        <Text fontSize="sm" textAlign="center" color="text.secondary">
          Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
        </Text>

        {error && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            {error}
          </Alert>
        )}

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>Correo electrónico</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            bg={inputBg}
            focusBorderColor="accent.primary"
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          w="full"
          fontWeight="bold"
          isLoading={isLoading}
          loadingText="Enviando..."
        >
          Enviar instrucciones
        </Button>
      </VStack>
    </form>
  )
}

export default RecoveryPasswordForm
