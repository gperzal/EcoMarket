import React from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Image,
  Button,
  useColorModeValue,
  Badge
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

const BlogPost = ({ post }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const descriptionColor = useColorModeValue("gray.600", "gray.400");
  
  return (
    <Box
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "md"
      }}
      cursor="pointer"
    >
      <Box position="relative">
        <Image
          src={post.image}
          alt={post.title}
          h="200px"
          w="100%"
          objectFit="cover"
        />
        <Badge
          position="absolute"
          top="10px"
          right="10px"
          colorScheme="blue"
          variant="solid"
          borderRadius="full"
          px={3}
          py={1}
        >
          {post.category}
        </Badge>
      </Box>
      
      <Box p={5}>
        <Heading size="md" color={textColor} mb={2} noOfLines={2}>
          {post.title}
        </Heading>
        
        <Text color={descriptionColor} fontSize="sm" mb={4} noOfLines={3}>
          {post.excerpt}
        </Text>
        
        <Flex justify="space-between" align="center">
          <Text fontSize="sm" color="gray.500">
            {post.date}
          </Text>
          <Button
            variant="link"
            rightIcon={<FiArrowRight />}
            color="brand.primary.500"
            fontWeight="medium"
            fontSize="sm"
          >
            Leer más
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

const BlogPosts = () => {
  const headingColor = useColorModeValue("gray.800", "white");
  const btnColor = useColorModeValue("brand.primary.500", "brand.primary.300");
  
  const posts = [
    {
      id: 1,
      title: "Guía completa para iniciar tu huerta urbana en casa",
      excerpt: "Aprende a cultivar tus propias verduras y hierbas en espacios reducidos con este tutorial paso a paso para principiantes.",
      image: "/placeholder.svg?height=200&width=400&text=Huerta+Urbana",
      category: "Guía",
      date: "10 de Feb, 2025"
    },
    {
      id: 2,
      title: "10 productos ecológicos que transformarán tu rutina diaria",
      excerpt: "Descubre estos artículos sostenibles que te ayudarán a reducir tu huella de carbono sin sacrificar comodidad ni calidad.",
      image: "/placeholder.svg?height=200&width=400&text=Productos+Ecológicos",
      category: "Lifestyle",
      date: "1 de Feb, 2025"
    },
    {
      id: 3,
      title: "Cómo reducir el plástico en tu hogar: alternativas sostenibles",
      excerpt: "Consejos prácticos y productos recomendados para disminuir drásticamente el uso de plásticos de un solo uso en tu día a día.",
      image: "/placeholder.svg?height=200&width=400&text=Reducir+Plástico",
      category: "Tips",
      date: "25 de Ene, 2025"
    }
  ];
  
  return (
    <Box mb={12} px={{ base: 4, md: 6 }} maxW="1400px" mx="auto">
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="md" color={headingColor} fontWeight="semibold">
          Blog EcoExpress
        </Heading>
        <Button
          variant="link"
          color={btnColor}
          fontWeight="medium"
          rightIcon={<FiArrowRight />}
        >
          Ver todos los artículos
        </Button>
      </Flex>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BlogPosts;