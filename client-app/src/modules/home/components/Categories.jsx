import React from 'react';
import { 
  Box, 
  Container,
  Heading, 
  SimpleGrid, 
  VStack,
  Text, 
  useColorModeValue,
  useBreakpointValue 
} from '@chakra-ui/react';

const Categories = () => {
  const columns = useBreakpointValue({ base: 2, sm: 3, md: 4, lg: 6 });
  const bgCategory = useColorModeValue('green.50', 'gray.700');
  const borderColor = useColorModeValue('green.200', 'gray.600');
  const hoverBg = useColorModeValue('green.100', 'gray.600');
  
  const categories = [
    { id: 1, name: 'Tecnología', icon: '💻' },
    { id: 2, name: 'Hogar', icon: '🏠' },
    { id: 3, name: 'Electrodomésticos', icon: '🔌' },
    { id: 4, name: 'Alimentos', icon: '🥑' },
    { id: 5, name: 'Moda', icon: '👕' },
    { id: 6, name: 'Juguetes', icon: '🧸' },
    { id: 7, name: 'Deportes', icon: '⚽' },
    { id: 8, name: 'Herramientas', icon: '🔨' },
    { id: 9, name: 'Jardín', icon: '🌱' },
    { id: 10, name: 'Mascotas', icon: '🐾' },
    { id: 11, name: 'Belleza', icon: '💄' },
    { id: 12, name: 'Libros', icon: '📚' },
  ];

  return (
    <Box as="section" py={8}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="stretch">
          <Heading 
            size="lg" 
            color="green.600"
            textAlign={{ base: 'center', md: 'left' }}
          >
            Explora por Categorías
          </Heading>
          <SimpleGrid columns={columns} spacing={4}>
            {categories.map((category) => (
              <Box
                key={category.id}
                bg={bgCategory}
                border="1px"
                borderColor={borderColor}
                borderRadius="lg"
                p={4}
                textAlign="center"
                cursor="pointer"
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
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Categories;