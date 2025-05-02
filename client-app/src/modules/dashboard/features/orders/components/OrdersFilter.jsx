"use client"

import { Flex, InputGroup, InputLeftElement, Input, Select } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"

const OrdersFilter = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align={{ base: "stretch", md: "center" }}
      mb={6}
      gap={4}
    >
      <InputGroup maxW={{ base: "100%", md: "300px" }}>
        <InputLeftElement pointerEvents="none">
          <FaSearch color="gray.300" />
        </InputLeftElement>
        <Input
          placeholder="Buscar por número o producto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>

      <Select maxW={{ base: "100%", md: "200px" }} value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Todos los estados</option>
        <option value="entregado">Entregado</option>
        <option value="en camino">En camino</option>
        <option value="procesando">Procesando</option>
        <option value="cancelado">Cancelado</option>
      </Select>
    </Flex>
  )
}

export default OrdersFilter
