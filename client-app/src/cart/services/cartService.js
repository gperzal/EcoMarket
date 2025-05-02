import axios from "axios"

// Configuración base de axios
const api = axios.create({
  baseURL: import.meta.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const getCartItems = async () => {
  try {
    // Implementación real con axios:
    // const response = await api.get('/cart');
    // return response.data;

    // Por ahora, simulamos una respuesta
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          // Lista de productos en el carrito
        ])
      }, 600)
    })
  } catch (error) {
    console.error("Error en getCartItems:", error)
    throw error.response?.data || error.message
  }
}

export const addToCartService = async (productId, quantity) => {
  try {
    // Implementación real con axios:
    // const response = await api.post('/cart/items', { productId, quantity });
    // return response.data;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Producto añadido al carrito",
        })
      }, 800)
    })
  } catch (error) {
    console.error("Error en addToCartService:", error)
    throw error.response?.data || error.message
  }
}

export const updateCartItemService = async (itemId, quantity) => {
  try {
    // Implementación real con axios:
    // const response = await api.put(`/cart/items/${itemId}`, { quantity });
    // return response.data;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Cantidad actualizada",
        })
      }, 600)
    })
  } catch (error) {
    console.error("Error en updateCartItemService:", error)
    throw error.response?.data || error.message
  }
}

export const removeCartItemService = async (itemId) => {
  try {
    // Implementación real con axios:
    // const response = await api.delete(`/cart/items/${itemId}`);
    // return response.data;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Producto eliminado del carrito",
        })
      }, 600)
    })
  } catch (error) {
    console.error("Error en removeCartItemService:", error)
    throw error.response?.data || error.message
  }
}
