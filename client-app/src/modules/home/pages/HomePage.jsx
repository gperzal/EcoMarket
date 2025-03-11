import { Box } from "@chakra-ui/react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import HeroBanner from "../components/Hero"
import Categories from "../components/Categories"
import FeaturedProducts from "../components/FeatureProducts"
import DealOfTheDay from "../components/DealOfTheDay"
import Promotions from "../components/Promotions"
import BlogPosts from "../components/BlogPosts"
import BrandsCarousel from "../components/BrandsCarousel"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Navbar />
      <HeroBanner />
      <BrandsCarousel />
      <Categories />
      <DealOfTheDay />
      <FeaturedProducts />
    
      <Promotions />
      <BlogPosts />
      <Footer />
    </Box>
  )
}

export default HomePage

