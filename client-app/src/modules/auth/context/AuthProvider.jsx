import { useState } from "react";
import AuthContext from "./AuthContext";
import authService from "../services/authService";

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const stored = localStorage.getItem("auth");
    return stored ? JSON.parse(stored) : null;
  });

  const handleAuth = (data) => {
    const authData = {
      token: data.token,
      email: data.email,
      roles: data.roles.map(role => role.toLowerCase()),
      fullName: data.fullName
    };
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
    localStorage.setItem("token", data.token); // Mantener compatibilidad con el token separado
  };

  const login = async (credentials) => {
    try {
      const data = await authService.login(credentials);
      handleAuth(data);
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Error al iniciar sesión"
      };
    }
  };

  const register = async (userData) => {
    try {
      const data = await authService.register(userData);
      handleAuth(data);
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Error al registrar usuario"
      };
    }
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
  };

  const hasRole = (roleToCheck) => {
    return auth?.roles?.includes(roleToCheck.toLowerCase()) || false;
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuthenticated: !!auth,
        login,
        register,
        logout,
        hasRole,
        roles: auth?.roles || [],
        userInfo: {
          email: auth?.email,
          fullName: auth?.fullName
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;