import axios from "axios"

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL })

// Configurar interceptor para incluir el token en las peticiones
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getProductById = async (id) => {
  try {
    const res = await API.get(`/products/${id}`)
    return res.data
  } catch (error) {
    console.warn("Fallo conexión con API. Usando producto mock:", error.message)
    return mockProducts.find((p) => p.id === Number(id)) || null
  }
}
  const catalogService = {
  getProductById,
}

export default catalogService