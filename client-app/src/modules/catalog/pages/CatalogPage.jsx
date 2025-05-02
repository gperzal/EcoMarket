"use client"

import { useEffect } from "react"
import {
  Box, Container, Grid, GridItem, Heading, Text, Flex, Button, Select, Input,
  InputGroup, InputLeftElement, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
  useColorModeValue, Skeleton, useDisclosure, Drawer, DrawerBody, DrawerHeader,
  DrawerOverlay, DrawerContent, DrawerCloseButton
} from "@chakra-ui/react"
import { FiSearch, FiFilter, FiChevronRight } from "react-icons/fi"
import { useParams, Link as RouterLink } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Pagination from "../components/Pagination"
import FilterSidebar from "../components/FilterSidebar"
import useCatalog from "../hooks/useCatalog"

const CatalogPage = () => {
  const { category } = useParams()
  const {
    products, loading, filters,
    setCategory, setPriceRange, setSubcategories,
    setSearch, setSortBy, setPage,
    resetFilters
  } = useCatalog({ category })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    priceRange,
    subcategories,
    sortBy,
    search,
    page
  } = filters

  const productsPerPage = 12
  const totalPages = Math.ceil(products.length / productsPerPage)
  const indexOfLastProduct = (page + 1) * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  useEffect(() => {
    setCategory(category)
    setPage(0)
  }, [category])

  const handleSubcategoryChange = (subcat) => {
    setSubcategories((prev) =>
      prev.includes(subcat) ? prev.filter(s => s !== subcat) : [...prev, subcat]
    )
    setPage(0)
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setPage(0)
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
    setPage(0)
  }

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.800", "white")

  return (
    <Container maxW="1400px" px={{ base: 4, md: 6 }} py={6}>
      <Breadcrumb separator={<FiChevronRight />} mb={4} fontSize="sm" color={textColor}>
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/">Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        {category && (
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{category}</BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </Breadcrumb>

      <Flex justify="space-between" align="center" mb={6} direction={{ base: "column", md: "row" }} gap={{ base: 4, md: 0 }}>
        <Box>
          <Heading size="lg">{category || "Todos los productos"}</Heading>
          <Text color="gray.500" mt={1}>{products.length} productos encontrados</Text>
        </Box>

        <Button leftIcon={<FiFilter />} onClick={onOpen} display={{ base: "flex", md: "none" }} colorScheme="blue" variant="outline" width="full">
          Filtros
        </Button>

        <Box display={{ base: "none", md: "block" }} minW="200px">
          <Select value={sortBy} onChange={handleSortChange} bg={bgColor} borderColor={borderColor}>
            <option value="relevance">Más relevantes</option>
            <option value="price_asc">Menor precio</option>
            <option value="price_desc">Mayor precio</option>
            <option value="rating">Mejor calificados</option>
            <option value="newest">Más recientes</option>
          </Select>
        </Box>
      </Flex>

      <Box mb={6}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Buscar productos..."
            value={search}
            onChange={handleSearchChange}
            bg={bgColor}
            borderColor={borderColor}
          />
        </InputGroup>
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "250px 1fr" }} gap={6}>
        <GridItem display={{ base: "none", md: "block" }}>
          <Box p={4} bg={bgColor} borderRadius="md" borderWidth="1px" borderColor={borderColor} position="sticky" top="100px">
            <FilterSidebar
              priceRange={priceRange}
              setPriceRange={(range) => { setPriceRange(range); setPage(0) }}
              selectedSubcategories={subcategories}
              handleSubcategoryChange={handleSubcategoryChange}
              subcategories={[...new Set(products.map(p => p.subcategory))]}
              resetFilters={() => { resetFilters(); setPage(0) }}
            />
          </Box>
        </GridItem>

        <GridItem>
          {loading ? (
            <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={6}>
              {Array(6).fill(null).map((_, index) => (
                <Skeleton key={index} height="350px" borderRadius="md" />
              ))}
            </Grid>
          ) : currentProducts.length === 0 ? (
            <Box p={8} textAlign="center" bg={bgColor} borderRadius="md" borderWidth="1px" borderColor={borderColor}>
              <Heading size="md" mb={4}>No se encontraron productos</Heading>
              <Text mb={6}>Intenta con otros filtros o términos de búsqueda</Text>
              <Button colorScheme="blue" onClick={() => { resetFilters(); setPage(0) }}>Limpiar filtros</Button>
            </Box>
          ) : (
            <Grid templateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={6}>
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>
          )}

          {products.length > 0 && (
            <Box mt={8}>
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
            </Box>
          )}
        </GridItem>
      </Grid>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor={borderColor}>Filtros</DrawerHeader>
          <DrawerBody py={4}>
            <FilterSidebar
              priceRange={priceRange}
              setPriceRange={(range) => { setPriceRange(range); setPage(0) }}
              selectedSubcategories={subcategories}
              handleSubcategoryChange={handleSubcategoryChange}
              subcategories={[...new Set(products.map(p => p.subcategory))]}
              resetFilters={() => { resetFilters(); setPage(0) }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Container>
  )
}

export default CatalogPage
