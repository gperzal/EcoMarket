import { Routes, Route, Navigate } from "react-router-dom"
import { useDashboardContext } from "../context/DashboardContext"

// Páginas de comprador
import BuyerDashboard from "../features/buyer-dashboard/pages/BuyerDashboard"
import Orders from "../features/orders/pages/Orders"
import OrderDetail from "../features/orders/pages/OrderDetail"
import Favorites from "../features/favorites/pages/Favorites"
import BuyerProfile from "../features/profile/pages/BuyerProfile"

// Páginas de vendedor
import SellerDashboard from "../features/seller-dashboard/pages/SellerDashboard"
import Products from "../features/products/pages/Products"
import AddProduct from "../features/products/pages/AddProduct"
import EditProduct from "../features/products/pages/EditProduct"
import SellerOrders from "../pages/seller/SellerOrders"
import Analytics from "../pages/seller/Analytics"
import SellerStore from "../pages/seller/SellerStore"
import Finances from "../pages/seller/Finances"

// Páginas de admin
import AdminDashboard from "../features/admin-dashboard/pages/AdminDashboard"

// Página de configuración común
import Settings from "../pages/common/Settings"

const DashboardRoutes = () => {
  const { activeView, hasRole } = useDashboardContext()

  // Proteger rutas según el rol
  const ProtectedRoute = ({ children, requiredRole }) => {
    if (!hasRole(requiredRole)) {
      return <Navigate to="/dashboard" replace />
    }
    return children
  }

  // Renderizar el dashboard correcto según el rol y la vista activa
  const renderDashboard = () => {
    if (hasRole("admin")) {
      return (
        <ProtectedRoute requiredRole="admin">
          <AdminDashboard />
        </ProtectedRoute>
      )
    }
    
    return activeView === "seller" ? (
      <ProtectedRoute requiredRole="seller">
        <SellerDashboard />
      </ProtectedRoute>
    ) : (
      <ProtectedRoute requiredRole="buyer">
        <BuyerDashboard />
      </ProtectedRoute>
    )
  }

  return (
    <Routes>
      {/* Ruta principal del dashboard */}
      <Route index element={renderDashboard()} />

      {/* Rutas de comprador */}
      <Route 
        path="/orders" 
        element={
          <ProtectedRoute requiredRole="buyer">
            <Orders />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/orders/:id" 
        element={
          <ProtectedRoute requiredRole="buyer">
            <OrderDetail />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/favorites" 
        element={
          <ProtectedRoute requiredRole="buyer">
            <Favorites />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute requiredRole="buyer">
            <BuyerProfile />
          </ProtectedRoute>
        } 
      />

      {/* Rutas de vendedor */}
      <Route 
        path="/seller/store" 
        element={
          <ProtectedRoute requiredRole="seller">
            <SellerStore />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/seller/products" 
        element={
          <ProtectedRoute requiredRole="seller">
            <Products />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/seller/products/add" 
        element={
          <ProtectedRoute requiredRole="seller">
            <AddProduct />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/seller/products/edit/:id" 
        element={
          <ProtectedRoute requiredRole="seller">
            <EditProduct />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/seller/orders" 
        element={
          <ProtectedRoute requiredRole="seller">
            <SellerOrders />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/seller/analytics" 
        element={
          <ProtectedRoute requiredRole="seller">
            <Analytics />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/seller/finances" 
        element={
          <ProtectedRoute requiredRole="seller">
            <Finances />
          </ProtectedRoute>
        } 
      />

      {/* Configuración (común) */}
      <Route path="/settings" element={<Settings />} />

      {/* Redirección para rutas no encontradas */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default DashboardRoutes
