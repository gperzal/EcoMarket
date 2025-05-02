"use client"

import { Card, CardBody, Flex, InputGroup, InputLeftElement, Input, Select, useColorModeValue } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"

const ProductsFilter = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  const cardBg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Card bg={cardBg} boxShadow="md" borderColor={borderColor} mb={6}>
      <CardBody>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "stretch", md: "center" }}
          gap={4}
        >
          <InputGroup maxW={{ base: "100%", md: "300px" }}>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Buscar productos" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </InputGroup>

          <Select maxW={{ base: "100%", md: "200px" }} value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Todos los estados</option>
            <option value="activo">Activos</option>
            <option value="sin stock">Sin Stock</option>
            <option value="inactivo">Inactivos</option>
          </Select>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default ProductsFilter
