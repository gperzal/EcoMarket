"use client"

import { useState } from "react"
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  Select,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.subject) {
      newErrors.subject = "El asunto es requerido"
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto contigo pronto.",
          status: "success",
          duration: 5000,
          isClosable: true,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 1500)
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <FormControl isInvalid={errors.name}>
          <FormLabel>Nombre</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre completo" />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.subject}>
          <FormLabel>Asunto</FormLabel>
          <Select name="subject" value={formData.subject} onChange={handleChange} placeholder="Selecciona un asunto">
            <option value="consulta">Consulta general</option>
            <option value="soporte">Soporte técnico</option>
            <option value="ventas">Ventas</option>
            <option value="reclamo">Reclamo</option>
            <option value="otro">Otro</option>
          </Select>
          <FormErrorMessage>{errors.subject}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.message}>
          <FormLabel>Mensaje</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            rows={6}
          />
          <FormErrorMessage>{errors.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="blue" size="lg" isLoading={isSubmitting} loadingText="Enviando">
          Enviar mensaje
        </Button>
      </VStack>
    </Box>
  )
}

export default ContactForm
