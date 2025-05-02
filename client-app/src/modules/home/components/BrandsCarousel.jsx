import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    useColorModeValue
} from '@chakra-ui/react';

const BrandsCarousel = () => {
    const headingColor = useColorModeValue("gray.800", "white");
    const bgColor = useColorModeValue("gray.50", "gray.700");
    const borderColor = useColorModeValue("gray.200", "gray.700");

    const brands = [
        { id: 1, name: "Colibri", logo: "/img/Brands/Colibri.svg" },
        { id: 2, name: "MarketMia", logo: "/img/Brands/MarketMia.svg" },
        { id: 3, name: "EcoClothes", logo: "/img/Brands/EcoClothes.svg" },
        { id: 4, name: "Acequia", logo: "/img/Brands/Acequia.svg" },
        { id: 5, name: "Eco Friendly", logo: "/img/Brands/EcoFriendly.svg" },
        { id: 6, name: "Pure Earth", logo: "/img/Brands/DoggoKat.svg" },
    ];

    return (
        <Box mb={12} px={{ base: 4, md: 6 }} maxW="1400px" mx="auto">
            <Heading size="md" color={headingColor} mb={6} fontWeight="semibold">
                Pymes Destacadas
            </Heading>

            <SimpleGrid
                columns={{ base: 3, md: 6 }}
                spacing={4}
            >
                {brands.map(brand => (
                    <Flex
                        key={brand.id}
                        align="center"
                        justify="center"
                        p={4}
                        bg={bgColor}
                        borderRadius="lg"
                        border="1px"
                        borderColor={borderColor}
                        boxShadow="sm"
                        h="100px"
                        transition="all 0.3s"
                        _hover={{
                            transform: "translateY(-5px)",
                            boxShadow: "md",
                            borderColor: "brand.primary.300"
                        }}
                        cursor="pointer"
                    >
                        <Image
                            src={brand.logo}
                            alt={brand.name}
                            maxH="120px"
                            maxW="180px"
                            objectFit="contain"
                        />
                    </Flex>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default BrandsCarousel;