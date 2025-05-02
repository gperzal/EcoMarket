"use client"

import { Box, Heading, useToast } from "@chakra-ui/react"
import { useState } from "react"
import FavoritesGrid from "../components/FavoritesGrid"
import EmptyFavorites from "../components/EmptyFavorites"

const Favorites = () => {
  const toast = useToast()

  // Datos de ejemplo
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Smartphone XYZ",
      price: 12999,
      image: "/placeholder.svg",
      discount: 10,
      rating: 4.5,
      seller: "TechStore",
      stock: 15,
    },
    {
      id: 2,
      name: "Laptop Ultra",
      price: 24999,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.8,
      seller: "ComputerZone",
      stock: 8,
    },
    {
      id: 3,
      name: "Auriculares Pro",
      price: 2499,
      image: "/placeholder.svg",
      discount: 15,
      rating: 4.2,
      seller: "AudioWorld",
      stock: 25,
    },
    {
      id: 4,
      name: "Teclado Mecánico",
      price: 1899,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.0,
      seller: "GamerStore",
      stock: 0,
    },
    {
      id: 5,
      name: 'Monitor 27"',
      price: 8999,
      image: "/placeholder.svg",
      discount: 5,
      rating: 4.7,
      seller: "DisplayTech",
      stock: 5,
    },
  ])

  // Eliminar de favoritos
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id))
    toast({
      title: "Eliminado de favoritos",
      description: "El producto ha sido eliminado de tus favoritos.",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  }

  return (
    <Box>
      <Heading mb={6}>Mis Favoritos</Heading>

      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FavoritesGrid favorites={favorites} removeFromFavorites={removeFromFavorites} />
      )}
    </Box>
  )
}

export default Favorites
