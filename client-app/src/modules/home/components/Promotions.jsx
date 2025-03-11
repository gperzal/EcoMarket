
// New component: PromoBanners for mid-page promotional content
import React from 'react';
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';

const Promotion = ({ title, description, image, buttonText, reverse }) => {
  const textColor = useColorModeValue("white", "white");
  const btnBg = useColorModeValue("white", "gray.800");
  const btnTextColor = useColorModeValue("brand.primary.600", "brand.primary.300");
  const borderRadius = useBreakpointValue({ base: "md", md: "lg" });
  
  return (
    <Box 
      position="relative" 
      overflow="hidden" 
      borderRadius={borderRadius} 
      h={{ base: "200px", md: "220px" }}
    >
      <Image
        src={image}
        alt={title}
        w="100%"
        h="100%"
        objectFit="cover"
        filter="brightness(0.85)"
      />
      
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg={`linear-gradient(${reverse ? "270deg" : "90deg"}, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)`}
        display="flex"
        alignItems="center"
      >
        <Stack
          spacing={3}
          p={{ base: 4, md: 6 }}
          maxW={{ base: "80%", md: "60%" }}
          ml={reverse ? { base: 0, md: "auto" } : 0}
          mr={reverse ? 0 : { base: 0, md: "auto" }}
          pr={reverse ? { base: 4, md: 6 } : 0}
          pl={reverse ? 0 : { base: 4, md: 6 }}
          textAlign={reverse ? "right" : "left"}
        >
          <Heading
            size={{ base: "md", md: "lg" }}
            color={textColor}
            fontWeight="bold"
          >
            {title}
          </Heading>
          
          <Text
            color={textColor}
            fontSize={{ base: "sm", md: "md" }}
            display={{ base: "none", sm: "block" }}
          >
            {description}
          </Text>
          
          <Button
            size={{ base: "sm", md: "md" }}
            variant="solid"
            bg={btnBg}
            color={btnTextColor}
            borderRadius="full"
            fontWeight="bold"
            px={6}
            alignSelf={reverse ? "flex-end" : "flex-start"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "md",
            }}
          >
            {buttonText}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

const PromoBanners = () => {
  return (
    <Box mb={12} px={{ base: 4, md: 6 }} maxW="1400px" mx="auto">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Promotion
          title="Productos Ecológicos"
          description="Descubre nuestra colección de artículos sostenibles y amigables con el medio ambiente."
          image="/placeholder.svg?height=220&width=600&text=Eco+Friendly"
          buttonText="Explorar"
          reverse={false}
        />
        <Promotion
          title="Ofertas de la Semana"
          description="No te pierdas estos descuentos exclusivos por tiempo limitado en los mejores productos."
          image="/placeholder.svg?height=220&width=600&text=Ofertas+Exclusivas"
          buttonText="Ver Ofertas"
          reverse={true}
        />
      </SimpleGrid>
    </Box>
  );
};

export default PromoBanners;