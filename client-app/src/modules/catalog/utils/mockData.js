// Mock data for products
export const mockProducts = Array(24)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Producto ${index + 1}`,
    description: "Descripción corta del producto con algunas características básicas.",
    price: Math.floor(Math.random() * 50000) + 500,
    originalPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 60000) + 10000 : null,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    image: `https://blog.ucsp.edu.pe/hs-fs/hubfs/Inbound-Pregrado/electronica-digital.jpg?width=2251&height=1061&name=electronica-digital.jpg`,
    freeShipping: Math.random() > 0.5,
    stock: Math.floor(Math.random() * 100),
    seller: `Vendedor ${Math.floor(Math.random() * 10) + 1}`,
    category: ["Electrónicos", "Computadoras", "Accesorios", "Ropa", "Hogar"][Math.floor(Math.random() * 5)],
  }))

// Categories and subcategories
export const categories = {
  electronics: {
    name: "Electrónicos",
    subcategories: ["Smartphones", "Tablets", "Audio", "Cámaras", "TV"],
  },
  computers: {
    name: "Computadoras",
    subcategories: ["Laptops", "Desktops", "Monitores", "Componentes", "Almacenamiento"],
  },
  accessories: {
    name: "Accesorios",
    subcategories: ["Fundas", "Cargadores", "Auriculares", "Teclados", "Mouse"],
  },
  clothing: {
    name: "Ropa",
    subcategories: ["Camisetas", "Pantalones", "Zapatos", "Accesorios", "Deportiva"],
  },
  home: {
    name: "Hogar",
    subcategories: ["Muebles", "Decoración", "Cocina", "Jardín", "Iluminación"],
  },
}

// Similar products
export const similarProducts = Array(4)
  .fill(null)
  .map((_, index) => ({
    id: index + 2,
    name: `Smartphone XYZ Modelo ${index + 1}`,
    price: Math.floor(Math.random() * 10000) + 5000,
    image: `/placeholder.svg?height=200&width=200`,
    rating: (Math.random() * 1 + 4).toFixed(1),
  }))

// Featured products for homepage
export const featuredProducts = Array(8)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Producto Destacado ${index + 1}`,
    description: "Descripción corta del producto con algunas características básicas.",
    price: Math.floor(Math.random() * 50000) + 500,
    originalPrice: Math.random() > 0.5 ? Math.floor(Math.random() * 60000) + 10000 : null,
    rating: (Math.random() * 2 + 3).toFixed(1),
    reviews: Math.floor(Math.random() * 500),
    image: `/placeholder.svg?height=300&width=300`,
    freeShipping: Math.random() > 0.5,
    stock: Math.floor(Math.random() * 100),
    seller: `Vendedor ${Math.floor(Math.random() * 10) + 1}`,
  }))

// Categories for homepage
export const homeCategories = [
  { name: "Electrónicos", image: "/placeholder.svg?height=200&width=200", path: "/catalog/electronics" },
  { name: "Computadoras", image: "/placeholder.svg?height=200&width=200", path: "/catalog/computers" },
  { name: "Accesorios", image: "/placeholder.svg?height=200&width=200", path: "/catalog/accessories" },
  { name: "Ropa", image: "/placeholder.svg?height=200&width=200", path: "/catalog/clothing" },
  { name: "Hogar", image: "/placeholder.svg?height=200&width=200", path: "/catalog/home" },
  { name: "Ofertas", image: "/placeholder.svg?height=200&width=200", path: "/offers" },
]
