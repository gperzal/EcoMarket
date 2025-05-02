import { useState, useEffect, useCallback } from "react"
import * as catalogService from "../services/catalogService"

export const useCatalog = (initialParams = {}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Estados de filtros sincronizados
  const [category, setCategory] = useState(initialParams.category || "")
  const [subcategories, setSubcategories] = useState([])
  const [search, setSearch] = useState("")
  const [priceRange, setPriceRange] = useState([0, 2000000])
  const [freeShipping, setFreeShipping] = useState(null)
  const [sortBy, setSortBy] = useState("")
  const [page, setPage] = useState(0)

  const cleanFilters = useCallback(() => {
    const filters = {
      category,
      subcategory: subcategories,
      search,
      minPrice: priceRange?.[0],
      maxPrice: priceRange?.[1],
      freeShipping,
      sortBy,
      page,
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key]
      if (
        value === undefined ||
        value === null ||
        (Array.isArray(value) && value.length === 0)
      ) {
        delete filters[key]
      }
    })

    return filters
  }, [category, subcategories, search, priceRange, freeShipping, sortBy, page])



  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const query = cleanFilters()
      const data = await catalogService.getProducts(query)
      setProducts(data)
    } catch (err) {
      setError(err.response?.data?.message || "Error al cargar los productos")
    } finally {
      setLoading(false)
    }
  }, [cleanFilters])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts, cleanFilters])


  const resetFilters = () => {
    setSubcategories([])
    setSearch("")
    setPriceRange([0, 2000000])
    setFreeShipping(null)
    setSortBy("")
    setPage(0)
  }

  return {
    products,
    loading,
    error,
    filters: {
      category,
      subcategories,
      search,
      priceRange,
      freeShipping,
      sortBy,
      page,
    },
    setCategory,
    setSubcategories,
    setSearch,
    setPriceRange,
    setFreeShipping,
    setSortBy,
    setPage,
    resetFilters,
    refetch: fetchProducts,
  }
}

export default useCatalog
