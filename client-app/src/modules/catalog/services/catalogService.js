import axios from "axios"

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 🔹 GET /api/products con filtros
export const getProducts = async (params = {}) => {
  const res = await API.get("/products", { params })
  return res.data
}

// 🔹 GET /api/products/:id
export const getProductById = async (id) => {
  const res = await API.get(`/products/${id}`)
  return res.data
}

// 🔹 GET /api/products/:id/similar
export const getSimilarProducts = async (id) => {
  const res = await API.get(`/products/${id}/similar`)
  return res.data
}

// Exportar el servicio completo
const catalogService = {
  getProducts,
  getProductById,
  getSimilarProducts,
}

export default catalogService
