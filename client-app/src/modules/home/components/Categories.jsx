import React from 'react';
import { 
  Box, 
  Container,
  Heading, 
  SimpleGrid, 
  VStack,
  Text, 
  useColorModeValue,
  useBreakpointValue,
  Link
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Categories = () => {
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 6 });
  const bgCategory = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.50', 'gray.600');
  const hoverBg = useColorModeValue('brand.secondary.100', 'brand.primary.600');
  
  const categories = [
    { id: 1, name: 'Electrónica', icon: '💻', url: '/catalog/electronics' },
    { id: 2, name: 'Celulares', icon: '📱', url: '/catalog/phones' },
    { id: 3, name: 'Moda', icon: '👕', url: '/catalog/fashion' },
    { id: 4, name: 'Hogar', icon: '🏠', url: '/catalog/home' },
    { id: 5, name: 'Videojuegos', icon: '🎮', url: '/catalog/videogames' },
    { id: 6, name: 'Libros', icon: '📚', url: '/catalog/books' },
    { id: 7, name: 'Bebés', icon: '🍼', url: '/catalog/babies' },
    { id: 8, name: 'Vehículos', icon: '🚗', url: '/catalog/vehicles' },
    { id: 9, name: 'Deportes', icon: '⚽', url: '/catalog/sports' },
    { id: 10, name: 'Belleza', icon: '💄', url: '/catalog/beauty' },
    { id: 11, name: 'Mascotas', icon: '🐾', url: '/catalog/pets' },
    { id: 12, name: 'Herramientas', icon: '🔨', url: '/catalog/tools' },
  ];

  return (
    <Box as="section" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="stretch">
          <Heading 
            size="lg" 
            color="brand.primary.800"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Explora por Categorías
          </Heading>
          <SimpleGrid columns={columns} spacing={4}>
            {categories.map((category) => (
              <Link
                as={RouterLink}
                to={category.url}
                key={category.id}
                _hover={{
                  textDecoration: 'none'
                }}
              >
                <Box
                  bg={bgCategory}
                  border="1px"
                  borderColor={borderColor}
                  borderRadius="lg"
                  p={4}
                  textAlign="center"
                  transition="all 0.3s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    bg: hoverBg,
                    shadow: 'md',
                  }}
                >
                  <Text fontSize="3xl" mb={2}>{category.icon}</Text>
                  <Text 
                    fontSize="sm" 
                    fontWeight="medium"
                    color="gray.700"
                    _dark={{ color: 'gray.200' }}
                  >
                    {category.name}
                  </Text>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Categories;