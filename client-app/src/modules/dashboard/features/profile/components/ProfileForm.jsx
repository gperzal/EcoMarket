"use client"

import { VStack, SimpleGrid, FormControl, FormLabel, Input, Flex, Button } from "@chakra-ui/react"
import { FaEdit } from "react-icons/fa"

const ProfileForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={6} align="stretch" flex="1">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <FormControl isRequired>
          <FormLabel>Nombre Completo</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Correo Electrónico</FormLabel>
          <Input name="email" type="email" value={formData.email} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Teléfono</FormLabel>
          <Input name="phone" value={formData.phone} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <FormLabel>Fecha de Nacimiento</FormLabel>
          <Input name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} />
        </FormControl>
      </SimpleGrid>

      <Flex justify="flex-end">
        <Button type="submit" colorScheme="blue" leftIcon={<FaEdit />}>
          Guardar Cambios
        </Button>
      </Flex>
    </VStack>
  )
}

export default ProfileForm
