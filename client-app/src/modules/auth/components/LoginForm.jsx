"use client"

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  IconButton,
  VStack,
  Text,
  Checkbox,
  Link,
  Flex,
  Alert,
  AlertIcon,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { useColorModeValue } from "@chakra-ui/react"
import { useAuth } from "../hooks/useAuth"
import { validateWithSchema, loginSchema } from "../utils/validations"

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  const { login, isLoading, error } = useAuth()

  const accentColor = useColorModeValue("accent.primary", "accent.primary")
  const inputBg = useColorModeValue("bg.surface", "bg.surface")

  const togglePassword = () => setShowPassword(!showPassword)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validar con Zod
    const validation = validateWithSchema(loginSchema, form)

    if (!validation.success) {
      setErrors(validation.errors)
      return
    }

    await login(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
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
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            bg={inputBg}
            focusBorderColor="accent.primary"
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Contraseña</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              bg={inputBg}
              focusBorderColor="accent.primary"
            />
            <InputRightElement>
              <IconButton
                size="sm"
                variant="ghost"
                onClick={togglePassword}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                aria-label="Mostrar contraseña"
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <Flex w="full" justify="space-between" align="center">
          <Checkbox colorScheme="blue">Recuérdame</Checkbox>
          <Link
            as={RouterLink}
            to="/recovery-password"
            color={accentColor}
            fontSize="sm"
            _hover={{ textDecoration: "underline" }}
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Flex>

        <Button
          type="submit"
          colorScheme="blue"
          w="full"
          fontWeight="bold"
          isLoading={isLoading}
          loadingText="Iniciando sesión..."
        >
          Iniciar sesión
        </Button>

        <Text fontSize="sm" textAlign="center" mt={2}>
          ¿No tienes cuenta?{" "}
          <Link as={RouterLink} to="/register" color={accentColor}>
            Regístrate
          </Link>
        </Text>
      </VStack>
    </form>
  )
}

export default LoginForm
