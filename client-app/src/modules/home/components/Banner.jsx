// Banner.jsx
import { Box, Heading, Text, Button, useColorModeValue } from "@chakra-ui/react";

export default function Banner() {
  const bannerBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      bg={bannerBg}
      p={8}
      textAlign="center"
      borderRadius="md"
      my={4}
    >
      <Heading mb={2}>Bienvenido a EcoMarket</Heading>
      <Text mb={4}>
        Tu marketplace sustentable y de confianza.
      </Text>
      <Button variant="secondary">Explorar Productos</Button>
    </Box>
  );
}
