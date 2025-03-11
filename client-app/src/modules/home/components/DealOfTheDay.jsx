import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  Button,
  Stack,
  Image,
  HStack,
  useColorModeValue,
  Progress,
  Divider
} from '@chakra-ui/react';
import { FiClock, FiShoppingCart } from 'react-icons/fi';

const DealOfTheDay = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const headingColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("brand.primary.500", "brand.primary.300");
  const progressColor = useColorModeValue("brand.secondary.400", "brand.secondary.300");
  
  // In a real app, this would be dynamic with actual hours, minutes and seconds
  const timeRemaining = {
    hours: 6,
    minutes: 23,
    seconds: 45
  };
  
  // Product details for the deal of the day
  const dealProduct = {
    id: "deal-1",
    name: "Kit Completo Huerta Urbana Orgánica + Semillas Certificadas",
    price: 34990,
    originalPrice: 49990,
    discount: 30,
    image: "/placeholder.svg?height=250&width=250&text=Kit+Huerta+Urbana",
    sold: 157,
    total: 200,
    description: "Todo lo que necesitas para comenzar tu huerta urbana en casa. Incluye macetas biodegradables, tierra orgánica certificada, herramientas ecológicas y semillas de estación."
  };
  
  // Calculate percentage sold
  const percentageSold = Math.round((dealProduct.sold / dealProduct.total) * 100);
  
  return (
    <Box 
      mb={12} 
      px={{ base: 4, md: 6 }} 
      maxW="1400px" 
      mx="auto"
      bg={bgColor}
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow="md"
      overflow="hidden"
    >
      <Box py={6} px={{ base: 4, md: 6 }}>
        <Heading size="md" color={headingColor} mb={4} display="flex" alignItems="center">
          <Box as="span" color="red.500" mr={2}>
            <FiClock />
          </Box>
          Oferta del Día
        </Heading>
        
        <Flex 
          direction={{ base: "column", md: "row" }} 
          align="center" 
          justify="space-between"
          gap={{ base: 6, md: 10 }}
        >
          {/* Product Image */}
          <Box 
            w={{ base: "full", md: "300px" }} 
            h={{ base: "250px", md: "300px" }}
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            bg={useColorModeValue("gray.50", "gray.700")}
            borderRadius="lg"
            p={4}
          >
            <Image 
              src={dealProduct.image} 
              alt={dealProduct.name} 
              maxH="100%" 
              objectFit="contain"
            />
          </Box>
          
          {/* Product Details */}
          <Box flex="1">
            <Stack spacing={4}>
              <Badge colorScheme="red" alignSelf="flex-start" px={2} py={1} borderRadius="md" fontSize="md">
                {dealProduct.discount}% DESCUENTO
              </Badge>
              
              <Heading size="lg" color={headingColor} lineHeight="shorter">
                {dealProduct.name}
              </Heading>
              
              <Text fontSize="md" color={useColorModeValue("gray.600", "gray.400")}>
                {dealProduct.description}
              </Text>
              
              <Flex align="baseline" mt={2}>
                <Text fontSize="3xl" fontWeight="bold" color={headingColor}>
                  ${dealProduct.price.toLocaleString()}
                </Text>
                <Text fontSize="xl" color="gray.500" textDecoration="line-through" ml={3}>
                  ${dealProduct.originalPrice.toLocaleString()}
                </Text>
              </Flex>
              
              {/* Countdown Timer */}
              <Box my={2}>
                <Text fontWeight="medium" mb={2} color={useColorModeValue("gray.600", "gray.400")}>
                  La oferta termina en:
                </Text>
                <HStack spacing={4}>
                  {Object.entries(timeRemaining).map(([unit, value]) => (
                    <Flex 
                      key={unit} 
                      direction="column" 
                      align="center" 
                      bg={useColorModeValue("gray.100", "gray.700")} 
                      borderRadius="md" 
                      p={2} 
                      minW="60px"
                    >
                      <Text fontSize="xl" fontWeight="bold" color={accentColor}>
                        {value.toString().padStart(2, '0')}
                      </Text>
                      <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.400")}>
                        {unit.toUpperCase()}
                      </Text>
                    </Flex>
                  ))}
                </HStack>
              </Box>
              
              <Divider />
              
              {/* Progress Bar */}
              <Box>
                <Flex justify="space-between" mb={1}>
                  <Text fontSize="sm" fontWeight="medium">
                    Unidades vendidas: {dealProduct.sold}
                  </Text>
                  <Text fontSize="sm" fontWeight="medium">
                    Disponibles: {dealProduct.total - dealProduct.sold}
                  </Text>
                </Flex>
                <Progress 
                  value={percentageSold} 
                  colorScheme="orange" 
                  h="8px" 
                  borderRadius="full" 
                  bg={useColorModeValue("gray.100", "gray.700")}
                />
              </Box>
              
              {/* Action Buttons */}
              <Flex 
                gap={4} 
                mt={2} 
                direction={{ base: "column", sm: "row" }}
                align={{ base: "stretch", sm: "center" }}
              >
                <Button 
                  colorScheme="orange" 
                  size="lg" 
                  flex={{ base: "1", sm: "initial" }}
                  px={8}
                  leftIcon={<FiShoppingCart />}
                >
                  Comprar Ahora
                </Button>
                <Button 
                  variant="outline" 
                  colorScheme="blue" 
                  size="lg"
                  flex={{ base: "1", sm: "initial" }}
                >
                  Agregar al Carrito
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DealOfTheDay;