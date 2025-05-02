// src/utils/categoryTranslator.js
import {
  FaLaptop,
  FaMobile,
  FaTshirt,
  FaHome,
  FaGamepad,
  FaBook,
  FaBabyCarriage,
  FaCar,
} from "react-icons/fa"

export const categoryMap = {
  electronics: { label: "Electrónicos", icon: FaLaptop },
  mobile: { label: "Celulares", icon: FaMobile },
  fashion: { label: "Moda", icon: FaTshirt },
  home: { label: "Hogar", icon: FaHome },
  gaming: { label: "Videojuegos", icon: FaGamepad },
  books: { label: "Libros", icon: FaBook },
  kids: { label: "Bebés", icon: FaBabyCarriage },
  vehicles: { label: "Vehículos", icon: FaCar },
}

// Normalización para acentos y capitalización
const normalize = (str) =>
  str?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()

// slug en URL → nombre en BD (español)
export const toSpanishCategory = (slug) => {
  const normalizedSlug = normalize(slug)
  const entry = Object.entries(categoryMap).find(
    ([key]) => normalize(key) === normalizedSlug
  )
  return entry ? entry[1].label : slug
}

// nombre en BD → slug en URL
export const toEnglishSlug = (label) => {
  const normalizedLabel = normalize(label)
  const entry = Object.entries(categoryMap).find(
    ([_, value]) => normalize(value.label) === normalizedLabel
  )
  return entry ? entry[0] : label.toLowerCase()
}

export const getAllCategories = () => categoryMap
