"use client"

import { Box, Heading, Flex, Button, Text, useDisclosure, useToast } from "@chakra-ui/react"
import { FaPlus } from "react-icons/fa"
import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from '../../../../auth/hooks/useAuth.js'
import ProductsFilter from "../components/ProductsFilter"
import ProductsTable from "../components/ProductsTable"
import DeleteProductModal from "../components/DeleteProductModal"

const Products = () => {
  const { user } = useAuth()
  const roles = (user?.roles || []).map(r => r.toLowerCase())
  const isSeller = roles.includes('seller') || roles.includes('admin')
  if (!isSeller) return <Navigate to="/dashboard" replace />

  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  // Datos de ejemplo
  const products = [
    {
      id: 1,
      name: "Smartphone XYZ",
      category: "Electrónicos",
      price: 12999,
      stock: 15,
      status: "Activo",
      image: "/placeholder.svg",
      sold: 28,
    },
    {
      id: 2,
      name: "Laptop Ultra",
      category: "Computadoras",
      price: 24999,
      stock: 8,
      status: "Activo",
      image: "/placeholder.svg",
      sold: 12,
    },
    {
      id: 3,
      name: "Auriculares Pro",
      category: "Accesorios",
      price: 2499,
      stock: 25,
      status: "Activo",
      image: "/placeholder.svg",
      sold: 45,
    },
    {
      id: 4,
      name: "Teclado Mecánico",
      category: "Accesorios",
      price: 1899,
      stock: 0,
      status: "Sin Stock",
      image: "/placeholder.svg",
      sold: 32,
    },
    {
      id: 5,
      name: 'Monitor 27"',
      category: "Computadoras",
      price: 8999,
      stock: 5,
      status: "Activo",
      image: "/placeholder.svg",
      sold: 18,
    },
    {
      id: 6,
      name: "Tablet Pro",
      category: "Electrónicos",
      price: 9999,
      stock: 0,
      status: "Inactivo",
      image: "/placeholder.svg",
      sold: 0,
    },
  ]

  // Filtrar productos
  const filteredProducts = products.filter((product) => {
    // Filtrar por estado
    if (filter !== "all" && product.status.toLowerCase() !== filter.toLowerCase()) {
      return false
    }

    // Filtrar por término de búsqueda
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false
    }

    return true
  })

  // Manejar eliminación de producto
  const handleDeleteClick = (product) => {
    setSelectedProduct(product)
    onOpen()
  }

  const confirmDelete = () => {
    // Aquí iría la lógica para eliminar el producto
    toast({
      title: "Producto eliminado",
      description: `${selectedProduct.name} ha sido eliminado correctamente.`,
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    onClose()
  }

  return (
    <Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        mb={6}
      >
        <Heading mb={{ base: 4, md: 0 }}>Mis Productos</Heading>
        <Button as={Link} to="/dashboard/seller/products/add" colorScheme="blue" leftIcon={<FaPlus />}>
          Añadir Producto
        </Button>
      </Flex>

      <ProductsFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />

      {filteredProducts.length === 0 ? (
        <Text fontSize="lg" textAlign="center">
          No se encontraron productos que coincidan con tu búsqueda.
        </Text>
      ) : (
        <ProductsTable products={filteredProducts} onDeleteClick={handleDeleteClick} />
      )}

      <DeleteProductModal
        isOpen={isOpen}
        onClose={onClose}
        selectedProduct={selectedProduct}
        confirmDelete={confirmDelete}
      />
    </Box>
  )
}

export default Products
