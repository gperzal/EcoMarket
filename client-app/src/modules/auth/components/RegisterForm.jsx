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
  Link,
  useToast,
  HStack,
  Select,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { useAuth } from "../../auth/hooks/useAuth.js"
import { useNavigate } from "react-router-dom"
import { useColorModeValue } from "@chakra-ui/react"

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    documentType: "",
    documentNumber: "",
    phoneNumber: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
    terms: false,
  })
  const [errors, setErrors] = useState({})
  const toast = useToast()
  const navigate = useNavigate()
  const { register } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const accentColor = useColorModeValue("brand.primary.500", "brand.primary.300")
  const secondaryColor = useColorModeValue("brand.secondary.500", "brand.secondary.300")
  const inputBg = useColorModeValue("gray.50", "gray.700")

  const togglePassword = () => setShowPassword(!showPassword)
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setForm({ ...form, [e.target.name]: value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = {}
    if (!form.firstName) validationErrors.firstName = "Nombre requerido"
    if (!form.lastName) validationErrors.lastName = "Apellido requerido"
    if (!form.email) validationErrors.email = "Correo requerido"
    if (!form.documentType) validationErrors.documentType = "Tipo de documento requerido"
    if (!form.documentNumber) validationErrors.documentNumber = "Número de documento requerido"
    if (!form.phoneNumber) validationErrors.phoneNumber = "Número de teléfono requerido"
    if (!form.birthDate) validationErrors.birthDate = "Fecha de nacimiento requerida"
    if (!form.password) validationErrors.password = "Contraseña requerida"
    else if (form.password.length < 6) validationErrors.password = "La contraseña debe tener al menos 6 caracteres"
    if (form.password !== form.confirmPassword) validationErrors.confirmPassword = "Las contraseñas no coinciden"
    if (!form.terms) validationErrors.terms = "Debes aceptar los términos y condiciones"

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const res = register(form)
    if (!res.success) {
      toast({
        title: "Error de registro",
        description: res.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
      return
    }

    toast({
      title: "Registro exitoso",
      description: "Tu cuenta ha sido creada correctamente",
      status: "success",
      duration: 3000,
      isClosable: true,
    })

    navigate("/login")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <HStack w="full" spacing={4}>
            <FormControl isInvalid={!!errors.firstName}>
              <FormLabel>Nombre</FormLabel>
              <Input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Juan"
                bg={inputBg}
                focusBorderColor="brand.primary.400"
              />
              <FormErrorMessage>{errors.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.lastName}>
              <FormLabel>Apellido</FormLabel>
              <Input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Pérez"
                bg={inputBg}
                focusBorderColor="brand.primary.400"
              />
              <FormErrorMessage>{errors.lastName}</FormErrorMessage>
            </FormControl>
          </HStack>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ejemplo@correo.com"
              bg={inputBg}
              focusBorderColor="brand.primary.400"
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <HStack w="full" spacing={4}>
            <FormControl isInvalid={!!errors.documentType}>
              <FormLabel>Tipo de documento</FormLabel>
              <Select
                name="documentType"
                value={form.documentType}
                onChange={handleChange}
                placeholder="Seleccionar"
                bg={inputBg}
                focusBorderColor="brand.primary.400"
              >
                <option value="dni">DNI</option>
                <option value="passport">Pasaporte</option>
                <option value="ce">Carné de Extranjería</option>
              </Select>
              <FormErrorMessage>{errors.documentType}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.documentNumber}>
              <FormLabel>No. de documento</FormLabel>
              <Input
                name="documentNumber"
                value={form.documentNumber}
                onChange={handleChange}
                placeholder="12345678"
                bg={inputBg}
                focusBorderColor="brand.primary.400"
              />
              <FormErrorMessage>{errors.documentNumber}</FormErrorMessage>
            </FormControl>
          </HStack>

          <HStack w="full" spacing={4}>
            <FormControl isInvalid={!!errors.phoneNumber}>
              <FormLabel>Número de teléfono</FormLabel>
              <Input
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                placeholder="+51 999999999"
                bg={inputBg}
                focusBorderColor="brand.primary.400"
              />
              <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.birthDate}>
              <FormLabel>Fecha de nacimiento</FormLabel>
              <Input
                type="date"
                name="birthDate"
                value={form.birthDate}
                onChange={handleChange}
                bg={inputBg}
                focusBorderColor="brand.primary.400"
              />
              <FormErrorMessage>{errors.birthDate}</FormErrorMessage>
            </FormControl>
          </HStack>

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
                focusBorderColor="brand.primary.400"
              />
              <InputRightElement>
                <IconButton
                  size="sm"
                  variant="ghost"
                  onClick={togglePassword}
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  aria-label="Mostrar contraseña"
                  color={accentColor}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.confirmPassword}>
            <FormLabel>Confirmar contraseña</FormLabel>
            <InputGroup>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                bg={inputBg}
                focusBorderColor="brand.primary.400"
              />
              <InputRightElement>
                <IconButton
                  size="sm"
                  variant="ghost"
                  onClick={toggleConfirmPassword}
                  icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                  aria-label="Mostrar contraseña"
                  color={accentColor}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.terms}>
            <Checkbox name="terms" isChecked={form.terms} onChange={handleChange}>
              Acepto los{" "}
              <Link color={secondaryColor} onClick={onOpen} textDecoration="underline">
                términos y condiciones
              </Link>
            </Checkbox>
            <FormErrorMessage>{errors.terms}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            bg="brand.primary.500"
            color="white"
            _hover={{ bg: "brand.primary.600" }}
            w="full"
            fontWeight="bold"
          >
            Registrarse
          </Button>

          <Text fontSize="sm" textAlign="center">
            ¿Ya tienes cuenta?{" "}
            <Link color={secondaryColor} href="/login">
              Inicia sesión
            </Link>
          </Text>
        </VStack>
      </form>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Términos y Condiciones</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="stretch" spacing={4}>
              <Text fontWeight="bold">1. Aceptación de los Términos</Text>
              <Text>
                Al acceder y utilizar EcoMarket, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios.
              </Text>

              <Text fontWeight="bold">2. Uso del Servicio</Text>
              <Text>
                EcoMarket es una plataforma de comercio electrónico enfocada en productos sostenibles. Los usuarios deben tener al menos 18 años de edad para utilizar nuestros servicios.
              </Text>

              <Text fontWeight="bold">3. Productos y Transacciones</Text>
              <Text>
                Todos los productos listados deben cumplir con nuestras políticas de sostenibilidad y autenticidad. EcoMarket actúa como intermediario entre compradores y vendedores.
              </Text>

              <Text fontWeight="bold">4. Privacidad y Datos</Text>
              <Text>
                Tu privacidad es importante para nosotros. Consulta nuestra Política de Privacidad para entender cómo recopilamos y utilizamos tu información.
              </Text>

              <Text fontWeight="bold">5. Modificaciones</Text>
              <Text>
                EcoMarket se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación.
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RegisterForm
