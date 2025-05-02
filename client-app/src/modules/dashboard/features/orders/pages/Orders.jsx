"use client"

import { Box, Heading } from "@chakra-ui/react"
import { useState } from "react"
import OrdersFilter from "../components/OrdersFilter"
import OrdersList from "../components/OrdersList"

const Orders = () => {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Datos de ejemplo
  const orders = [
    {
      id: "ORD-1234",
      date: "2023-11-15",
      status: "Entregado",
      total: 1250,
      items: [{ name: "Smartphone XYZ", quantity: 1, price: 1250, image: "/placeholder.svg" }],
      seller: "TechStore",
    },
    {
      id: "ORD-1235",
      date: "2023-11-10",
      status: "En camino",
      total: 890,
      items: [{ name: "Auriculares Pro", quantity: 1, price: 890, image: "/placeholder.svg" }],
      seller: "AudioWorld",
    },
    {
      id: "ORD-1236",
      date: "2023-11-05",
      status: "Procesando",
      total: 2100,
      items: [{ name: "Laptop Ultra", quantity: 1, price: 2100, image: "/placeholder.svg" }],
      seller: "ComputerZone",
    },
    {
      id: "ORD-1237",
      date: "2023-10-28",
      status: "Cancelado",
      total: 450,
      items: [{ name: "Teclado Mecánico", quantity: 1, price: 450, image: "/placeholder.svg" }],
      seller: "GamerStore",
    },
    {
      id: "ORD-1238",
      date: "2023-10-20",
      status: "Entregado",
      total: 3500,
      items: [{ name: 'Monitor 27"', quantity: 1, price: 3500, image: "/placeholder.svg" }],
      seller: "DisplayTech",
    },
  ]

  // Filtrar órdenes
  const filteredOrders = orders.filter((order) => {
    // Filtrar por estado
    if (filter !== "all" && order.status.toLowerCase() !== filter) {
      return false
    }

    // Filtrar por término de búsqueda
    if (
      searchTerm &&
      !order.id.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !order.items.some((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    ) {
      return false
    }

    return true
  })

  return (
    <Box>
      <Heading mb={6}>Mis Compras</Heading>

      <OrdersFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} filter={filter} setFilter={setFilter} />

      <OrdersList orders={filteredOrders} />
    </Box>
  )
}

export default Orders
