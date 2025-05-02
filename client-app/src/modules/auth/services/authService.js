import axios from "axios"

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL })

export const login = (data) =>
  API.post("/auth/login", data).then(res => res.data)

export const register = (data) =>
  API.post("/auth/register", data).then(res => res.data)

export const verifyToken = () =>
  API.get("/auth/verify").then(res => res.data)

const authService = { login, register, verifyToken }
export default authService
