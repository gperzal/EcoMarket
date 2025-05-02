import { Box, Heading, SimpleGrid, Flex, Icon, Text, Link, useColorModeValue } from "@chakra-ui/react"
import { FiArrowRight } from "react-icons/fi"
import { Link as RouterLink } from "react-router-dom"

const SupportCategory = ({ category }) => {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  return (
    <Box mb={8}>
      <Heading size="md" mb={4}>
        {category.title}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {category.topics.map((topic, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            borderColor={borderColor}
            bg={bgColor}
            transition="all 0.3s"
            _hover={{ borderColor: "blue.300", transform: "translateY(-2px)", shadow: "md" }}
          >
            <Flex align="center" mb={2}>
              <Icon as={topic.icon} boxSize={5} color="blue.500" mr={2} />
              <Heading size="sm">{topic.title}</Heading>
            </Flex>
            <Text fontSize="sm" mb={3} noOfLines={2}>
              {topic.description}
            </Text>
            <Link
              as={RouterLink}
              to={topic.url}
              color="blue.500"
              fontSize="sm"
              display="flex"
              alignItems="center"
              fontWeight="medium"
            >
              Ver artículos <Icon as={FiArrowRight} ml={1} />
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default SupportCategory
