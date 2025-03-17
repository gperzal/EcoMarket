// Enhanced FeaturedProducts.jsx with better styling and responsiveness
import React from 'react';
import { 
  Box, 
  Heading, 
  SimpleGrid, 
  Flex, 
  Text, 
  Image, 
  Badge, 
  Button, 
  useBreakpointValue,
  Icon,
  useColorModeValue,
  Skeleton,
  SkeletonText
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiStar, FiTruck, FiArrowRight, FiHeart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const descriptionColor = useColorModeValue("gray.600", "gray.400");
  const priceColor = useColorModeValue("gray.900", "white");
  const discountColor = useColorModeValue("green.500", "green.300");
  const heartBg = useColorModeValue("white", "gray.700");
  
  return (
    <Box 
      borderRadius="lg" 
      overflow="hidden" 
      bg={cardBg} 
      boxShadow="sm"
      transition="all 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'md' }}
      cursor="pointer"
      border="1px"
      borderColor={borderColor}
      position="relative"
    >
      {/* Wishlist Button */}
      <Box 
        position="absolute" 
        top="10px" 
        right="10px" 
        borderRadius="full" 
        bg={heartBg} 
        p={2}
        opacity="0.8"
        _hover={{ opacity: 1 }}
        transition="all 0.2s"
        boxShadow="sm"
        zIndex={1}
      >
        <Icon as={FiHeart} boxSize={4} color="gray.400" _hover={{ color: "red.500" }} />
      </Box>
      
      {/* Discount badge */}
      {product.discount > 0 && (
        <Badge 
          position="absolute" 
          top="10px" 
          left="10px" 
          colorScheme="red" 
          fontSize="sm" 
          fontWeight="bold" 
          py={1} 
          px={2} 
          borderRadius="md"
          zIndex={1}
        >
          {product.discount}% OFF
        </Badge>
      )}
      
      {/* Product Image */}
      <Box bg={useColorModeValue("gray.50", "gray.900")} p={4} display="flex" justifyContent="center">
        <Image 
          src={product.image || "/placeholder.svg"} 
          alt={product.name} 
          w="100%" 
          h="180px" 
          objectFit="contain"
          transition="transform 0.3s ease"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>
      
      {/* Product Info */}
      <Box p={4}>
        <Text fontWeight="bold" fontSize="lg" color={priceColor} mb={1}>
          ${product.price.toLocaleString()}
        </Text>
        
        {product.originalPrice && (
          <Text fontSize="sm" color="gray.500" textDecoration="line-through">
            ${product.originalPrice.toLocaleString()}
          </Text>
        )}
        
        {product.installments > 0 && (
          <Text fontSize="sm" color={discountColor} fontWeight="medium">
            {product.installments} cuotas de ${Math.round(product.price / product.installments).toLocaleString()}
          </Text>
        )}
        
        {product.freeShipping && (
          <Flex align="center" color={discountColor} mt={2} fontSize="sm">
            <Icon as={FiTruck} mr={1} />
            <Text fontWeight="medium">Envío gratis</Text>
          </Flex>
        )}
        
        <Text mt={3} noOfLines={2} fontSize="sm" color={descriptionColor} lineHeight="short">
          {product.name}
        </Text>
        
        {product.rating && (
          <Flex align="center" mt={2}>
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                as={FiStar} 
                color={i < product.rating ? "yellow.400" : "gray.300"} 
                fill={i < product.rating ? "yellow.400" : "none"}
                boxSize={3}
                mr="1px"
              />
            ))}
            <Text fontSize="xs" ml={1} color="gray.500">
              ({product.reviews})
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

// Loading skeleton for product cards
const ProductCardSkeleton = () => {
  return (
    <Box 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="sm"
      border="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Skeleton height="200px" />
      <Box p={4}>
        <Skeleton height="24px" width="120px" mb={2} />
        <Skeleton height="16px" width="100px" mb={2} />
        <SkeletonText mt={2} noOfLines={2} spacing={2} />
        <Flex mt={3}>
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} height="12px" width="12px" mr={1} borderRadius="full" />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const FeaturedProducts = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const headingColor = useColorModeValue("gray.800", "white");
  const btnColor = useColorModeValue("brand.primary.500", "brand.primary.300");
  
  const products = [
    {
      id: 1,
      name: "LaMugs; tazón de cerámica de Labubu.",
      price: 34710,
      originalPrice: 39000,
      image: "/img/FeatureProducts/1.jpg",
      discount: 15,
      installments: 6,
      freeShipping: true,
      rating: 4,
      reviews: 127
    },
    {
      id: 2,
      name: "Bolsa Eco-amigable de Algodón Orgánico",
      price: 8500,
      originalPrice: 9440,
      image: "/img/FeatureProducts/2.jpg",
      discount: 10,
      installments: 3,
      freeShipping: true,
      rating: 5,
      reviews: 89
    },
    {
      id: 3,
      name: "Botella de acero inoxidable de 500ml",
      price: 5990,
      originalPrice: null,
      image: "/img/FeatureProducts/3.jpg",
      discount: 0,
      installments: 3,
      freeShipping: false,
      rating: 4,
      reviews: 56
    },
    {
      id: 4,
      name: "Lanzador de pelotas automático para mascotas",
      price: 7490,
      originalPrice: 9360,
      image: "/img/FeatureProducts/4.jpg",
      discount: 20,
      installments: 6,
      freeShipping: true,
      rating: 4,
      reviews: 203
    },
    {
      id: 5,
      name: "Shampoo Sólido Natural Sin Sulfatos Cabello Normal",
      price: 6990,
      originalPrice: 7350,
      image: "/placeholder.svg?height=180&width=180&text=Shampoo+Sólido",
      discount: 5,
      installments: 3,
      freeShipping: true,
      rating: 5,
      reviews: 142
    },
    {
      id: 6,
      name: "Panel Solar Portátil 10W USB Cargador Celular",
      price: 29990,
      originalPrice: null,
      image: "/placeholder.svg?height=180&width=180&text=Panel+Solar",
      discount: 0,
      installments: 12,
      freeShipping: true,
      rating: 4,
      reviews: 78
    },
    {
      id: 7,
      name: "Compostador Doméstico Cocina 5L Ecológico",
      price: 18500,
      originalPrice: null,
      image: "/placeholder.svg?height=180&width=180&text=Compostador",
      discount: 0,
      installments: 6,
      freeShipping: true,
      rating: 4,
      reviews: 65
    },
    {
      id: 8,
      name: "Taza Café Fibra Bambú Reutilizable 350ml",
      price: 4990,
      originalPrice: 5540,
      image: "/placeholder.svg?height=180&width=180&text=Taza+Bambú",
      discount: 10,
      installments: 3,
      freeShipping: false,
      rating: 5,
      reviews: 112
    },
    {
      id: 9,
      name: "Jabonera Madera Sostenible Baño Ecológico",
      price: 3990,
      originalPrice: null,
      image: "/placeholder.svg?height=180&width=180&text=Jabonera",
      discount: 0,
      installments: 3,
      freeShipping: false,
      rating: 4,
      reviews: 47
    },
    {
      id: 10,
      name: "Lámpara Solar LED Jardín Pack x3 Exterior",
      price: 15990,
      originalPrice: 18820,
      image: "/placeholder.svg?height=180&width=180&text=Lámpara+Solar",
      discount: 15,
      installments: 6,
      freeShipping: true,
      rating: 4,
      reviews: 89
    }
  ];

  return (
    <Box mb={12} px={{ base: 4, md: 6 }} maxW="1400px" mx="auto">
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="md" color={headingColor} fontWeight="semibold">
          Productos Destacados
        </Heading>
        <Button 
          variant="link" 
          color={btnColor} 
          fontWeight="medium" 
          rightIcon={<FiArrowRight />}
        >
          Ver más
        </Button>
      </Flex>

      {isMobile ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          style={{
            '--swiper-navigation-color': '#48BB78',
            '--swiper-pagination-color': '#48BB78',
          }}
        >
          {products.slice(0, 4).map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SimpleGrid columns={{ md: 3, lg: 3, xl: 4 }} spacing={5}>
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default FeaturedProducts;