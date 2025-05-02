"use client"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react"
import { FaExclamationTriangle } from "react-icons/fa"

const DeleteProductModal = ({ isOpen, onClose, selectedProduct, confirmDelete }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmar Eliminación</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" align="center" mb={4}>
            <Icon as={FaExclamationTriangle} boxSize={12} color="red.500" mb={4} />
            <Text>
              ¿Estás seguro de que deseas eliminar el producto <strong>{selectedProduct?.name}</strong>?
            </Text>
            <Text mt={2} fontSize="sm" color="text.secondary">
              Esta acción no se puede deshacer.
            </Text>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="red" onClick={confirmDelete}>
            Eliminar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default DeleteProductModal
