// src/modules/home/pages/HomePage.jsx
import { Box } from "@chakra-ui/react";
import HeroBanner from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeatureProducts";
import DealOfTheDay from "../components/DealOfTheDay";
import Promotions from "../components/Promotions";
import PromosBancoSimple from "../components/PromosBancoSimple";
import BrandsCarousel from "../components/BrandsCarousel";

const HomePage = () => {
  return (
    <Box>
      <HeroBanner />
      <BrandsCarousel />
      <Categories />
      <DealOfTheDay />
      <FeaturedProducts />
      <PromosBancoSimple />
      <Promotions />
    </Box>
  );
};

export default HomePage;

