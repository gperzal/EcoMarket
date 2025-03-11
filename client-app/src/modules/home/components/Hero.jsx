import React from 'react';
import { Box, Image, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './hero.css';

const Hero = () => {
  const bannerHeight = useBreakpointValue({ base: '200px', sm: '250px', md: '350px', lg: '400px' });
  const borderRadius = useBreakpointValue({ base: 0, md: 'lg' });
  const slideBg = useColorModeValue('gray.50', 'gray.700');
  
  const banners = [
    {
      id: 1,
      image: `/img/hero1.avif`,
      alt: 'Productos Eco Amigables'
    },
    {
      id: 2,
      image: `/img/hero2.webp`,
      alt: 'Ofertas Especiales'
    },
    {
      id: 3,
      image: `/img/hero3.png`,
      alt: 'Envío Gratis'
    }
  ];

  // Custom styles for the Swiper component
  const swiperStyle = {
    '--swiper-theme-color': '#4d88ca',
    '--swiper-navigation-size': '22px',
    '--swiper-pagination-bullet-inactive-color': '#CBD5E0',
    '--swiper-pagination-bullet-inactive-opacity': '0.5',
  };

  return (
    <Box 
      mb={8} 
      mx="auto" 
      maxW="1400px" 
      px={{ base: 0, md: 4 }}
      style={swiperStyle}
    >
      <Box 
        borderRadius={borderRadius} 
        overflow="hidden" 
        boxShadow={{ base: "none", md: "md" }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="hero-swiper"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <Box 
                bg={slideBg} 
                h={bannerHeight} 
                position="relative"
                overflow="hidden"
              >
                <Image 
                  src={banner.image || "/placeholder.svg"} 
                  alt={banner.alt} 
                  w="100%" 
                  h="100%" 
                  objectFit="cover"
                  transition="transform 0.3s ease-in-out"
                  _hover={{ transform: "scale(1.02)" }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};


export default Hero;
