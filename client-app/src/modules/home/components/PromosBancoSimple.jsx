import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const BancoSimplePromo = () => {
  const bgColor = useColorModeValue("blue.700", "gray.800"); // Fondo vibrante
  const textColor = useColorModeValue("white", "gray.100");
  const accentColor = useColorModeValue("cyan.300", "cyan.500");

  return (
    <Box
      bg={bgColor}
      borderRadius="2xl"
      maxW="1400px"
      mx="auto"
      my={6}
      px={{ base: 6, md: 12 }}
      py={{ base: 8, md: 10 }}
      boxShadow="lg"
      position="relative"
      overflow="hidden"
    >
      {/* Logo de fondo */}
      <Box position="absolute" top="10%" left="5%" zIndex={0} opacity={0.2}>
        <Image
          src="/BancoSimpleLogo.svg"
          alt="BancoSimple"
          maxWidth={{ base: "150px", md: "250px" }}
        />
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        position="relative"
        zIndex={1} // Asegura que el texto esté por encima del logo
      >
        {/* Sección de texto */}
        <Box maxW="500px">
          <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={textColor}>
            Paga con <Text as="span" color={accentColor}>BancoSimple</Text> y obtén hasta 
            <Text as="span" color="yellow.300"> 10% de descuento</Text>
          </Text>
          
          <Text fontSize="lg" color={useColorModeValue("gray.200", "gray.400")} mt={3}>
            Disfruta de descuentos y cuotas sin interés en EcoMarket con tu tarjeta BancoSimple.
          </Text>
          
          <Button
            mt={5}
            colorScheme="yellow"
            size="lg"
            rightIcon={<FiArrowRight />}
            fontWeight="medium"
          >
            Ver promociones
          </Button>
        </Box>

        {/* Imagen con estilo triangular */}
        <Box position="relative" w={{ base: "100%", md: "40%" }} mt={{ base: 6, md: 0 }}>
          {/* Figura del triángulo */}
          <Box
            position="absolute"
            top="-10px"
            left="-20px"
            w="100%"
            h="100%"
            border="4px solid"
            borderColor="pink.400"
            transform="rotate(10deg)"
            borderRadius="20px"
            opacity={0.7}
          />
          
          {/* Imagen dentro del triángulo */}
          <Image
            src="/img/ban.jpg"
            alt="Promoción BancoSimple"
            borderRadius="lg"
            w="100%"
            h="auto"
            objectFit="cover"
            transform="rotate(-10deg)"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default BancoSimplePromo;
