// src/layouts/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Outlet /> {/* Aquí se renderizan las páginas públicas */}
      <Footer />
    </Box>
  );
};

export default Layout;