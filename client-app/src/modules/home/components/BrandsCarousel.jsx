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
    const bgColor = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.700");

    const brands = [
        { id: 1, name: "Eco Friendly", logo: "/placeholder.svg?height=60&width=120&text=Brand+1" },
        { id: 2, name: "Green Life", logo: "/placeholder.svg?height=60&width=120&text=Brand+2" },
        { id: 3, name: "Terra Verde", logo: "/placeholder.svg?height=60&width=120&text=Brand+3" },
        { id: 4, name: "Bio Market", logo: "/placeholder.svg?height=60&width=120&text=Brand+4" },
        { id: 5, name: "Natural Way", logo: "/placeholder.svg?height=60&width=120&text=Brand+5" },
        { id: 6, name: "Pure Earth", logo: "/placeholder.svg?height=60&width=120&text=Brand+6" },
    ];

    return (
        <Box mb={12} px={{ base: 4, md: 6 }} maxW="1400px" mx="auto">
            <Heading size="md" color={headingColor} mb={6} fontWeight="semibold">
                Marcas Destacadas
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
                            maxH="60px"
                            maxW="120px"
                            objectFit="contain"
                        />
                    </Flex>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default BrandsCarousel;