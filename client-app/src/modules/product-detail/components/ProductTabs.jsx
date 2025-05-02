import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
  Text,
  Box,
  Heading,
  Grid,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react"

const ProductTabs = ({ product }) => {
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Tabs colorScheme="blue">
      <TabList px={4}>
        <Tab>Descripción</Tab>
        <Tab>Especificaciones</Tab>
        <Tab>Opiniones</Tab>
        <Tab>Preguntas y respuestas</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <VStack align="stretch" spacing={6}>
            <Text>{product.description}</Text>

            <Box>
              <Heading size="md" mb={4}>
                Características principales
              </Heading>
              <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
                {product.features.map((feature, index) => (
                  <Flex key={index} align="center">
                    <Box as="span" w="2" h="2" borderRadius="full" bg="blue.500" mr={2} />
                    <Text>{feature}</Text>
                  </Flex>
                ))}
              </Grid>
            </Box>
          </VStack>
        </TabPanel>

        <TabPanel>
          <Heading size="md" mb={4}>
            Especificaciones técnicas
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
            {Object.entries(product.specifications).map(([key, value]) => (
              <Flex key={key} py={2} borderBottomWidth="1px" borderColor={borderColor}>
                <Text fontWeight="medium" minW="150px">
                  {key}:
                </Text>
                <Text>{value}</Text>
              </Flex>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel>
          <Heading size="md" mb={4}>
            Opiniones sobre el producto
          </Heading>
          <Text>Esta sección mostraría las reseñas de los usuarios.</Text>
        </TabPanel>

        <TabPanel>
          <Heading size="md" mb={4}>
            Preguntas y respuestas
          </Heading>
          <Text>Esta sección mostraría las preguntas de los usuarios y las respuestas del vendedor.</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ProductTabs
