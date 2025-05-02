"use client"

import { useState } from "react"
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
  Select,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Text,
  Avatar,
  HStack,
  useToast,
} from "@chakra-ui/react"
import { FaSearch, FaEllipsisV, FaEdit, FaTrash, FaLock, FaUnlock, FaUserPlus } from "react-icons/fa"

// Datos de ejemplo para usuarios
const mockUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@ecomarket.com",
    role: "admin",
    status: "active",
    lastLogin: "2023-04-15 10:30",
  },
  {
    id: 2,
    name: "Buyer User",
    email: "buyer@ecomarket.com",
    role: "buyer",
    status: "active",
    lastLogin: "2023-04-14 15:45",
  },
  {
    id: 3,
    name: "Seller User",
    email: "seller@ecomarket.com",
    role: "seller",
    status: "active",
    lastLogin: "2023-04-15 09:20",
  },
  {
    id: 4,
    name: "John Doe",
    email: "john@example.com",
    role: "buyer",
    status: "inactive",
    lastLogin: "2023-04-10 11:15",
  },
  {
    id: 5,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "seller",
    status: "active",
    lastLogin: "2023-04-13 14:30",
  },
  {
    id: 6,
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "buyer",
    status: "suspended",
    lastLogin: "2023-04-05 16:45",
  },
  {
    id: 7,
    name: "Emily Davis",
    email: "emily@example.com",
    role: "seller",
    status: "active",
    lastLogin: "2023-04-14 08:50",
  },
  {
    id: 8,
    name: "Michael Wilson",
    email: "michael@example.com",
    role: "buyer",
    status: "active",
    lastLogin: "2023-04-12 13:25",
  },
]

const UserManagement = () => {
  const [users, setUsers] = useState(mockUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  // Filtrar usuarios
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter ? user.role === roleFilter : true
    const matchesStatus = statusFilter ? user.status === statusFilter : true

    return matchesSearch && matchesRole && matchesStatus
  })

  // Manejar acciones de usuario
  const handleUserAction = (action, user) => {
    switch (action) {
      case "edit":
        setSelectedUser(user)
        onOpen()
        break
      case "delete":
        // Mostrar confirmación antes de eliminar
        if (window.confirm(`¿Estás seguro de eliminar al usuario ${user.name}?`)) {
          setUsers(users.filter((u) => u.id !== user.id))
          toast({
            title: "Usuario eliminado",
            description: `El usuario ${user.name} ha sido eliminado.`,
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
        break
      case "suspend":
        setUsers(users.map((u) => (u.id === user.id ? { ...u, status: "suspended" } : u)))
        toast({
          title: "Usuario suspendido",
          description: `El usuario ${user.name} ha sido suspendido.`,
          status: "warning",
          duration: 3000,
          isClosable: true,
        })
        break
      case "activate":
        setUsers(users.map((u) => (u.id === user.id ? { ...u, status: "active" } : u)))
        toast({
          title: "Usuario activado",
          description: `El usuario ${user.name} ha sido activado.`,
          status: "success",
          duration: 3000,
          isClosable: true,
        })
        break
      default:
        break
    }
  }

  // Renderizar badge de estado
  const renderStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge colorScheme="green">Activo</Badge>
      case "inactive":
        return <Badge colorScheme="gray">Inactivo</Badge>
      case "suspended":
        return <Badge colorScheme="red">Suspendido</Badge>
      default:
        return null
    }
  }

  // Renderizar badge de rol
  const renderRoleBadge = (role) => {
    switch (role) {
      case "admin":
        return <Badge colorScheme="purple">Admin</Badge>
      case "buyer":
        return <Badge colorScheme="blue">Comprador</Badge>
      case "seller":
        return <Badge colorScheme="orange">Vendedor</Badge>
      default:
        return null
    }
  }

  return (
    <Box p={5}>
      <Heading size="lg" mb={6}>
        Gestión de Usuarios
      </Heading>

      {/* Filtros y búsqueda */}
      <Flex mb={6} direction={{ base: "column", md: "row" }} gap={4}>
        <InputGroup maxW={{ md: "320px" }}>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Buscar usuarios..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </InputGroup>

        <Select
          placeholder="Filtrar por rol"
          maxW={{ md: "200px" }}
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="admin">Administrador</option>
          <option value="buyer">Comprador</option>
          <option value="seller">Vendedor</option>
        </Select>

        <Select
          placeholder="Filtrar por estado"
          maxW={{ md: "200px" }}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="active">Activo</option>
          <option value="inactive">Inactivo</option>
          <option value="suspended">Suspendido</option>
        </Select>

        <Button
          leftIcon={<FaUserPlus />}
          colorScheme="green"
          ml={{ md: "auto" }}
          onClick={() => {
            setSelectedUser(null) // Limpiar usuario seleccionado para crear uno nuevo
            onOpen()
          }}
        >
          Nuevo Usuario
        </Button>
      </Flex>

      {/* Tabla de usuarios */}
      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Usuario</Th>
              <Th>Email</Th>
              <Th>Rol</Th>
              <Th>Estado</Th>
              <Th>Último Acceso</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredUsers.map((user) => (
              <Tr key={user.id}>
                <Td>
                  <HStack>
                    <Avatar size="sm" name={user.name} />
                    <Text>{user.name}</Text>
                  </HStack>
                </Td>
                <Td>{user.email}</Td>
                <Td>{renderRoleBadge(user.role)}</Td>
                <Td>{renderStatusBadge(user.status)}</Td>
                <Td>{user.lastLogin}</Td>
                <Td>
                  <Menu>
                    <MenuButton as={IconButton} icon={<FaEllipsisV />} variant="ghost" size="sm" />
                    <MenuList>
                      <MenuItem icon={<FaEdit />} onClick={() => handleUserAction("edit", user)}>
                        Editar
                      </MenuItem>
                      {user.status === "active" ? (
                        <MenuItem icon={<FaLock />} onClick={() => handleUserAction("suspend", user)}>
                          Suspender
                        </MenuItem>
                      ) : (
                        <MenuItem icon={<FaUnlock />} onClick={() => handleUserAction("activate", user)}>
                          Activar
                        </MenuItem>
                      )}
                      <MenuItem icon={<FaTrash />} onClick={() => handleUserAction("delete", user)}>
                        Eliminar
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Modal para editar/crear usuario */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedUser ? "Editar Usuario" : "Crear Usuario"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Nombre</FormLabel>
              <Input defaultValue={selectedUser?.name} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input defaultValue={selectedUser?.email} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Rol</FormLabel>
              <Select defaultValue={selectedUser?.role}>
                <option value="admin">Administrador</option>
                <option value="buyer">Comprador</option>
                <option value="seller">Vendedor</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Estado</FormLabel>
              <Select defaultValue={selectedUser?.status}>
                <option value="active">Activo</option>
                <option value="inactive">Inactivo</option>
                <option value="suspended">Suspendido</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                toast({
                  title: selectedUser ? "Usuario actualizado" : "Usuario creado",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                })
                onClose()
              }}
            >
              {selectedUser ? "Guardar Cambios" : "Crear Usuario"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default UserManagement
